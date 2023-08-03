import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Appointment from "./Components/Appointment";
import Blogs from "./Components/Blogs";



function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/aboutus" Component={Aboutus}></Route>
        <Route path="/appointment" Component={Appointment}></Route>
        <Route path="/blogs" Component={Blogs}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
