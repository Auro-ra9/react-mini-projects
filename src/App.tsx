import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import BackgroundChanger from "./pages/BackgroundChanger";
import PasswordGenerator from "./pages/PasswordGenerator";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./context/ThemeContext";
import PropPassing from "./pages/20_21_2024/PropPassing";
import Counter from "./pages/20_21_2024/Counter";
import Form from "./pages/20_21_2024/Form";
import FetchAPI from "./pages/20_21_2024/FetchAPI";
import ComponentLifecycle from "./pages/20_21_2024/ComponentLifecycle";
import Register from "./pages/20_21_2024/Register";
import SearchBar from "./pages/20_21_2024/SearchBar";
import HomeContactAbout from "./pages/20_21_2024/HomeContactAbout";

const App = () => {
  return (
    <>
      <Toaster></Toaster>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/home" element={<HomeContactAbout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/color" element={<BackgroundChanger />} />
            <Route path="/props" element={<PropPassing />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/form" element={<Form />} />
            <Route path="/api" element={<FetchAPI />} />
            <Route path="/timer" element={<ComponentLifecycle />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
