import { Todo } from "./Model";
import { useState } from "react";
import { FiTrash2, FiEdit3, FiCheckCircle } from "react-icons/fi"; // Feather Icons
 // Import Google Font

interface Props {
  todo: Todo;
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const TodoItem = ({ todo, Todos, setTodos, coins , setCoins }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      Todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );

    if (!todo.isDone) {
     setCoins((prev :number) => prev + 10);
    }
  };

  const handleDelete = (id: number) => {
    setTodos(Todos.filter((t) => t.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(Todos.map((t) => (t.id === id ? { ...t, todo: editText } : t)));
    setEdit(false);
  };

  return (
    <div className=" mt-7 flex items-center justify-between bg-gray-900 text-white px-6 py-5 rounded-lg shadow-lg mb-4 border border-gray-700 w-full max-w-3xl transition-all duration-300 hover:shadow-xl hover:scale-102   mx-auto">
      <form onSubmit={(e) => handleEdit(e, todo.id)} className="flex-1">
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 font-[Poppins] text-lg"
          />
        ) : (
          <span
            className={`text-lg font-medium font-[Poppins] transition-all duration-300 ${
              todo.isDone ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {todo.todo}
          </span>
        )}
      </form>

      {/* Icons Section */}
      <div className="flex items-center gap-5 ml-5">
        {/* Edit Icon */}
        <FiEdit3
          className={`cursor-pointer text-yellow-400 hover:text-yellow-300 transition-all duration-300 ${
            todo.isDone || edit ? "opacity-50 cursor-not-allowed" : ""
          }`}
          size={24}
          onClick={() => {
            if (!todo.isDone && !edit) setEdit(true);
          }}
        />

        {/* Done Icon */}
        <FiCheckCircle
          className={`cursor-pointer ${
            todo.isDone
              ? "text-green-500 hover:text-green-400"
              : "text-gray-400 hover:text-gray-300"
          } transition-all duration-300`}
          size={26}
          onClick={() => handleDone(todo.id)}
        />

        {/* Delete Icon */}
        <FiTrash2
          className="text-red-500 hover:text-red-400 cursor-pointer transition-all duration-300"
          size={24}
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
