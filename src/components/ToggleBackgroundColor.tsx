import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";

const ToggleBackgroundColor = () => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <div className={cn("flex flex-col gap-3 items-center justify-center h-screen transition duration-1000", isLight ? "bg-white text-black" : "bg-black text-white")}>
      <h1 className='text-3xl'>Toggle Theme Color</h1>
      <Button className={buttonVariants({ variant: isLight ? "default" : "secondary", className: "cursor-pointer" })} onClick={toggleTheme}>
        {isLight ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
};

export default ToggleBackgroundColor;
