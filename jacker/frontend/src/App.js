import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/pages/Register";
import Login from "./component/pages/Login";
import Profile from "./component/pages/Profile";
import Dashboard from "./component/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
