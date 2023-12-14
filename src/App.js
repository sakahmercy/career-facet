import React from "react";
import { Route, Routes } from "react-router-dom";
import JobSeekersSignUp from "./components/JobSeekersPage/JobSeekersForm";
import JobSeekersLogin from "./components/LoginPage/Login";
import CreateAccount from "./components/SignUp/SignUp";
import HomePage from "./components/Home/HomePage";
import Reviews from "./components/Reviews/Reviews";
import Salaries from './components/Salaries/Salaries';
import JobSeekersHomePage from './components/JobSeekersPage/JobSeekersHomePage';
import "./App.css";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/job-seekers-signup" element={<JobSeekersSignUp />} />
      <Route path="/job-seekers-login" element={<JobSeekersLogin />} />
      <Route path= "/create-account" element={<CreateAccount/>}/>
      <Route path = "/reviews" element={<Reviews/>}/>
      <Route path = "/salaries" element={<Salaries/>}/>
      <Route path="/jobseekershomepage" element={<JobSeekersHomePage/>}/>
    </Routes>
  );
}


export default App;



