import React from "react";
import { KeyBoard } from "./Keyboard/Keyboard";

export default function App() {
  const onPlayNote = (midiNote) => {
    console.log(midiNote);
  };

  return <KeyBoard onPlayNote={onPlayNote} first={24} last={40} />;
}
