import React from "react";
import classes from './MyTextarea.module.css'
const MyTextarea = (props) => {
  return <textarea {...props} cols="30" rows="10" className={classes.myTextarea}></textarea>;
};
export default MyTextarea;
