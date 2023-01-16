import { Fragment } from "react";
import classes from "./ContentCompany.module.css";

const ContentCompany = (props) => {
  return (
    <Fragment>
      <div className={`${classes.contentCompany} ${props.className}`}>
        <div className={`${classes.contentImageCenter}`}>
          <img src={props.src} alt={props.alt} />
        </div>
        <h2>{props.h3}</h2>
        <p>{props.text}</p>
        <a href="/">Get started</a>
      </div>
    </Fragment>
  );
};

export default ContentCompany;
