import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function GoalInput({setProgressValue}) {
  const [goals, setGoals] = useState([
    { text: "", completed: false },
    { text: "", completed: false },
    { text: "", completed: false },
  ]);

  const [showError, setShowError] = useState(false);

  const handleTextChange = (index, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index].text = value;
    setGoals(updatedGoals);
  };

  const handleCheckboxClick = (index) => {
    const allFilled = goals.every((goal) => goal.text.trim() !== "");

    if (!allFilled) {
      setShowError(true); // show error if any input is empty
      return;
    }
    setShowError(false); // hide error if all are filled

    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  
    // Calculate progress bar value
     const completedGoals = goals.filter((value)=>{
          return value.completed
     })
     setProgressValue(completedGoals.length * 100 / goals.length)

    // if (index === goals.length - 1) {
    //   setGoals([...goals, { text: "", completed: false }]);
    // }
  };

  return (
    <>
      {/* Error Label */}
      <p
        className={`text-[#FF5151] text-sm  py-[16px_10px]  ${
          showError ? "visible" : "invisible"
        }`}
      >
       Please fill out all inputs before checking a goal.
      </p>
      <div className="flex flex-col gap-5 md:gap-8">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="bg-[#000] box-border border-[1px] border-white pl-5 flex items-center gap-2 rounded-2xl overflow-hidden"
          >
            <div
              onClick={() => handleCheckboxClick(index)}
              className={`flex justify-center items-center border ${
                goal.completed ? "bg-[#00eeff] border-0" : ""
              } border-white w-5 sm:w-6 cursor-pointer h-5 sm:h-6 shrink-0 rounded-full`}
            >
              <FaCheck />
            </div>
            <input
              type="text"
              value={goal.text}
              onFocus={(e) => setShowError(false)} // 👈 Ye line add karein
              onChange={(e) => handleTextChange(index, e.target.value)}
              placeholder="Add a goal ..."
              className={`w-full ${
                goal.completed ? "line-through text-[#00eeff!important]" : ""
              } text-[#fff] outline-none py-3 sm:py-4 p-3 placeholder:text-[#D9D9D9]`}
            />
          </div>
        ))}
      </div>

    </>
  );
}
