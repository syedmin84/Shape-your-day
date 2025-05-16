import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function GoalInput({
  setProgressValue,
  setProgressLabel,
  setGoalButton,
   goals,
  setGoals
}) {
  const ProgressBarQuotes = [
    "Fuel your progress — one goal at a time.",
    "Watch your progress rise with every task! ",
    "Just a step away, keep going.",
    "Great job! Now you cand add new goals.↗️ ",
  ];
  // const [goals, setGoals] = useState(
  //   JSON.parse(localStorage.getItem("goals")) || [
  //     { text: "Drink 8 glasses of water", completed: false },
  //     { text: "Spend 30 minutes learning something new", completed: false },
  //     { text: "", completed: false },
  //   ]
  // );

  const ProgressBar = () => {
    // Calculate progress bar value
    const completedGoals = goals.filter((value) => {
      return value.completed;
    });
    setProgressValue((completedGoals.length * 100) / goals.length);

    if (completedGoals.length >= 3) {
      setGoalButton(true);
    } else {
      setGoalButton(false);
    }

    setProgressLabel(ProgressBarQuotes[completedGoals.length]);
  };
  onload = () => {
    ProgressBar();
  };
  const [showError, setShowError] = useState(false);

  const handleTextChange = (index, value) => {
    if (goals[index].completed) return;

    const updatedGoals = [...goals];
    updatedGoals[index].text = value;
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
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
    localStorage.setItem("goals", JSON.stringify(updatedGoals));

    // Calculate progress bar value
    ProgressBar();

    // Check if all goals are completed
    // const allCompleted = updatedGoals.every((goal) => goal.completed);
    // setGoalButton(allCompleted);
    //  if (index === goals.length - 1) {
    //     setGoalButton(true)
    // setGoals([...goals, { text: "", completed: false }]);
    // }
  };

  return (
    <>
      {/* Error Label */}
      <p
        className={`text-[#FF5151] text-sm  py-[12px_10px]  ${
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
