import React from "react";
import { KeyBoard } from "./Keyboard/Keyboard";

export default function App() {
  const onPlayNote = (midiNote) => {
    console.log(midiNote);
  };

  return (
    <KeyBoard
      className="keyboard"
      onPlayNote={onPlayNote}
      first={15}
      last={27}
      width={75}
    />
  );
}
