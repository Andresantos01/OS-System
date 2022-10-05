import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { isAuthenticated } from "../authentication";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";


const RoutesOS = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route
        exact
        path="/dashboard"
        element={
          isAuthenticated() ? <Dashboard /> : <Navigate replace to={"/"} />
        }
      />
    </Routes>
  </Router>
);

export default RoutesOS;
