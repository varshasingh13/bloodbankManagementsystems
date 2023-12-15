import '../assets/css/login.css'
import React, {FormEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // async function  handleLogin (event:FormEvent) {
    //     event.preventDefault();
    //     // You can add login functionality here
    //     console.log(`Username: ${username}, Password: ${password}`);
    // };

    async function handleLogin(event:FormEvent) {
        event.preventDefault();
        // navigate('/adminDashboard');
        try {
            if (username === 'admin' && password === 'admin') {
                // Successful login
                navigate('/adminDashboard');
            } else {
                // Incorrect username or password
                alert('Incorrect Username or Password');

            }
        }

        catch (err) {
            alert(err);
        }

    }

    const handleForgotPassword = () => {
        // Add functionality for forgot password here
        console.log('Forgot Password');
    };

    return (
        <div className="login-page" style={{ backgroundColor: '#fff',  padding: '20px' ,  textAlign: 'center' }}>
            <h2 style={{ padding: 25, color: '#ad0f0f' }}>Admin Login</h2>
            <div className="input-container" style={{ padding: 42, color: '#ad0f0f' }}>
                <label htmlFor="username" style={{ padding: '20px'}}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    style={{ borderColor: '#ad0f0f', borderRadius: '6px' }}
                />
            </div>
            <div className="input-container"  style={{ padding: 48, marginTop: '-52px', color: '#ad0f0f' }}>
                <label htmlFor="password" style={{ padding: '20px'}}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    style={{ borderColor: '#ad0f0f', borderRadius: '6px' }}
                />
            </div>
            {/*<Link to="/adminDashboard">*/}
            <button className="button" onClick={handleLogin} style={{  borderRadius: '8px' }}>
                Login
            </button>
            {/*</Link>*/}
            <div className="forgot-password">
                <a href="#" onClick={handleForgotPassword}>
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}

export default AdminLogin;
