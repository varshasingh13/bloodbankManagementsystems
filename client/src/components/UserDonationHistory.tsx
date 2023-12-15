import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/PatientRecords.css'; // Adjust the CSS file name as needed

interface userDonationData {
    name: string;
    role: string;
    email:string;
    age: string;
    phone: string;
    bloodType: string;
    dateNeeded:string;
}

const UserDonationHistory: React.FC = () => {
     const [userDonation, setuserDonation] = useState<userDonationData[]>([]);


    useEffect(() => {

        const fetchuserDonation = async () => {
            try {
                const response = await axios.get<userDonationData[]>('http://localhost:8080/api/pastDonorAppointments'); // Adjust the API endpoint
                setuserDonation(response.data);
            } catch (error) {
                console.error('Error fetching patient records:', error);
            }
        };

        fetchuserDonation();
    }, []);

    return (
        <div className="patient-records">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Donation History</h2>
            <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Blood Type</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {userDonation.map(record => (
                    <tr key={record.name}>
                        <td>{record.name}</td>
                        <td>{record.role}</td>
                        <td>{record.email}</td>
                        <td>{record.age}</td>
                        <td>{record.phone}</td>
                        <td>{record.bloodType}</td>
                        <td>{record.dateNeeded}</td>
                    </tr>
                ))}
                </tbody>
            </table></div>
        </div>
    );
};

export default UserDonationHistory;
