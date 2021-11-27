import React from "react";
import { images } from "../../constants";
import useStyles from "./style";



const Header = () => {
  const classes = useStyles();

  return (
    <div  className={classes.header} >
        <img className={classes.img} src={images.grooveo_logo} alt="header_logo" />
    </div>
  );
};

export default Header;
