import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/PastAppointments.css';
interface Appointment {
    role: string;
    email:string;
    age: string;
    phone: string;
    bloodType: string;
    dateNeeded:string;
}

const PastAppointments: React.FC = () => {
     const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        // Fetch past appointments from the backend API
        const fetchPastAppointments = async () => {
            try {
                const response = await axios.get<Appointment[]>('http://localhost:8080/api/adminPastAppointments'); // Adjust the API endpoint
                setPastAppointments(response.data);
            } catch (error) {
                console.error('Error fetching past appointments:', error);
            }
        };

        fetchPastAppointments();
    }, []);

    return (
        <div className="past-appointments">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Past Appointments</h2>
            <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Role</th>
                    <th>Email</th>

                    <th>Age</th>
                    <th>Phone</th>
                    <th>Blood Type</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {pastAppointments.map(appointment => (
                    <tr key={appointment.role}>
                        <td>{appointment.role}</td>
                        <td>{appointment.email}</td>

                        <td>{appointment.age}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.bloodType}</td>
                        <td>{appointment.dateNeeded}</td>
                    </tr>
                ))}
                </tbody>
            </table></div>
        </div>
    );
};

export default PastAppointments;
