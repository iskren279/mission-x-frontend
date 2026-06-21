import "./ProjectLibrary.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>COMPANY</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Partners</p>
            </div>

            <div className="footer-column">
                <h3>COURSES</h3>
                <p>Register</p>
                <p>Login</p>
                <p>Projects</p>
                <p>Teachers</p>
                <p>Parents</p>
                <p>Resources</p>
            </div>

            <div className="footer-column">
                <h3>SUPPORT</h3>
                <p>FAQs</p>
                <p>Helpdesk</p>
                <p>Contact Us</p>
            </div>

            <div className="footer-column">
                <h3>LEGAL</h3>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div className="footer-column about">
                <h3>LevelUp Works</h3>

                <p>
                    LevelUp Works is an Auckland-based enterprise dedicated
                    to developing game-based learning software to help
                    teachers in response to the New Zealand Digital
                    Technologies & Hangarau Matihiko.
                </p>

                <p>alan@levelupworks.com</p>
                <p>(021) 668 185</p>
            </div>
        </footer>
    );
}

export default Footer;