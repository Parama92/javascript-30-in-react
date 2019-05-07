import React from "react";

import "./Drumkit.css";
import DrumKey from "./DrumKey";
import keys from "./keys";
import boom from "../sounds/boom.wav";

class Drumkit extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", function(e) {
      const pressed = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (!pressed) return;
      pressed.play();
    });
  }

  render() {
    const keysComponent = keys.map(key => <DrumKey key={key.id} item={key} />);
    return <div className="keys">{keysComponent}</div>;
  }
}

export default Drumkit;
