import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/ManageDonors.css';

interface Donor {
    name: string;
    role: string;
    email:string;
    age: string;
    phone: string;
    bloodType: string;
    dateNeeded:string;
}

const ManageDonors: React.FC = () => {
     const [donors, setDonors] = useState<Donor[]>([]);

    useEffect(() => {
        // Fetch donor data from the backend API
        const fetchDonors = async () => {
            try {
                const response = await axios.get<Donor[]>('http://localhost:8080/api/getDonorData'); // Adjust the API endpoint
                setDonors(response.data);
            } catch (error) {
                console.error('Error fetching donor data:', error);
            }
        };

        fetchDonors();
    }, []);

    return (
        <div className="manage-donors">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Manage Donors</h2>
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
                {donors.map(donor => (
                    <tr key={donor.name}>
                        <td>{donor.name}</td>
                        <td>{donor.role}</td>
                        <td>{donor.email}</td>
                        <td>{donor.age}</td>
                        <td>{donor.phone}</td>
                        <td>{donor.bloodType}</td>
                        <td>{donor.dateNeeded}</td>
                    </tr>
                ))}
                </tbody>
            </table></div>
        </div>
    );
};

export default ManageDonors;
