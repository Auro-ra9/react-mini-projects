//6. Use the useState hook to create a form that tracks name and age input fields.

import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", age: 0 });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  return (
    <div className="flex items-center justify-around h-screen ">
      <input type="text" name="name" value={form.name} onChange={handleOnChange} placeholder="Name" />
      <input type="text" name="age" value={form.age} onChange={handleOnChange} placeholder="Age" />
      <input type="text" name="age"  onChange={handleOnChange} placeholder="Reset" />
      <div>
        <p>Name: {form.name}</p>
        <p>Age: {form.age}</p>
      </div>
    </div>
  );
};

export default Form;
