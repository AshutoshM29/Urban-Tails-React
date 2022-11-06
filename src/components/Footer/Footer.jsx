import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
  <footer>

    <div className="contact">
        <p><i className="icons fas fa-phone-alt"></i> +91 0123456789</p>
        <p><i className="icons fab fa-whatsapp"></i> +91 9876543210</p>
        <p><i className="icons far fa-envelope"></i> support@urbantails.com</p>
    </div>

    <div className="footer-section">

        <div className="about"><span>About Us</span>
            <p>Our Story</p>
            <p>Blogs</p>
            <p>Careers</p>
        </div>

        <div className="about"><span>Support</span>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Return & Refund Policy</p>
            <p>Shipping Information</p>
            <p>Payment Options</p>
        </div>

        <div className="about"><span>Keep in touch!</span>
            <form className="form">
                <input className="input" type="email" name="email-id" placeholder="Enter your email address"></input>
                <button className="btn btn-error-solid btn-squared">
                    <i className="fas fa-door-open"></i> Log In
                </button>
            </form>
        </div>
    </div>

    <ul className="social-links list-non-bullet">
        <li className="list-item">
            <a href="https://github.com/AshutoshM29"> <i className="icons-social fab fa-github"></i></a></li>
        <li className="list-item">
            <a href="https://twitter.com/Astomi_29?s=08"> <i className="icons-social fab fa-twitter"></i></a></li>
        <li className="list-item">
            <a href="https://www.instagram.com/the.astomi/"> <i className="icons-social fab fa-instagram"></i></a></li>
        <li className="list-item">
            <a href="https://www.linkedin.com/mwlite/in/ashutosh-mishra-b50423206"><i
                    className="icons-social fab fa-linkedin"></i></a></li>

    </ul>
    <div className="with-love">Made with ❤️ by : Ashutosh</div>
</footer>)
};

export { Footer };