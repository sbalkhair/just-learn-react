import { useState } from "react";
import { Button } from "./ui/button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-orange-400'>
      <h1 className='text-7xl font-bold text-white'>{count}</h1>
      <div className='flex space-x-4 mt-4'>
        <Button className='px-10' onClick={increment}>
          +
        </Button>
        <Button className='px-10' onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
