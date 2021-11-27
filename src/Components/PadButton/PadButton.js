import React, { useState, useEffect } from "react";
import useStyles from "./style";

const PadButton = ({
  instrument,
  checkIfSoundAlreadyPlaying,
  instrumentKey,
  isaPause,
}) => {
  const [audio] = useState(new Audio(instrument.audio));
  const [isOn, setIsOn] = useState(instrument.isPlaying);

  const classes = useStyles();

  useEffect(() => {
    
    if (isOn && instrument.isPlaying && !isaPause) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isOn, instrument.isPlaying, isaPause,audio]);

  const handleTogglePlay =  () => {
    checkIfSoundAlreadyPlaying(instrumentKey, !isOn);
    setIsOn(!isOn);
  };

  const IconComponent = instrument.icon;

  return (
    <button
      className={isOn ? classes.ClickedKeyboardButton : classes.KeyboardButton}
      onClick={handleTogglePlay}
    >
      {IconComponent}
    </button>
  );
};

export default PadButton;
