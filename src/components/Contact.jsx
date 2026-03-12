import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="subheading">Begin Your Journey</span>
                    <h2>A State of Being</h2>
                    <p>
                        Every journey is private, slow, and personal. Disconnect from the noise and reconnect with the quiet rhythm of the mountains. Aatman is not just a destination; it's a return to yourself.
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> namaste@aatmanliving.com</p>
                        <p><strong>Location:</strong> Near Ranikhet, Uttarakhand, India</p>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="input-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="input-group">
                            <input type="tel" placeholder="Mobile Number" required />
                        </div>
                        <div className="input-group">
                            <textarea placeholder="Tell us about the experience you seek..." rows="5" required></textarea>
                        </div>
                        <button type="button" className="submit-btn" onClick={(e) => { e.preventDefault(); alert("Inquiry sent successfully. We will reach out to you shortly."); }}>Send Inquiry</button>
                    </form>
                </div>
            </div>
            <div className="instagram-container">
                <a href="https://instagram.com/aatmanliving" target="_blank" rel="noopener noreferrer" className="insta-btn">
                    Follow us on Instagram
                </a>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Aatman Living. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
