import React, { useState } from 'react';
import '../assets/css/UserDashboard.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const UserDashboard = () => {
    const [bloodAvailability, setBloodAvailability] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleBookAppointment = () => {
        // Implement appointment booking logic
        console.log('Book Appointment button clicked');
    };

    const handleUpcomingAppointments = async () => {
        // Implement logic to fetch and display upcoming appointments
        console.log('Upcoming Appointments button clicked');
        try {
            setLoading(true);
            navigate('/userUpcomingApt');
            // const response = await axios.get(`http://localhost:8080/api/upcomingAppointments`);
            //
            // // Assume you have a route '/nextPage' where you want to display the upcoming appointments
            // navigate('/userUpcomingApt', { state: { upcomingAppointments: response.data } });
        } catch (error) {
            console.error('Error fetching upcoming appointments:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckAvailability = () => {
        // Implement blood availability check logic
        // For example, you might make an API call to fetch the availability
        // and update the state to display the information
        setBloodAvailability('Available');
    };

    const handleDonationHistory = () => {
        // Implement donation history logic
        console.log('Donation History button clicked');
    };

    const backgroundImageStyle = {
        backgroundImage: 'url("/images/userDashboard/bloodDonation.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <div id="userDash">
            <h2 id="title" style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>User Dashboard</h2>
            <Link to="/AppointmentPage">

            <button id="userdasfbtm" className="button" onClick={handleBookAppointment}>
                Book Appointment
            </button>
            </Link>


            <button id="userdasfbtm" className="button" onClick={handleUpcomingAppointments}>
                Upcoming Appointments
            </button>

            <Link to="/bloodAvailability">
            <button id="userdasfbtm" className="button" onClick={handleCheckAvailability}>
                Blood Availability
            </button></Link>

            <Link to="/userDonationHistory">
            <button id="userdasfbtm" className="button" onClick={handleDonationHistory}>
                Donation History
            </button></Link>

            <div style={backgroundImageStyle}></div>
        </div>
    );
};

export default UserDashboard;
