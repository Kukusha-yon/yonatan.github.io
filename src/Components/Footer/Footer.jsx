import "./Footer.css";
import myLogo from "../../assets/myLogo.svg";
import user from "../../assets/user.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={myLogo} alt="" />
          <p>I am Full Stack Developer with Naamal Project.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="" />
            <input type="email" placeholder="Enter your email.." />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Yonatan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
