import React from "react";

function DrumKey(props) {
  const { code, kbd, sound } = props.item;
  return (
    <div data-key={code} className="key">
      <kbd>{kbd}</kbd>
      <span className="sound">{sound}</span>
      <audio data-key={code} src={`../sounds/${sound}.wav`} />
    </div>
  );
}

export default DrumKey;
