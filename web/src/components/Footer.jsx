import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";

export function Footer() {
    return (
        <div className="footer">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" className="footer-icon" />
            </a>
            <a href="mailto:you@example.com">
                <img src="/../img/email.png" alt="Email" className="footer-icon" />
            </a>
        </div>
    );
}