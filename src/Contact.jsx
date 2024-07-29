import React, { useRef } from "react";
import "./contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dzzifbp', 'template_8byx9xk', form.current, {
                publicKey: 'CJWu48WSs5tcEZ5kd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className="contact-container">
                <h1 className="heading-text">Get in Touch</h1>
                <div className="contact">
                    <div className="c-left">
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <input placeholder="Name..." type="text" name="user_name" />
                            <input placeholder="Email..." type="email" name="user_email" />
                            <textarea placeholder="Message" name="message" />
                            <input className="btn" type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="c-right">
                        <div className="contact-item">
                            <FiPhoneCall className="icon" />
                            <p>+91 9054821210</p>
                        </div>
                        <div className="contact-item">
                            <MdEmail className="icon" />
                            <p>1210dhruvipatel@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <ImLocation2 className="icon" />
                            <p>Navsari, Gujarat</p>
                        </div>
                        <ul className="home-contact">
                            <li><a className="contact-item" href="https://www.linkedin.com/in/dhruvi-patel-ab2703239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src="../Images/linkedin.png" alt="" /></a></li>
                            <li><a className="contact-item" href="https://github.com/1210dhruvipatel" target="_blank"><img src="../Images/github.png" alt="" /></a></li>
                            <li><a className="contact-item" href="https://discord.com/channels/@me" target="_blank"><img src="../Images/discord.png" alt="" /></a></li>
                            <li><a className="contact-item" href="https://instagram.com/_12_dhruvi_/" target="_blank"><img src="../Images/instagram.png" alt="" /></a></li>
                            <li><a className="contact-item" href="https://www.facebook.com/patel.dhruvi.7140/" target="_blank"><img src="../Images/facebook.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;