import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Testimonials = () => {
  const testimonials = [
    { message: "message 1", author: "saeed" },
    { message: "message 2", author: "saeed" },
    { message: "message 3", author: "saeed" }
  ];

  const [selectIndex, setSelectIndex] = useState(0);

  const titleApp = "Testimonials APP";
  const handleNextButton = () => {
    if (selectIndex === testimonials.length - 1) {
      setSelectIndex(0);
    } else {
      setSelectIndex(selectIndex + 1);
    }
  };
  const handlePrevButton = () => {
    if (selectIndex === 0) {
      setSelectIndex(testimonials.length - 1);
    } else {
      setSelectIndex(selectIndex - 1);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-green-100'>
      <div className='bg-white p-10 w-full md:max-w-2xl m-4 rounded-4xl shadow-lg'>
        <h1 className='font-bold text-center border-b pb-2 mb-2'>{titleApp}</h1>

        <h2 className='font-bold text-green-500'>{testimonials[selectIndex].message}</h2>

        <p className='text-start italic text-gray-500'>- {testimonials[selectIndex].author}</p>

        <div className='flex items-center justify-between mt-4'>
          <Button className='rounded-full' onClick={handlePrevButton}>
            <ArrowLeft />
          </Button>

          <Button className='rounded-full' onClick={handleNextButton}>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
