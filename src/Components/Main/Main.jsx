import "./Main.css";
import portfolio from "../../assets/yonatanPortfolio.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Yonatan Aschalew Tafese CV.pdf";

const Main = () => {
  return (
    <div id="home" className="main">
      <img src={portfolio} alt="" />
      <h1>
        {" "}
        <span>I am Yonatan, </span>MERN stack developer
      </h1>
      <p>
        I specialize in crafting dynamic and responsive web applications. From
        sleek user interfaces to robust server-side scripting, I have the skills
        and experience to turn your ideas into reality.
      </p>
      <div className="main-action">
        <div className="main-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <a href={resume} target="_blank">
          <div className="main-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Main;
