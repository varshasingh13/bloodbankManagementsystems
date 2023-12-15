import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/NewAppointments.css';

interface Appointment {
    role: string;
    email:string;
    age: string;
    phone: string;
    bloodType: string;
    dateNeeded:string;
}

const NewAppointments: React.FC = () => {
    const [newAppointments, setNewAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        // Fetch new appointments from the backend API
        const fetchNewAppointments = async () => {
            try {
                const response = await axios.get<Appointment[]>('http://localhost:8080/api/adminNewAppointments'); // Adjust the API endpoint
                setNewAppointments(response.data);
            } catch (error) {
                console.error('Error fetching new appointments:', error);
            }
        };

        fetchNewAppointments();
    }, []);

    return (
        <div className="new-appointments">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>New Appointments</h2>
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
                {newAppointments.map(appointment => (
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

export default NewAppointments;
