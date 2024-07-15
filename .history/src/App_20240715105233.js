import { Routes, BowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="flex max-w-[100rem] mx-auto">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
