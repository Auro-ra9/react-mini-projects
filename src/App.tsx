import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import BackgroundChanger from "./pages/BackgroundChanger";
import PasswordGenerator from "./pages/PasswordGenerator";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./context/ThemeContext";
import PropPassing from "./pages/props/PropPassing";
import Counter from "./pages/props/Counter";
import Form from "./pages/props/Form";

const App = () => {
  return (
    <>
      <Toaster></Toaster>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/color" element={<BackgroundChanger />} />
            <Route path="/props" element={<PropPassing />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
