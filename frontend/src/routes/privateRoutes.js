/* 
import { Route } from "react-router-dom";
import { isAuthenticated } from '../authentication';
import Login from "../components/Login/Login";

const PrivateRoute = (props) =>
{
    return (
       isAuthenticated() ? (
        <Route path={props.name} />
       ) : (
        <Route path='/'/>
       )
    )
}

export default PrivateRoute */