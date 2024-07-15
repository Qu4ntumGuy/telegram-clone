import { Routes, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import ChatPage from "./Pages/ChatPage.js/ChatPage";

function App() {
  return (
    <div className="flex max-w-[105rem] h-screen mx-auto">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/k/:id" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
