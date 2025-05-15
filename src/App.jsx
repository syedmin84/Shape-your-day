import "./App.css";

function App() {
  return (
    <>
      <main className="flex justify-center items-center  m-6 font-[Poppins_sans-serif]">
        <section className="mx-auto w-[700px]  bg-[#000] shadow-[0_0_10px_#0ef] rounded-[20px]  overflow-hidden">
          <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mt-3  mb-[40px]">
            Focus on today
          </h1>
          {/* App Main */}
          <div className="w-full py-[20px] px-4 md:px-9">
            <h2 className="text-[#fff] text-[32px] font-bold flex gap-6">
              <span>Today</span> <img src="Sun.svg" alt="sun" />
            </h2>
            <p className="text-base text-[#858585] my-[20px_18px] font-medium font-[Poppins_sans-serif]">
              Raise the bar by completing your goals!
            </p>

            {/* App Progress Bar */}
            <div class="w-full bg-gray-200 rounded-full">
              <div
                class="bg-[#0ef] text-sm font-medium text-center p-2 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                {" "}
                45%
              </div>
            </div>
            {/* Error Label */}
            <p className=" text-[#FF5151] text-sm py-[14px_8px]">
              Please set all the 3 goals!
            </p>
            <div className="flex flex-col gap-8">
              <div className="bg-[#000] border-[1px] border-white pl-5 flex items-center gap-4 rounded-2xl overflow-hidden">
                <div
                  id="custom-checkbox"
                  className="w-6 h-6 rounded-[50%]  border border-[white]"
                ></div>
                <input
                  type="text"
                  placeholder="Add a goal ..."
                  className="w-full  text-[#fff] outline-none py-4 pl-2 placeholder:text-[#D9D9D9]"
                />
              </div>
              <div className="bg-[#000] border-[1px] border-white pl-5 flex items-center gap-4 rounded-2xl overflow-hidden">
                <div
                  id="custom-checkbox"
                  className="w-6 h-6 rounded-[50%]  border border-[white]"
                ></div>
                <input
                  type="text"
                  placeholder="Add a goal ..."
                  className="w-full  text-[#fff] outline-none py-4 pl-2 placeholder:text-[#D9D9D9]"
                />
              </div>
              <div className="bg-[#000] border-[1px] border-white pl-5 flex items-center gap-4 rounded-2xl overflow-hidden">
                <div
                  id="custom-checkbox"
                  className="w-6 h-6 rounded-[50%]  border border-[white]"
                ></div>
                <input
                  type="text"
                  placeholder="Add a goal ..."
                  className="w-full  text-[#fff] outline-none py-4 pl-2 placeholder:text-[#D9D9D9]"
                />
              </div>
            </div>
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
