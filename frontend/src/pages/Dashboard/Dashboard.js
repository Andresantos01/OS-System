import { useNavigate } from "react-router-dom";

export default function Dashboard()
{
    const navigate = useNavigate()
     function logout(){
       localStorage.removeItem('token')
        navigate('/', {replace: true})
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={logout}>SAIR</button>
        </>
    )
}