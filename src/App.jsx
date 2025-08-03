// import { useState } from 'react'
import "./App.css";
import Keypad from "./components/keypad/Keypad";
import Output from "./components/output/Output";

function App() {
  return (
    <div className="bg-gray-500 w-full h-full flex justify-center items-center">
      <div
        className="w-1/3 h-3/4 border p-4 rounded-xl bg-[#484848] flex flex-col gap-3"
        id="cal_Box"
      >
        <Output />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
