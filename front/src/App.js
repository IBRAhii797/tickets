import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cpricipal from "./Cprincipal.js";
import About from "./About.js";
import Login from "./Login/Login.js";
import ChatLive from "./chat/ChatLive";
import CanPage from "./Can-page-2025/CanPage.js";
import ConcertsPage from "./Concerts-page/ConcertsPage.js";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Cpricipal />} />
          <Route path="/about" element={<About />} />
          <Route path="/seconnecter" element={<Login />} />
          <Route path="/can-page" element={<CanPage/>} />
          <Route path="/concerts-page" element={<ConcertsPage/>} />

       
        </Routes>
        <ChatLive /> {/* إظهار الـ ChatLive في كل الصفحات */}
      </div>
    </Router>
  );
}

export default App;
