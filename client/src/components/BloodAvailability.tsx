import React, {FormEvent, useState} from 'react';
import axios from "axios";

const BloodAvailability = () => {
    // State to manage form inputs
    const [bloodType, setBloodType] = useState('');
    const [quantity, setQuantity] = useState('');

    // Function to handle form submission
    const handleSubmit =async (event:FormEvent) => {
        event.preventDefault();
        // Do something with the submitted data (e.g., send it to the server)
        if(quantity===""|| bloodType===""){
            alert("Please fill all the fields and try again.");
        }
        else{

            try {
                const response = await axios.get('http://localhost:8080/api/bloodAvailability', {
                    params: {
                        bloodType,
                        quantity: quantity, // Convert to integer if needed
                    },
                });

                // Check the response
                console.log('Blood Availability Response:', response.data);

                // You can add more logic here based on the response
                if (response.data=="Yes") {
                    alert('This blood type is available.');
                } else {
                    alert('This blood type is not available.');
                }
            } catch (error) {
                console.error('Error checking blood availability:', error);
                alert('Error checking blood availability. Please try again.');
            }

            // alert("This blood type is available. ");
        }
        console.log('Blood Type:', bloodType);
        console.log('Quantity Required:', quantity);
    };

    return (
        <div style ={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px',}}>
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Blood Request Form</h2>
            <form  style={{  width: '300px'}} onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px'}}>
                    <label htmlFor="bloodType">Blood Type:</label>
                    <select
                        id="bloodType"
                        name="bloodType"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                        required
                        style={{  width: '62%',
                            padding: '8px',
                            borderRadius: '8px',
                            boxSizing: 'border-box'}}
                    >
                        <option value="">Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="quantity">Quantity Required:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        style={{  borderRadius: '8px'}}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <button className="button" type="submit" style={{ padding: '10px',

                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',}}>Submit</button>
                </div>
            </form>
        </div>
    );
};
// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '20px',
//     },
//
//     button: {
//         padding: '10px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };

export default BloodAvailability;
