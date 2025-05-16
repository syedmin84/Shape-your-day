import { useState } from "react";
import "./App.css";
import GoalInput from "./components/GoalInput";
function App() {
  const [progrssValue, setProgressValue] = useState(0);
  return (
    <>
      <main className="flex justify-center items-center  m-6 font-[Poppins_sans-serif] relative ">
        <section className="  ml-20 w-[700px]  bg-[#000] shadow-[0_0_10px_#0ef] rounded-[20px]  overflow-hidden">
          <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mt-3  mb-[40px]">
            Focus on today
          </h1>
          <div className="  w-[20%]  mx-auto absolute top-1/2 left-0  -translate-y-1/2 ">
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
            <h2 className="text-[#fff] text-[32px] font-bold flex gap-6">
              {/* <span>Today</span>{" "}
              <div className="relative ">
                <img
                  src="sun-outer-n.svg"
                  alt=""
                  className="animate-rotate350 w-14 "
                />
                <img
                  src="sun-inner-n.svg"
                  alt=""
                  className=" pt-[.5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div> */}
            </h2>
            <p className="text-base text-[#858585] my-[16px_18px] font-medium font-[Poppins_sans-serif]">
              Raise the bar by completing your goals!
            </p>

            {/* App Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-[#0ef] text-sm font-medium text-center py-1 sm:py-1.5 md:py-2 leading-none rounded-full transform transition-width duration-500 ease-in-out"
                style={{ width: `${progrssValue.toFixed(0)}%` }}
              >
                <span className="px-1 sm:px-1.5 md:px-2">{progrssValue.toFixed(0)}%</span>
              </div>
            </div>
           
            <GoalInput setProgressValue={setProgressValue} />
            <footer className="flex flex-col gap-10 items-center justify-center text-[#fff]   mt-[40px]">
              <p className="text-lg font-bold">“Move one step ahead, today!”</p>
              <p className="text-xs">Made with ❤️ by Syed Min Khan</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
