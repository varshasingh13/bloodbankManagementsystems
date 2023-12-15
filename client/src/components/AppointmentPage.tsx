import React, {FormEvent, useState} from 'react';
import '../assets/css/AppointmentPage.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AppointmentPage() {
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({

        name: '',
        age: '',
        bloodType: '',
        medicalInjuries: '',
        bloodAmount: '',
        phoneNumber: '',
        email: '',
        location: '',
        dateNeeded: ''

    });
    const navigate = useNavigate();
    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        setFormData({
            name: '',
            age: '',
            bloodType: '',
            dateNeeded: '',
            medicalInjuries: '',
            bloodAmount: '',
            phoneNumber: '',
            email: '',
            location: '',
        });
    };

    const bloodGroupList = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-','a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'];
    const [nameError, setNameError] = useState("");
    const [name, setName] = useState("");
    const [dateNeeded, setDateNeeded] = useState("");
    const [email, setEmail] = useState("");

    //bloodTypeError
    const [bloodTypeError, setBloodTypeError] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [ageError, setAgeError] = useState("");
    const [age, setAge] = useState("");
    //medicalInjuriesError
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [medicalInjuries, setMedicalInjuries] = useState("");
    const [bloodAmount, setBloodAmount] = useState("");
    const [location, setLocation] = useState("");

    //location
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        switch (name) {
            case 'name':
                setName(e.target.value);
                if(value.length < 4 || value.length > 45) {
                    setNameError("Name must be at least 4 characters long!");
                }
                else {
                    setNameError("");
                }
                break;
            case 'age':
                setAge(e.target.value);
                if (!/^\d+$/.test(value)) {
                    setAgeError("Age must be a valid number");
                } else if (parseInt(value, 10) <= 16) {
                    setAgeError("Age must be greater than 16");
                } else {
                    setAgeError("");
                }
                break;
            case 'bloodType':
                setBloodType(e.target.value);
                if (!bloodGroupList.includes(value)) {
                    setBloodTypeError("Invalid blood Type selection");
                } else {
                    setBloodTypeError("");
                }
                break;
            case 'phoneNumber':
                setPhoneNumber(e.target.value);
                if (!/^\d+$/.test(value) || value.length !== 10) {
                    setPhoneNumberError("Phone number must be a 10-digit numeric value.");
                } else {
                    setPhoneNumberError("");
                }
                break;
            case 'dateNeeded':
                setDateNeeded(e.target.value);
                break;
            case 'medicalInjuries':
                setMedicalInjuries(e.target.value);
                break;
            case 'bloodAmount':
                setBloodAmount(e.target.value);
                break;
            case 'location':
                setLocation(e.target.value);

                break;
            case 'email':
                setEmail(e.target.value);

                break;
            default:
                break;
        }
    };

    async function handleSubmit(event:FormEvent){
        event.preventDefault();
        // Handle form submission based on selected option
        console.log('Form Data:', formData);
        try {
            if(selectedOption === 'donor') {
                if (name === "" || age === "" || bloodType === "" || phoneNumber === "" || dateNeeded === "" || medicalInjuries === "" ) {
                    alert("All fields are required");
                }
                else {
                    await axios.post("http://localhost:8080/api/bookAppointment", {
                        name: name,
                        age: age,
                        bloodType: bloodType,
                        dateNeeded: dateNeeded,
                        medicalInjuries: medicalInjuries,
                        phone: phoneNumber,
                        email: email,
                        bloodAmount: bloodAmount,
                        role: selectedOption

                    });

                    alert("User Registation Successfully");
                    navigate('/userDashboard');
                }
            }
if(selectedOption === 'recipient') {
    if ( name === "" || bloodType === "" || phoneNumber === "" || dateNeeded === "" || bloodAmount === "" || location === "" ) {
        alert("All fields are required");
    } else {
        await axios.post("http://localhost:8080/api/bookAppointment", {
            name: name,
            age: age,
            bloodType: bloodType,
            dateNeeded: dateNeeded,
            medicalInjuries: medicalInjuries,
            phoneNumber: phoneNumber,
            email: email,
            bloodAmount: bloodAmount,
            location: location,
            role: selectedOption

        });

        alert("User Registation Successfully");
        navigate('/userDashboard');
    }
}
        } catch (err) {
            alert(err);
        }
    };





    return (
        <div className="app-container">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Blood Donation Application</h2>
            <label>Select Role:</label>
            <select id="role" name = "role" className="select-role"
                value={selectedOption}
                onChange={(e) => handleOptionChange(e.target.value)}
            >
                <option value="">Select</option>
                <option value="donor">Donor</option>
                <option value="recipient">Recipient</option>
            </select>

            {selectedOption === 'donor' && (
                <form className="form-container" onSubmit={(event)=>handleSubmit(event)}>
                    <h2>Donor Application</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="aptinput" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <> {nameError && <div className="error"> {nameError}</div>}</>

                    <div className="form-group">
                        <label>Age:</label>
                        <input className="aptinput" type="number" name="age" value={formData.age} onChange={handleInputChange} required />
                    </div>
                    <> {ageError && <div className="error"> {ageError}</div>}</>

                    <div className="form-group">
                        <label>Blood Type:</label>
                        <input className="aptinput"
                            type="text"
                            name="bloodType"
                            value={formData.bloodType}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <> {bloodTypeError && <div className="error"> {bloodTypeError}</div>}</>

                    <div className="form-group">
                        <label>Date Needed:</label>
                        <input className="aptinput"
                            type="date"
                            name="dateNeeded"
                            value={formData.dateNeeded}
                            onChange={handleInputChange}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input className="aptinput"
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <> {phoneNumberError && <div className="error"> {phoneNumberError}</div>}</>

                    <div className="form-group">
                        <label>Email:</label>

                        <input  className="aptinput"
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Previous Medical Injuries:</label>
                        <textarea className="aptinput"
                            name="medicalInjuries"
                            value={formData.medicalInjuries}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            )}

            {selectedOption === 'recipient' && (
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Recipient Application</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="aptinput" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <> {nameError && <div className="error"> {nameError}</div>}</>

                    <div className="form-group">
                        <label>Blood Type:</label>
                        <input className="aptinput"
                            type="text"
                            name="bloodType"
                            value={formData.bloodType}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <> {bloodTypeError && <div className="error"> {bloodTypeError}</div>}</>

                    <div className="form-group">
                        <label>Blood Amount Needed:</label>
                        <input className="aptinput"
                            type="text"
                            name="bloodAmount"
                            value={formData.bloodAmount}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Date Needed:</label>
                        <input className="aptinput"
                            type="date"
                            name="dateNeeded"
                            value={formData.dateNeeded}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input className="aptinput"
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <> {phoneNumberError && <div className="error"> {phoneNumberError}</div>}</>

                    <div className="form-group">
                        <label>Email:</label>

                        <input  className="aptinput"
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Location:</label>
                        <input className="aptinput" type="text" name="location" value={formData.location} onChange={handleInputChange} required />
                    </div>

                    <button type="submit" className="submit-button" onClick={(event) => handleSubmit(event)}>
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}


export default AppointmentPage;
