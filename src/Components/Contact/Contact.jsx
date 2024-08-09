import "./Contact.css";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg";
import call from "../../assets/call.svg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eb9f8ee3-1b32-4cb8-87be-bc4bcab453e7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch </h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            contact me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} className="img" alt="" />
              <p>yonatanastaf88@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} className="img" alt="" />
              <p>+251933923566</p>
            </div>
            <div className="contact-detail">
              <img src={location} className="img" alt="" />
              <p>Addis Ababa, Eth</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} className="img" alt="" />
              <a
                href="http://www.linkedin.com/in/yonatan-aschalew"
                target="_blank"
              >
                <p>Linkedin</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={github} className="img" alt="" />
              <a
                href="https://github.com/Kukusha-yon"
                target="_blank"
              >
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name... " name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email..." name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message..."
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
