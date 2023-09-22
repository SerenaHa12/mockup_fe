// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes

import Header from "./component/header/header";
import Users from "./component/user/users";
import Photo from "./component/photo/photo";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/photo" element={<Photo />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
