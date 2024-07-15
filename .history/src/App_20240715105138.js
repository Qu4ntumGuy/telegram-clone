import { Routes, BowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
