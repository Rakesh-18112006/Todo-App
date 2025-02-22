import AddTodo from "./components/AddTodo";
import { Todo } from "./components/Model";
import { useState } from "react";
import TodoItems from "./components/TodoItems";

function App() {
  const [Todos, setTodos] = useState<Todo[]>([]);
  const [coins, setCoins] = useState<number>(0);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col items-center py-10 relative">
      
      {/* Header Section */}
      <div className="w-full flex justify-between items-center px-10 absolute top-5">
        {/* App Title */}
        <h1 className="text-white text-3xl font-bold">Taskify 😊</h1>

        {/* Coin Display (Moved to top-right) */}
        <h2 className="text-white text-xl font-semibold flex items-center gap-2">
          Coins: {coins} 🪙
        </h2>
      </div>

      <div className="mt-16 w-full flex flex-col items-center">
        <AddTodo setTodos={setTodos} Todos={Todos} />
        <TodoItems Todos={Todos} setTodos={setTodos} coins={coins} setCoins={setCoins} />
      </div>
    </div>
  );
}

export default App;
