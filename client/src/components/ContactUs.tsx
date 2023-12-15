// ContactUs.js

import React from 'react';

const ContactUs = () => {
    return (
        <div style={{ border: '2px solid #ccc',
            padding: '130px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'}}>
            <div style={styles.contactUsContainer}>
                <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>Contact Us</h2>
                <p>
                    If you have any questions, concerns, or feedback, please feel free to reach out to us. We are here to assist you in any way we can.
                </p>
                <p id="contactinfo">
                    Contact Information:
                </p>
                <ul>
                    <li>Email: info@bloodbank.com</li>
                    <li>Phone: +1 123-456-7890</li>
                    <li>Address: 7054 Haycock Rd, Falls Church, VA 22043</li>
                </ul>
                {/* You can add a form for users to submit inquiries */}
            </div>
        </div>
    );
};

const styles = {

    contactUsContainer: {
        // Add styles for the content container
    },
};

export default ContactUs;
