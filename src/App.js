import React, {useState } from "react";
import useStyles from "./style";
import DJWidget from "./Components/dJWidjget/DJWidget";
import Header from "./Components/Header/Header";
import Keyboard from "./Components/Keyboard/Keyboard";
import { soundsGroup } from "./constants";

const App = () => {
  const [sounds] = useState(soundsGroup);

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.mainWidget}>
        <Keyboard
          sounds={sounds}
         
        />
        <DJWidget />
      </div>
    </div>
  );
};

export default App;
