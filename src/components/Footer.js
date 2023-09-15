import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactForm from "./ContactForm";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact-info">
                <h2>Contact Me:</h2>
                <ContactForm />
            </div>
            <div className="socialMedia">
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
        </div>
    )
}

export default Footer;