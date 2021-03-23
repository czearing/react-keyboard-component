import React from "react";
import { Key } from "./Key";
import "./styles.css";

export const KeyBoard = (props) => {
  const { onPlayNote } = props;
  const [keys, setKeys] = React.useState([]);

  React.useEffect(() => {
    const renderedKeys = [];

    for (let i = props.first; i < props.last; i++) {
      renderedKeys.push(<Key onPlayNote={onPlayNote} midiNumber={i} />);
    }

    setKeys(renderedKeys);
  }, [props.last, props.first]);

  return (
    <div className={props.className}>
      <ul class="set">{keys}</ul>
    </div>
  );
};
