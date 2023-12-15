import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../assets/css/BloodBankData.css'; // Adjust the CSS file name as needed

interface BloodBankData {
    bloodType: string;
    quantity: number;
}

const BloodBankData: React.FC = () => {
     const [bloodBankData, setBloodBankData] = useState<BloodBankData[]>([]);

    useEffect(() => {

        const fetchBloodBankData = async () => {
            try {
                const response = await axios.get<BloodBankData[]>('http://localhost:8080/api/getBloodBankdata'); // Adjust the API endpoint
                setBloodBankData(response.data);
            } catch (error) {
                console.error('Error fetching blood bank data:', error);
            }
        };

        fetchBloodBankData();
    }, []);

    return (
        <div className="blood-bank-data">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Blood Bank Data</h2>
            <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Blood Type</th>
                    <th>Units Required</th>
                </tr>
                </thead>
                <tbody>
                {bloodBankData.map(data => (
                    <tr key={data.bloodType}>
                        <td>{data.bloodType}</td>
                        <td>{data.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table></div>
        </div>
    );
};

export default BloodBankData;
