import React from "react";
import useStyles from "./style";
import { BsPlay } from "react-icons/bs";
import { GrPause } from "react-icons/gr";

const Controller = ({ handeleClickIsPause, isaPause }) => {
  const classes = useStyles();
  return (
    <div className={classes.controller}>
      <button
        className={isaPause ? classes.unClicked : classes.clicked}
        onClick={() => handeleClickIsPause(false)}
      >
        <BsPlay size="50%" />
      </button>
      <button
        className={isaPause ? classes.clicked : classes.unClicked}
        onClick={() => handeleClickIsPause(true)}
      >
        <GrPause size="50%" />
      </button>
    
    </div>
  );
};

export default Controller;
