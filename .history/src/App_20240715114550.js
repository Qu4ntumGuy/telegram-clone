import { Routes, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="flex max-w-[105rem] mx-auto">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
