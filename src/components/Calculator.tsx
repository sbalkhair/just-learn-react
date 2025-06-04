import { useState } from "react";
import { Input } from "./ui/input";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => setInputValue("");

  const display = (value: string) => setInputValue(inputValue + value);

  const calculate = () => setInputValue(eval(inputValue));
  return (
    <div className='flex items-center justify-center bg-slate-100 h-screen p-2'>
      <div className='bg-[#3d3d3d] min-w-sm border-4 border-[#3d3d3d] rounded-2xl p-2'>
        <Input className='bg-white rounded-2xl mb-3 font-semibold h-20 ' value={inputValue} />
        <div className='grid grid-cols-4  gap-1 text-white text-center '>
          <span className='bg-amber-400 col-span-2 p-4 hover:cursor-pointer' onClick={clear}>
            C
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("/")}>
            /
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("*")}>
            *
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("7")}>
            7
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("8")}>
            8
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("9")}>
            9
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("-")}>
            -
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("4")}>
            4
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("5")}>
            5
          </span>
          <span className='p-4  bg-[#484848]' onClick={() => display("6")}>
            6
          </span>
          <span className='p-4 row-span-2 bg-[#484848] flex items-center justify-center' onClick={() => display("+")}>
            +
          </span>

          <span className='p-4 bg-[#484848]' onClick={() => display("1")}>
            1
          </span>
          <span className='p-4 bg-[#484848]' onClick={() => display("2")}>
            2
          </span>
          <span className='p-4 bg-[#484848]' onClick={() => display("3")}>
            3
          </span>
          <span className='p-4 bg-[#484848]' onClick={() => display("0")}>
            0
          </span>

          <span className='p-4 bg-[#484848]' onClick={() => display(".")}>
            .
          </span>
          <span className='p-4 bg-[#484848] hover:bg-amber-400 col-span-2' onClick={() => calculate()}>
            =
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
