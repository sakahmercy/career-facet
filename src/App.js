import React from "react";
import { Route, Routes } from "react-router-dom";
import JobSeekersSignUp from "./components/JobSeekersPage/JobSeekersSignUp";
import JobSeekersLogin from "./components/LoginPage/Login";
import CreateAccount from "./components/SignUp/SignUp";
import HomePage from "./components/Home/HomePage";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/jobSeekersSignUp" element={<JobSeekersSignUp />} />
      <Route path="/jobSeekersLogin" element={<JobSeekersLogin />} />
      <Route path= "/createAccount" element={<CreateAccount/>}/>
    </Routes>
  );
}


export default App;
