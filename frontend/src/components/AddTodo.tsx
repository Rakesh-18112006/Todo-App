import { useState } from "react";
import { Todo } from "./Model";

interface Props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo = ({ setTodos, Todos }: Props) => {
  const [todo, setTodo] = useState<string>("");

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo.trim()) return; // Prevent adding empty tasks

    setTodos([
      ...Todos,
      {
        id: Date.now(),
        todo: todo,
        isDone: false,
      },
    ]);
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 w-full ">
      {/* Taskify Heading with Animation */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-lg font-[Poppins] animate-fadeIn mt-3">
        Taskify 
      </h1>

      {/* Input Section */}
      <form
        onSubmit={handleAddItem}
        className="flex items-center bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-3xl shadow-lg w-full max-w-lg  hover:shadow-2xl"
      >
        {/* Task Input with Animation */}
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 text-lg px-5 py-2 rounded-l-3xl border-none outline-none bg-transparent text-white placeholder-gray-800 font-[Montserrat] focus:text-black "
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        {/* Add Button with Glowing Effect */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-3xl text-lg font-medium transition-all duration-300 shadow-md transform hover:scale-110 font-[Poppins] hover:shadow-blue-500/50"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
