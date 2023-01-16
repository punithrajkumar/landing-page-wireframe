import { Fragment } from "react";
import classes from "./ContentBadge.module.css";

const ContentBadge = (props) => {
  return (
    <Fragment>
      <div className={`${classes.contentBadgeContainer} ${props.className}`}>
        <div className={`${classes.badgeImageAdjust}`}>
          <img src={props.src} alt="It's a image for badge" />
        </div>
        <h3>{props.head}</h3>
        <p>{props.text}</p>
        <div className={`${classes.badgeLearnMore}`}>
          <a href="#">Learn more</a>
          <img src={props.arrowImg} />
        </div>
      </div>
    </Fragment>
  );
};

export default ContentBadge;
