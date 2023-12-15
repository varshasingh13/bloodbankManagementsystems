import React from 'react';
import '../assets/css/AdminDashboard.css';
import PastAppointments from "./PastAppointments";
import {Link} from "react-router-dom";

const AdminDashboard = () => {
    const handleNewAppointments = () => {
        console.log('Handling New Appointments');
        // Add your specific actions here
    };

    const handlePastAppointments = () => {
        console.log('Handling Past Appointments');
        // Add your specific actions here
    };

    const handlePatientRecords = () => {
        console.log('Handling Patient Records');
        // Add your specific actions here
    };

    const handleBloodBankData = () => {
        console.log('Handling Blood Bank Data');
        // Add your specific actions here
    };

    const handleManageDonors = () => {
        console.log('Handling Manage Donors');
        // Add your specific actions here
    };

    return (
        <div className="admin-container">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Admin Dashboard</h2>
            <div className="button-row">
                <Link to= "/newAppointment">
                <button id="newAppoint" className="button" onClick={handleNewAppointments}>New Appointments</button>
                </Link>
                    <Link to="/pastAppointment">
                        <button id="pastAppoint" className="button" style={{ marginRight: '30px' }} onClick={handlePastAppointments}>
                            Past Appointments
                        </button>

                    </Link>
                <Link to= "/patientRecords">
                <button id="handlePatientRecords" className="button" onClick={handlePatientRecords}>Recipient Record</button>
                </Link>
                </div>

            <div className="button-row">
                <Link to= "/bloodBankData">
                <button id="handleBloodBankData" className="button" onClick={handleBloodBankData}>Blood Bank Data</button>
                </Link>
                <Link to="/manageDonors">
                    <button id="handleManageDonors" className="button" onClick={handleManageDonors}>Donor Record</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
