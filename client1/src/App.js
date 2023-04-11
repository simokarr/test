import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <Router><Routes>
      <Route path="/registration" element = {<Registration />} />
      <Route path="/" element={<Main />} />
      <Route path="/FrontPage" element={<FrontPage />} />


    </Routes></Router>

  );
}

export default App;
