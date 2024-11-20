//6. Use the useState hook to create a form that tracks name and age input fields.

import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: 0,
  });
  //set form details
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };
  return (
    <div className="flex flex-row items-center justify-center h-screen ">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleOnChange}
        placeholder="name"
      />
      <input
        type="number"
        min={0}
        max={100}
        name="age"
        value={form.age}
        onChange={handleOnChange}
        placeholder="age"
      />
      <div>
        <p>Name: {form.name}</p>
        <p>Age: {form.age}</p>
      </div>
    </div>
  );
};

export default Form;
