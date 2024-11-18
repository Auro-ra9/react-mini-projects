import React, { useState } from "react";

type TypeSetList = {
  title: string;
  id: string;
  completed: boolean;
};

const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [listTodo, setListTodo] = useState<TypeSetList[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem.trim() === "") return;
    setListTodo((currentTodos) => [
      ...currentTodos,
      { title: newItem.trim(), id: crypto.randomUUID(), completed: false },
    ]);
    setNewItem("");
  };

  const toggleTodo = (id: string, completed: boolean) => {
    setListTodo((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setListTodo((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  const handleUndo = (id: string) => {
    setListTodo((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    );
  };

  const incompletedTasks = listTodo.filter((todo) => !todo.completed);
  const completedTasks = listTodo.filter((todo) => todo.completed);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-purple-600">Task Manager</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              type="text"
              id="item"
              placeholder="Add a new task..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button
              className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700 disabled:bg-purple-300"
              type="submit"
              disabled={newItem.trim().length<3}
            >
              Add
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {listTodo.length > 0 ? (
            <div className="rounded-lg bg-purple-50 p-4 text-center">
              {incompletedTasks.length === 1 ? (
                <p className="text-purple-700">One task remaining</p>
              ) : incompletedTasks.length > 1 ? (
                <p className="text-purple-700">{incompletedTasks.length} tasks remaining</p>
              ) : (
                <p className="text-green-600">All tasks completed! 🎉</p>
              )}
            </div>
          ) : (
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-gray-600">No tasks yet. Add one to get started!</p>
            </div>
          )}

          <ul className="space-y-2">
            {listTodo.map((todo) => (
              <li 
                key={todo.id} 
                className={`flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    className="h-5 w-5 rounded-md border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className={`text-lg ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                    {todo.title}
                  </span>
                </label>
                <button 
                  onClick={() => handleDelete(todo.id)}
                  className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                >
                  ❎
                </button>
              </li>
            ))}
          </ul>

          {completedTasks.length > 0 && (
            <div className="mt-8 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-center text-lg font-semibold text-gray-600">
                Completed Tasks
              </h2>
              <ul className="space-y-2">
                {completedTasks.map((todo) => (
                  <li 
                    key={todo.id} 
                    className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4"
                  >
                    <span className="text-gray-400 line-through">
                      {todo.title}
                    </span>
                    <button 
                      onClick={() => handleUndo(todo.id)}
                      className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;