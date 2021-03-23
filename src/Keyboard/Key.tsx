import React from "react";
import { IKeyProps } from "./Key.types";
import "./styles.css";

export const Key = (props: IKeyProps) => {
  const { midiNumber, onPlayNote } = props;

  const handleOnPlayNote = () => onPlayNote(midiNumber);

  /**
   * A map of corresponding key colors from midi values.
   */
  const keyColorMap = {
    0: "white",
    1: "black",
    2: "white",
    3: "white",
    4: "black",
    5: "white",
    6: "black",
    7: "white",
    8: "white",
    9: "black",
    10: "white",
    11: "black"
  };

  /**
   * A map of corresponding notes from midi values.
   */
  const noteMap = {
    0: "a",
    1: "a#",
    2: "b",
    3: "c",
    4: "c#",
    5: "d",
    6: "d#",
    7: "e",
    8: "f",
    9: "f#",
    10: "g",
    11: "g#"
  };

  return (
    <li
      className={keyColorMap[midiNumber % 12] + " " + noteMap[midiNumber % 12]}
      onMouseDown={handleOnPlayNote}
    />
  );
};
