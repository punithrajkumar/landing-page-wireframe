import { Fragment } from "react";
import "./PriceFormationList";
import BlueTick from "../../../assets/Group 35.png";
import classes from "./PriceFormationList.module.css";

const PriceFormationList = (props) => {
  return (
    <Fragment>
      <div className={`${classes.list}`}>
        <img
          className={`${props.className}`}
          // src={BlueTick}
          alt="tick icon"
        />
        <p>{props.lists}</p>
      </div>
    </Fragment>
  );
};

export default PriceFormationList;
