//3. Build a counter component with increment, decrement, and reset buttons using state.
//4. Create a component that shows a "Login" button if the user is not logged in, and a "Logout" button if they are.

import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [login, setLogin] = useState("logout");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className={`${
          login === "logout"
            ? "bg-blue-900 hover:bg-blue-600"
            : "bg-green-800 hover:bg-green-600"
        } text-white px-4 py-2 rounded transition `}
        onClick={() =>
          setLogin((prev) => (prev === "login" ? "logout" : "login"))
        }
      >
        {login}
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
        <p className="text-xl font-semibold text-gray-700">
          Counter Value: {value}
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={() => setValue((prev) => prev + 1)}
          >
            +
          </button>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-not-allowed"
            disabled
          >
            {value}
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={() => setValue((prev) => (prev !== 0 ? prev - 1 : 0))}
          >
            -
          </button>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setValue(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
