import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(8);
  const [numbersAllowed, setNumbersAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passwordRef = useRef<HTMLInputElement>(null);


  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charAllowed, generatePassword]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4">
        <h2 className="text-2xl font-bold font-mono mb-12 text-center">Password Generator</h2>
      <div className="bg-slate-100 p-6 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Generated Password"
            value={password}
            readOnly
            ref={passwordRef}
            className="border border-gray-300 rounded-md p-2 w-full text-center"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Copy
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="length" className="block text-gray-700">
            Password Length: {length}
          </label>
          <input
            type="range"
            id="length"
            min={4}
            max={14}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="numbersAllowed"
            checked={numbersAllowed}
            onChange={() => setNumbersAllowed((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="numbersAllowed" className="text-gray-700">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="charAllowed"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="charAllowed" className="text-gray-700">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
