// AboutUs.js
import React from 'react';
import '../assets/css/AboutUs.css';

const AboutUs = () => {
    // const bloodBankImage = 'public/aboutUs.jpg';
    const bloodBankImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu8c--WMamOrcqqdvq3CmOba21R_Z-sa8aQ&usqp=CAU'; // Update the image path

    return (
        <div className="about-us-container">
            <div className="image-container">
                <img src={bloodBankImage} alt="Blood Bank" className="blood-bank-image" />
            </div>
            <h1 id = "heading">About Us</h1>
            <p>
                Welcome to our Blood Bank Management System, where our commitment is to play a vital role in preserving and enhancing the health of our community. Founded with a vision to make a meaningful difference, our blood bank strives to bridge the gap between donors and those in need, creating a network of support that revolves around the essence of life—blood donation.
            </p>
            <p>
                Our mission is deeply rooted in the belief that every drop of blood donated has the potential to save a life. We take pride in our role as facilitators of this life-saving process, ensuring that blood is readily available to meet the medical needs of individuals across our community. Through our relentless efforts, we aim to cultivate a culture of compassion, generosity, and community well-being.
            </p>
            {/* ... (rest of the content) */}
        </div>
    );
};

export default AboutUs;
