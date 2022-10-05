import React from "react";
import { BrowserRouter, Route ,Routes , Redirect } from 'react-router-dom';
import Login from "../components/Login/Login";

const RoutesOS = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>} />
        </Routes>
    </BrowserRouter>
)

export default RoutesOS;
