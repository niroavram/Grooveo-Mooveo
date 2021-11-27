import React, { useState, useCallback, useEffect, useRef } from "react";
import useStyles from "./style";
import Controller from "../Controller/Controller";
import PadButton from "../PadButton/PadButton";

const Keyboard = ({ sounds }) => {
  const classes = useStyles();
  const [looperData, setLooperData] = useState(sounds);
  const [looperDataLive, setLooperDataLive] = useState(sounds);

  const [isaPause, setIsPause] = useState(true);

  const checkIfSoundAlreadyPlaying = useCallback(
    async (instrumentKey, isPlaying) => {
      setLooperData({
        ...looperData,
        [instrumentKey]: { ...looperData[instrumentKey], isPlaying },
      });
    }
  );

  const handeleClickIsPause = (a) => {
    setIsPause(a);
  } ;

  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (
      Object.values(looperDataLive).filter((instrument) => instrument.isPlaying)
        .length > 0
    ) {
      timerRef.current = setInterval(() => {
        setLooperDataLive(looperData);
      }, 7000);
    } else {
      setLooperDataLive(looperData);
    }
    return () => clearInterval(timerRef.current);
  }, [looperData,looperDataLive]);



  return (
    <div className={classes.keyboard}>

      {Object.keys(looperDataLive).map((instrumentKey) => (
        <PadButton
          key={instrumentKey}
          instrument={looperDataLive[instrumentKey]}
          instrumentKey={instrumentKey}
          checkIfSoundAlreadyPlaying={checkIfSoundAlreadyPlaying}
          isaPause={isaPause}
        />
      ))}
      <Controller
        isaPause={isaPause}
        handeleClickIsPause={handeleClickIsPause}
      />
    </div>
  );
};

export default Keyboard;
