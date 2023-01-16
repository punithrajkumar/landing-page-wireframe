import classes from "./TopicModule.module.css";
import profileLogo from "../../../assets/Vector-3.png";

const TopicModule = (props) => {
  return (
    <div className={`${classes.TopicModuleContainer} ${props.className}`}>
      <div className={`${classes.topLayer}`}>
        <div className={`${classes.profileLogo}`}>
          <img src={profileLogo} />
        </div>
        <div id="textQuote" className={`${classes.topicModuleQuote}`}>
          <q>{props.quote}</q>
        </div>
      </div>
      <div className={`${classes.bottomLayer}`}>
        <div className={`${classes.downBorder}`}></div>
        <div className={`${classes.authorName}`}>
          <h3>{props.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopicModule;
