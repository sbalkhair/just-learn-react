import { useState } from "react";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=' max-w-4xl mx-auto space-y-3  bg-slate-100 p-5 mb-2'>
      <div className='flex items-center justify-between'>
        <div className='font-bold'>{title}</div>
        <div className='cursor-pointer text-xl' onClick={() => setIsActive(!isActive)}>
          {isActive ? "-" : "+"}
        </div>
      </div>
      <p>{isActive && content}</p>
    </div>
  );
};

export default Accordion;
