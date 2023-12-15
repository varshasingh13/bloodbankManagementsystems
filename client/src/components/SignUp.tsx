// SignUpForm.jsx
import '../assets/css/SignupForm.css'
import React, {ChangeEvent, FormEvent, useState} from 'react';
import Select,{ ActionMeta, SingleValue } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";

const bloodGroupList = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        gender: '',
        email: '',
        country: '',
        phone: '',
        bloodGroup: 'A+',
        medicalHistory: '',
        password: '',
        zipcode: ''
    });

    interface FormData {
        firstName: string;
        lastName: string;
        age: string;
        address: string;
        gender: string;
        email: string;
        country: string;
        phone: string;
        bloodGroup: string;
        medicalHistory: string;
        password: string;
        zipcode: string;
    }

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const [countryCode, setCountryCode] = useState('+1');

    const handleCountryCodeChange = (
        selectedOption: SingleValue<{ label: string; value: string }>,
        actionMeta: ActionMeta<{ label: string; value: string }>
    ) => {
        if (selectedOption) {
            setCountryCode(selectedOption.value);
        }
    };

    const navigate = useNavigate();

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, phone: `${countryCode}${value}` }));
    };

    const countryCodes = [
        { label: '+1', value: '+1' },
        // Add more country codes as needed
    ];



    interface CountryOption {
        value: string;
        label: string;
    }

// Assuming your countries array has this structure:
    const countries: CountryOption[] = [
        { value: 'US', label: 'United States' },
        // Add more country options as needed
    ];

    function handleInputChange(event:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {

        const { name, value } = event.target;


        switch (name) {
            case 'firstName':
                setFirstName(event.target.value);
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if(value.length < 4 || value.length > 45) {
                    setFirstNameError("First Name must be at least 4 characters long!");
                }
                else {
                    setFirstNameError("");
                }
                break;
            case 'lastName':
                setLastName(event.target.value);
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if(value.length < 4 || value.length > 45) {
                    setLastNameError("Last Name must be at least 4 characters long!");
                }
                else {
                    setLastNameError("");
                }
                break;
            case 'address':
//addressError
                setAddress(event.target.value);
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if(value.length < 4 || value.length > 45) {
                    setAddressError("Address must be at least 4 characters long!");
                }
                else {
                    setAddressError("");
                }


                break;
            case 'phone':
//phoneError
                setPhone(event.target.value);
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (!/^\d+$/.test(value) || value.length !== 10) {
                    setPhoneError("Phone number must be a 10-digit numeric value.");
                } else {
                    setPhoneError("");
                }



                break;
            case 'email':
//emailError
                setEmail(event.target.value);
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setEmailError("Invalid email address");
                } else {
                    setEmailError("");
                }

                break;

            case 'age':
                setAge(event.target.value);
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (!/^\d+$/.test(value)) {
                    setAgeError("Age must be a valid number");
                } else if (parseInt(value, 10) <= 5) {
                    setAgeError("Age must be greater than 5");
                } else {
                    setAgeError("");
                }
                break;

            case 'gender':
                setGender(event.target.value);
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (!['male', 'female', 'other'].includes(value.toLowerCase())) {
                    setGenderError("Invalid gender selection");
                } else {
                    setGenderError("");
                }
                break;
            case 'medicalHistory':
                setMedicalHistory(event.target.value);
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if(value.length < 4 || value.length > 45) {
                    setMedicalHistoryError("Medical History must be at least 3 characters long!");
                }
                else {
                    setMedicalHistoryError("");
                }
                break;
            case 'bloodGroup':
                setBloodGroup(event.target.value);
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (!bloodGroupList.includes(value)) {
                    setBloodGroupError("Invalid blood Group selection");
                } else {
                    setBloodGroupError("");
                }
                break;
            case 'zipcode':
                setZipcode(event.target.value);
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                  const isValidPincode = /^\d{5}$/.test(value);

                if (!isValidPincode) {
                    setZipcodeError("Zip code must be a 5-digit number");
                } else {
                    setZipcodeError("");
                }
                break;
            case 'country':
                setCountry(event.target.value);
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                const isValidCountry = validCountries.includes(value);

                if (!isValidCountry) {
                    setCountryError("Invalid country");
                } else {
                    setCountryError("");
                }
                break;
            case 'password':
                setPassword(event.target.value);
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z]).{6,}$/;

                if (!passwordRegex.test(value)) {
                    setPasswordError("Password must contain at least one numeric digit, one capital letter, and be at least 6 characters long");
                } else {
                    setPasswordError("");
                }
                break;

            default:
                break;
        }
    }
    const isDateBeforeCurrentDate = (selectedDate: Date): boolean => {
        const lastDonatedDate = new Date(selectedDate);
        const currentDate = new Date();

        return lastDonatedDate < currentDate;
    };

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [addressError, setAddressError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [medicalHistoryError, setMedicalHistoryError] = useState("");
    const [bloodGroupError, setBloodGroupError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [zipcodeError, setZipcodeError] = useState("");
    const [countryError, setCountryError] = useState("");


    const [emailError, setEmailError] = useState("");

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");

    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Check the validity of the email and update the state
        const isValid = validateEmail(newEmail);
        setIsEmailValid(isValid);
    };

    const validateEmail = (email: string): boolean => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test if the provided email matches the regex pattern
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    async function handleSubmit(event:FormEvent) {
        event.preventDefault();
        console.log("Submit order");
        // Add logic for form submission (e.g., API call or further processing)
        console.log('Form Data:', formData);
        const isFormCorrect =  isValidForm(formData, firstNameError, lastNameError, addressError, phoneError, emailError,  genderError, ageError, medicalHistoryError, bloodGroupError, passwordError, zipcodeError, countryError);
        console.log(isFormCorrect);
        if (!isFormCorrect) {
            alert("Please fill all the fields correctly and try again.");
        } else {

            await axios.post("http://localhost:8080/api/user/save", {
                firstName: firstName,
                lastName: lastName,
                address: address,
                phone: phone,
                email: email,
                age:age,
                sex: gender,
                country: country,
                bloodGroup: bloodGroup,
                medicalHistory: medicalHistory,
                password: password,
                pincode: zipcode,
            });
            alert("User registation is done successfully");
            navigate('/userLogin');

        }

    };


    const validCountries = [
        'USA', 'Canada', 'UK', 'Australia', 'India',
        'Germany', 'France', 'Japan', 'Brazil', 'South Africa',
        'China', 'Russia', 'Mexico', 'Italy', 'Spain',
        'Argentina', 'Netherlands', 'Sweden', 'Norway', 'New Zealand'
    ];

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    function isValidForm(
        formData: FormData,
        firstNameError: string,
        lastNameError: string,
        addressError: string,
        phoneError: string,
        emailError: string,
        genderError: string,
        ageError: string,
        medicalHistoryError: string,
        bloodGroupError: string,
        passwordError: string,

        zipcodeError: string,
        countryError: string,
    ): boolean {
        if (
            !formData.firstName ||
            formData.firstName.trim() === "" ||
            !formData.lastName ||
            formData.lastName.trim() === "" ||
            !formData.address ||
            formData.address.trim() === "" ||
            !formData.phone ||
            formData.phone.trim() === "" ||
            !formData.email ||
            formData.email.trim() === "" ||
            !formData.gender ||
            formData.gender.trim() === "" ||
            !formData.age ||
            formData.age.trim() === "" ||
            !formData.medicalHistory ||
            formData.medicalHistory.trim() === "" ||
            !formData.bloodGroup ||
            formData.bloodGroup.trim() === "" ||
            !formData.password ||
            formData.password.trim() === "" ||
            !formData.zipcode ||
            formData.zipcode.trim() === "" ||
            !formData.country ||
            formData.country.trim() === "" ||
            firstNameError !== "" ||
            lastNameError !== "" ||
            addressError !== "" ||
            phoneError !== "" ||
            emailError !== "" ||
            genderError !== "" ||
            ageError !== "" ||
            medicalHistoryError !== "" ||
            bloodGroupError !== "" ||
            passwordError !== "" ||
            zipcodeError !== "" ||
            countryError !== ""
        ) {

            return false;
        }

        return true;
    }



    return (
        <div id = 'signUp' className="signup-form-container" style={{ textAlign: 'center', padding:'3em' }}>

            <form  onSubmit={(event)=>handleSubmit(event)} method="post">
                <h2 style={{ padding:'18px',color: 'rgb(173, 15, 15)'}}>Sign Up</h2>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="firstName">First Name</label>
                <input  style={{borderRadius: '8px',marginLeft: '36px', width: '20%'}}
                        type="text"
                        size={20}
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                />
            </div>
            <> {firstNameError && <div className="error"> {firstNameError}</div>}</>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="lastName">Last Name</label>
                <input  style={{borderRadius: '8px',marginLeft: '36px', width: '20%'}}
                       type="text"
                       name="lastName"
                       id="lastName"
                       value={formData.lastName}
                       onChange={handleInputChange}
                />
            </div>
            <> {lastNameError && <div className="error"> {lastNameError}</div>}</>


            <div style={{ padding: '0.5em' }}>
                <label htmlFor="phone">Phone</label>
                <input  style={{borderRadius: '8px',marginLeft: '35px', width: '20%'}}
                       type="text"
                       name="phone"
                       id="phone"
                       value={formData.phone}
                       onChange={handleInputChange}
                />
            </div>
            <> {phoneError && <div className="error"> {phoneError}</div>}</>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="address">Address</label>
                <textarea  style={{borderRadius: '8px',marginLeft: '30px', width: '20%'}}
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={handleInputChange}
                />
            </div>
            <> {addressError && <div className="error"> {addressError}</div>}</>

                <div>
                    <label htmlFor="zipcode">Zip Code:</label>
                    <input style={{borderRadius: '8px',marginLeft: '30px', width: '20%', marginBottom: '15px'}}
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                    />
                </div>
                <> {zipcodeError && <div className="error"> {zipcodeError}</div>}</>

                <div>
                    <label htmlFor="country">Country:</label>
                    <select style={{borderRadius: '8px',marginLeft: '30px', width: '20%' , marginBottom: '15px'}}
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    >
                        {/*<option value="">Select Country</option>*/}
                        <option value="" disabled hidden></option>
                        {validCountries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <> {countryError && <div className="error"> {countryError}</div>}</>


                <div style={{ padding: '0.5em' }}>
                <label htmlFor="age">Age</label>
                <input  style={{borderRadius: '8px',marginLeft: '31px', width: '20%'}}
                       type="text"
                       name="age"
                       id="age"
                       value={formData.age}
                       onChange={handleInputChange}
                />
            </div>
            <> {ageError && <div className="error"> {ageError}</div>}</>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="gender">Gender</label>
                <select
                    style={{borderRadius: '8px',marginLeft: '28px', width: '20%'}}
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                >
                    <option value="" disabled hidden></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <> {genderError && <div className="error"> {genderError}</div>}</>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="email">Email</label>
                <input  style={{borderRadius: '8px',marginLeft: '30px', width: '20%'}}
                       type="text"
                       name="email"
                       id="email"
                       value={formData.email}
                       onChange={handleInputChange}
                />
            </div>
            <> {emailError && <div className="error"> {emailError}</div>}</>



                <div>
                    <label htmlFor="password">Password:</label>
                    <input  style={{borderRadius: '8px',marginLeft: '65px', width: '20%', marginBottom: '14px'}}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <input  style={{marginLeft: '10px'}}
                        type="checkbox"
                        id="showPassword"
                        name="showPassword"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        className="eye-icon"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <> {passwordError && <div className="error"> {passwordError}</div>}</>

                <div style={{ padding: '0.5em' }}>
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <select
                        style={{borderRadius: '8px',marginLeft: '31px', width: '20%'}}
                        name="bloodGroup"
                        id="bloodGroup"
                        className="signUpField"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                    >
                       <option value="" disabled hidden></option>
                        {bloodGroupList.map((bloodGroup) => (

                            <option key={bloodGroup} value={bloodGroup}>
                                {bloodGroup}
                            </option>
                        ))}
                    </select>
                </div>
                <> {bloodGroupError && <div className="error"> {bloodGroupError}</div>}</>


                <div>
                    <label htmlFor="selectedDate">Last Donated Date:</label>
                    <DatePicker
                        id="selectedDate"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date"
                    />
                </div>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="medicalHistory">Medical History</label>
                <textarea  style={{borderRadius: '8px',marginLeft: '14px', width: '20%'}}
                          name="medicalHistory"
                          id="medicalHistory"
                          value={formData.medicalHistory}
                          onChange={handleInputChange}
                />
            </div>
            <> {medicalHistoryError && <div className="error"> {medicalHistoryError}</div>}</>


            <button className="button" type="submit" style={{ width: 'fit-content', marginTop: '4px', marginLeft: '48%',borderRadius: '8px'}} onClick={(event) => handleSubmit(event)}>Sign Up</button>
        </form>
        </div>
    );
};

export default SignUpForm;
