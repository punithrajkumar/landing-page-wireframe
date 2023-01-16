import classes from "./ContentProcess.module.css";
import Vector from "../../../assets/Vector-4.png";

const ContentProcess = (props) => {
  return (
    <div className={`${classes.ContentProcessContainer} ${props.className}`}>
      <div className={`${classes.VectorLogo}`}>
        <img src={Vector} />
      </div>
      <div className={`${classes.ContentProcessHead}`}>
        <h3>{props.headProcess}</h3>
        <div className={`${classes.bottomLine}`}>
          <p>5 Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default ContentProcess;
