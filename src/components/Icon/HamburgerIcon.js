import classes from "./HamburgerIcon.module.css";

const HamburgerIcon = (props) => {
  return (
    <div
      className={`${classes.hamburgerIcon} ${props.className}`}
      onClick={props.onClick}
    >
      <div className={`${classes.bar1}`}></div>
      <div className={`${classes.bar2}`}></div>
      <div className={`${classes.bar3}`}></div>
    </div>
  );
};

export default HamburgerIcon;
