import classes from "./BlogHead.module.css";

const BlogHead = (props) => {
  return (
    <div className={`${classes.BlogHeadBorder} ${classes.className}`}>
      <h3 className={`${classes.footerTopic}`}>{props.BlogHeadTitle}</h3>
    </div>
  );
};

export default BlogHead;
