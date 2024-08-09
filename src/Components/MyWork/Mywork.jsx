import "./Mywork.css";
import { mywork_data } from "../../assets/mywork_data";
import arrow from '../../assets/arrow.svg';

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Recent Works</h1>
        <img src="" alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a key={index} href={work.url} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={work.w_name || "Work image"} />
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default Mywork;
