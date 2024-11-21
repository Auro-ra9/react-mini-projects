//9. Create a registration form that validates the user input (e.g., email format, password length).

import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const { email, password } = form;

    // Reset error before validating
    setError("");

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters long.");
      return;
    }

    alert("Registration successful!");
    setForm({ email: "", password: "" }); // Reset the form on successful registration
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 border rounded-md shadow-md max-w-sm w-full">
        <h1 className="font-bold text-xl mb-4">Register Page</h1>

        <input
          type="email"
          className="w-full mb-2 p-2 border rounded-md"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full mb-2 p-2 border rounded-md"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
