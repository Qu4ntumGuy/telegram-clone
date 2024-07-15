import { Routes, BowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div></div>
    </div>
  );
}

export default App;
