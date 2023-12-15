import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'

import AdminLogin from './components/AdminLogin';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import React from "react";
import UserLogin from "./components/UserLogin";
import SignUpForm from "./components/SignUp";
import AdminDashboard from "./components/AdminDashboard";
import PastAppointments from "./components/PastAppointments";
import NewAppointments from "./components/NewAppointments";
import PatientRecords from "./components/PatientRecords";
import BloodBankData from "./components/BloodBankData";
import ManageDonors from "./components/ManageDonors";

    import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import UserDashboard from "./components/UserDashboard";
import AppointmentPage from "./components/AppointmentPage";
import userDonation from "./components/UserDonationHistory";
import UserDonationHistory from "./components/UserDonationHistory";
import BloodAvailability from "./components/BloodAvailability";
import UserUpcomingApt from "./components/UserUpcomingApt";


function App() {

    return (
        <Router basename={"BloodBankManagementSystem"}>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/categories" element={<CategoryBookList />} />*/}
                <Route path="/adminLogin" element={<AdminLogin />} />
                <Route path="/userLogin" element={<UserLogin />} />

                    <Route path="/userDashboard" element={<UserDashboard />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="*" element={<div>Page Not Found</div>} />

                <Route path="/signUp" element={<SignUpForm />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/pastAppointment" element={<PastAppointments />} />
                <Route path="/newAppointment" element = {<NewAppointments />} />
                <Route path="/patientRecords" element = {<PatientRecords />} />
                <Route path="/bloodBankData" element = {<BloodBankData />} />
                <Route path="/manageDonors" element = {<ManageDonors />} />
                <Route path="/AppointmentPage" element = {<AppointmentPage />} />
                <Route path="/userDonationHistory" element = {<UserDonationHistory />} />
                <Route path="/bloodAvailability" element = {<BloodAvailability />} />
                <Route path="/userUpcomingApt" element = {<UserUpcomingApt />} />

                <Route path="*" element={<div>Page Not Found</div>} />

            </Routes>

            <AppFooter />

        </Router>
);

  return (
      <Router basename={"BloodBankManagementSystem"}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/categories" element={<CategoryBookList />} />*/}
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/pastAppointment" element={<PastAppointments />} />
            <Route path="/newAppointment" element = {<NewAppointments />} />
            <Route path="/patientRecords" element = {<PatientRecords />} />
            <Route path="/bloodBankData" element = {<BloodBankData />} />
            <Route path="/manageDonors" element = {<ManageDonors />} />
            <Route path="/appointmentPage" element = {<AppointmentPage />} />

            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );

}

export default App;

