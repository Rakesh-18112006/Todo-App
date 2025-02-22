import { Todo } from "./Model";
import TodoItem from "./TodoItem";

interface Props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const TodoItems = ({ Todos, setTodos, coins, setCoins }: Props) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {Todos.length > 0 ? (
          Todos.map((todo) => (
            <TodoItem
              key={todo.id} todo={todo}
              Todos={Todos} setTodos={setTodos}
              coins={ coins } setCoins={ setCoins }
            />
          ))
        ) : (
          <p className="text-center text-gray-800 col-span-full text-xl my-6 font-[Poppins]">
            No tasks available. Add a new one!
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoItems;
