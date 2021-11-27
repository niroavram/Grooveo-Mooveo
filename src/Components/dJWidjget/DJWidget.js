import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants";
import useStyles from "./style";

const slides = [
  images.djGrooveoslide1,
  images.djGrooveoslide2,
  images.djGrooveoslide3,
];
const lenOfImages = slides.length;

const DJWidget = () => {
  const [index, setIndex] = useState(0);

  const classes = useStyles();

  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
        const nextImage = () => {
            if (index + 1 === lenOfImages) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          };
      nextImage();
    }, 2000);

    return () => clearInterval(timerRef.current);
  }, [index]);

  return (
    <div className={classes.djWid}>
      <img className={classes.img} src={slides[index]} alt="DJ"/>
    </div>
  );
};

export default DJWidget;
