/**
 * Keyboard component props.
 * {@docCategory Keyboard}
 */
export interface IKeyboardProps {
  /**
   * Root element class name.
   */
  className: string;

  /**
   * The first playable midi note value
   * to be displayed on the piano.
   */
  first: number;

  /**
   * The last playable midi note value
   * to be displayed on this piano.
   */
  last: number;

  /**
   * Callback method to be called when a key is pressed.
   * The corresponding midiNote value will be passed to it.
   */
  onPlayNote: (midiNote: number) => void;

  /**
   * {@code false} if the piano should not handle keyboard events.
   * {@default} true
   */
  handleKeyboardEvents: boolean;

  /**
   * The width of this piano.
   */
  width: number;
}
