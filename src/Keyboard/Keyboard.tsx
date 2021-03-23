import React from "react";
import { Key } from "./Key";
import { IKeyboardProps } from "./Keyboard.types";
import "./styles.css";

export const KeyBoard = (props: IKeyboardProps) => {
  const {
    onPlayNote,
    handleKeyboardEvents = true,
    first,
    last,
    className
  } = props;

  const [keys, setKeys] = React.useState([]);
  const [octave, setOctave] = React.useState(
    Math.floor((first + last) / 2 / 12)
  );

  /**
   * Keyboard event handler for the piano.
   *
   * @param ev
   */
  const onKeyboardEvent = React.useCallback(
    (ev) => {
      switch (ev.key) {
        case "a":
          onPlayNote(octave * 12);
          break;
        case "w":
          onPlayNote(1 + octave * 12);
          break;
        case "s":
          onPlayNote(2 + octave * 12);
          break;
        case "e":
          onPlayNote(3 + octave * 12);
          break;
        case "d":
          onPlayNote(4 + octave * 12);
          break;
        case "f":
          onPlayNote(5 + octave * 12);
          break;
        case "t":
          onPlayNote(6 + octave * 12);
          break;
        case "g":
          onPlayNote(7 + octave * 12);
          break;
        case "y":
          onPlayNote(8 + octave * 12);
          break;
        case "h":
          onPlayNote(9 + octave * 12);
          break;
        case "u":
          onPlayNote(10 + octave * 12);
          break;
        case "j":
          onPlayNote(11 + octave * 12);
          break;
        case "i":
          onPlayNote(12 + octave * 12);
          break;
        case "k":
          onPlayNote(13 + octave * 12);
          break;
        case "o":
          onPlayNote(14 + octave * 12);
          break;
        case "l":
          onPlayNote(15 + octave * 12);
          break;
        case "p":
          onPlayNote(16 + octave * 12);
          break;
        case ";":
          onPlayNote(17 + octave * 12);
          break;
        case "z":
          if (octave > 0) {
            setOctave(octave - 1);
          }
          break;
        case "x":
          setOctave(octave + 1);
          break;
      }
    },
    [onPlayNote, octave]
  );

  React.useEffect(() => {
    const renderedKeys = [];

    for (let i = first; i < last; i++) {
      renderedKeys.push(<Key onPlayNote={onPlayNote} midiNumber={i} />);
    }

    setKeys(renderedKeys);

    if (handleKeyboardEvents) {
      document.addEventListener("keydown", onKeyboardEvent);

      return () => {
        document.addEventListener("keydown", onKeyboardEvent);
      };
    }
  }, [last, first, handleKeyboardEvents, onPlayNote, onKeyboardEvent]);

  return (
    <div className={className}>
      <ul className="set">{keys}</ul>
    </div>
  );
};
