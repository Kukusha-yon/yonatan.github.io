import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="" alt="About Me Illustration" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="" alt="Profile Picture" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I bring proficiency in MongoDB, Express.js, React.js, and Node.js to the table. From crafting responsive user interfaces to building scalable backend systems, my expertise ensures seamless execution of web projects. Additionally, I am skilled in frontend technologies like HTML, CSS, and JavaScript and have experience with frameworks like Next.js and AWS cloud services. My proficiency extends to version control with Git and collaboration on platforms like GitHub. Coupled with a dedication to continuous learning and a knack for problem-solving, I am poised to tackle challenges and drive innovation.
            </p>
            <p>
              {/* Ready to elevate your digital endeavors? Let’s connect and explore how my skills can propel your vision forward. */}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next.js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>AWS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB, Express.js, Node.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
