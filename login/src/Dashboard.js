import React, {useEffect} from 'react';
import './Dashboard.css';
import Calendar from './Calendar';


function Dashboard({ setAuth, username }) {

    useEffect(() => {
        console.log(username, "hfduerhfey");
      }, [username]);


  
    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    };

    return (
       
        <div>
            <h1 style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}><strong>Admin Dashboard</strong></h1>
             <h1 style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}><strong>Welcome to Our Saviour Community Gardern</strong></h1>
            <Calendar/>
        <button className='logout-button'
        onClick={handleLogout}>Logout</button>
           
        </div>
    );
}

export default Dashboard;