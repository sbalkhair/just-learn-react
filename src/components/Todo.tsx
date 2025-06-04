import { Plus, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const [input, setInput] = useState("");

  const handleAddTodoToList = () => {
    setTodos([...todos, input]);
    setInput("");
    console.log(...todos);
  };
  return (
    <div className='flex  items-center space-y-3  bg-blue-100 min-h-screen'>
      <div className='p-4 flex flex-col space-y-3 bg-white w-full m-4 md:w-1/2 md:mx-auto rounded-xl shadow-lg'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>Todo List App</h1>
        <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Task' />
        <Button onClick={handleAddTodoToList} className='hover:cursor-pointer'>
          Add <Plus />
        </Button>

        <div className='mt-4  max-h-screen overflow-scroll'>
          {todos.length > 0 && (
            <>
              <h1 className='font-bold border-b pb-4 text-center my-2'>List of Tasks</h1>
              <div>
                {todos.map((todo, index) => (
                  <div key={index} className='flex items-center justify-between p-2 border-b'>
                    <span>{todo}</span>
                    <Button
                      className='hover:cursor-pointer'
                      variant='destructive'
                      onClick={() => {
                        setTodos(todos.filter((_, i) => i !== index));
                      }}>
                      <XIcon />
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
