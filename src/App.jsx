import { useState } from "react";
import "./App.css";
import GoalInput from "./components/GoalInput";
function App() {
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("goals")) || [
      { text: "Drink 8 glasses of water", completed: false },
      { text: "Spend 30 minutes learning something new", completed: false },
      { text: "", completed: false },
    ]
  );
  

  const [progrssValue, setProgressValue] = useState(0);
  const [ProgressLabel, setProgressLabel] = useState("");
  const [goalButton, setGoalButton] = useState(false);

  const handleAddNewGoal = () => {
    setGoals([...goals, { text: "", completed: false, newGoal: true }]);
  };

  console.log(goals)
  return (
    <>
      <main className="flex justify-center items-center  m-6 font-[Poppins_sans-serif] relative ">
        <section className=" md:ml-42  lg:ml-20 w-[700px]  bg-[#000] shadow-[0_0_10px_#0ef] rounded-[20px]  overflow-hidden">
          <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mt-3  mb-[40px]">
            Shape Your Day
          </h1>
          <div className=" hidden md:block  w-[20%]  mx-auto absolute top-1/2 left-0  -translate-y-1/2 ">
            <div className="relative opacity-10 hover:opacity-50 transition-opacity duration-400">
              <img
                src="outer-big-sun.svg"
                alt=""
                className="w-full h-full  animate-rotate360  hover:animate-rotate360-fast  "
              />
              <img
                src="inner-big-sun.svg"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          {/* App Main */}
          <div className="w-full py-[20px] px-4 md:px-9">
            <h2 className=" md:hidden text-[#fff] text-[32px] font-bold flex gap-6">
              <span>Today</span>{" "}
              <div className="relative group  ">
                <img
                  src="sun-outer-n.svg"
                  alt=""
                  className="animate-rotate360 w-14 "
                />
                <img
                  src="sun-inner-n.svg"
                  alt=""
                  className=" pt-[.5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </h2>

            <p className="text-base text-[#858585] my-[16px_18px] font-medium font-[Poppins_sans-serif]">
              {ProgressLabel}
            </p>

            {/* App Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-[#0ef] text-sm font-medium text-center py-1 sm:py-1.5 md:py-2 leading-none rounded-full transition-width duration-500 ease-in-out"
                style={{ width: `${progrssValue.toFixed(0)}%` }}
              >
                <span className="px-2 md:px-4">{progrssValue.toFixed(0)}%</span>
              </div>
            </div>

            <GoalInput
              setProgressValue={setProgressValue}
              setProgressLabel={setProgressLabel}
              setGoalButton={setGoalButton}
              goals={goals}
              setGoals={setGoals}
            />
            <footer className="flex flex-col gap-10 items-center justify-center text-[#fff]   mt-[40px]">
              <section className="relative flex items-center lg:justify-center w-full ">
                <p className=" pl-12 text-sm sm:text-base lg:pl-0 lg:text-lg sm:font-bold pr-6">
                  “Shape the present. Own the future!”
                </p>
                <button
                  onClick={handleAddNewGoal}
                  type="button"
                  className={`absolute right-0 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 cursor-pointer ${
                    goalButton ? "visible" : "invisible"
                  }`}
                >
                  Add New Goals
                </button>
              </section>
              <p className="text-xs">Made with ❤️ by Syed Min Khan</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
