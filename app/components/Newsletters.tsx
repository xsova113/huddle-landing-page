"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletters = () => {
  const [input, setInput] = useState({
    input: "",
    isTouched: false,
  });

  function validateEmail() {
    return !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(input.input);
  }

  return (
    <div className="md:w-[40%] flex flex-col">
      <Toaster />
      <h1 className="uppercase pb-6 font-semibold text-2xl">Newsletter</h1>
      <p className="font-medium text-sm tracking-wider pb-10 md:w-[70%]">
        Commodo et cillum mollit officia ad enim est mollit minim eiusmod et.
        Consectetur nisi id eu in dolore sunt sit ut qui.
      </p>
      <div className="flex flex-col md:flex-row md:gap-8 gap-4">
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="john@gmail.com"
            className={`p-3 pr-12 rounded-lg text-[#00252E] font-normal outline-none border ${
              validateEmail() && input.isTouched && "border-red-600"
            }`}
            onChange={(e) => {
              setInput({ ...input, input: e.target.value });
            }}
            onBlur={() => setInput({ ...input, isTouched: true })}
            value={input.input}
          />
          {input.isTouched && validateEmail() && (
            <span className="text-red-600 text-sm font-normal">
              Check your email please
            </span>
          )}
        </div>

        <button
          className="px-10 py-3 max-md:w-1/2 h-[50px] max-md:self-end bg-[#FF52BF] hover:bg-[#FF8FD8] rounded-lg transition"
          onClick={() => toast.success("Subscribed successfully")}
          disabled={!input.input || validateEmail()}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletters;
