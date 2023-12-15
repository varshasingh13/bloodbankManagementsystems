import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/PatientRecords.css'; // Adjust the CSS file name as needed

interface PatientRecord {
    name: string;
    role: string;
    email:string;
    age: string;
    phone: string;
    bloodType: string;
    dateNeeded:string;
}

const PatientRecords: React.FC = () => {
    const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([]);

    // const dummyData: PatientRecord[] = [
    //     {
    //         patientId: '1',
    //         name: 'Dorothy',
    //         age: 32,
    //         sex: 'Female',
    //         address: '123 Main St, Ashburn, US, 22031',
    //         phone: '240-555-1234',
    //         quantity: 1,
    //         bloodType: 'B+',
    //     },
    //     {
    //         patientId: '2',
    //         name: 'Jasmine',
    //         age: 29,
    //         sex: 'Female',
    //         address: '456 Oak Ave, Townsville, US, 21031',
    //         phone: '320-565-3012',
    //         quantity: 2,
    //         bloodType: 'A-',
    //     },
    //     {
    //         patientId: '3',
    //         name: 'Varsha',
    //         age: 30,
    //         sex: 'Female',
    //         address: '123 Eves apartment, VA 22043',
    //         phone: '240-665-2039',
    //         quantity: 1,
    //         bloodType: 'B+',
    //     },
    // ];
  //  const [patientRecords, setPatientRecords] = useState<PatientRecord[]>(dummyData);

    useEffect(() => {
        // Fetch patient records from the backend API
        const fetchPatientRecords = async () => {
            try {
                const response = await axios.get<PatientRecord[]>('http://localhost:8080/api/getReceipientData'); // Adjust the API endpoint
                setPatientRecords(response.data);
            } catch (error) {
                console.error('Error fetching patient records:', error);
            }
        };

        fetchPatientRecords();
    }, []);

    return (
        <div className="patient-records">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Recipient Record</h2>
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
                {patientRecords.map(record => (
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

export default PatientRecords;
