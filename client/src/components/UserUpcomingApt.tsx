import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/PatientRecords.css'; // Adjust the CSS file name as needed

interface userAptData {
    role: string;
    email:string;
    age: string;
    phone: string;
    bloodType: string;
    dateNeeded:string;
}

const UserUpcomingApt: React.FC = () => {
     const [userDonation, setuserDonation] = useState<userAptData[]>([]);

    const dummyData: userAptData[] = [
        {
            role: '1',
            email:'sagar@fff.com',
            age: '123 Eves apartment VA, 22043',
            phone: '240-665-2031',
            bloodType: 'B+',
            dateNeeded:'\'2023-12-20\'',
        },

    ];
  //  const [userDonation, setuserDonation] = useState<userAptData[]>();

    useEffect(() => {
        // Fetch patient records from the backend API
        const fetchuserDonation = async () => {
            try {

                const response = await axios.get<userAptData[]>('http://localhost:8080/api/adminNewAppointments'); // Adjust the API endpoint
                setuserDonation(response.data);
            } catch (error) {
                console.error('Error fetching patient records:', error);
            }
        };

        fetchuserDonation();
    }, []);


    return (
        <div className="patient-records">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Upcoming Appointments</h2>
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
                {userDonation.map(record => (
                    <tr key={record.role}>
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

export default UserUpcomingApt;
