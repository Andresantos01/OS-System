import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { isAuthenticated } from "../authentication";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const RoutesOS = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route
        
        path="/dashboard"
        element={
          isAuthenticated() ? <Dashboard /> : <Navigate to={'/'}/>
        }
        
      />
    </Routes>
  </Router>
  )
  
};

export default RoutesOS;
