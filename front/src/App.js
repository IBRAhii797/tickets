import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cpricipal from "./Cprincipal.js";
import About from "./About.js";
import ChatLive from "./chat/ChatLive";
import CanPage from "./Can-page-2025/CanPage.js";
import ConcertsPage from "./Concerts-page/ConcertsPage.js";
import Register from "./Login/Login.js";
import Newacc from "./Login/Newacc.js";
import AdminLogin from "./Login/AdminLogin.js";
import Dashboard from "./dashboard/Dashboard.js";
import MusicForm from "./dashboard/DashMusic.js";
import AddMatchForm from "./dashboard/DashCan.js";





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Cpricipal />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Register />} />
          <Route path="/newacc" element={<Newacc />} />
          <Route path="/can-page" element={<CanPage/>} />
          <Route path="/concerts-page" element={<ConcertsPage/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashcan" element={<AddMatchForm/>} />
          <Route path="/dashmusic" element={<MusicForm/>} />



          






       
        </Routes>
        <ChatLive /> {/* إظهار الـ ChatLive في كل الصفحات */}
      </div>
    </Router>
  );
}

export default App;
