/**
 * Key component props.
 * {@docCategory Key}
 */
export interface IKeyProps {
  /**
   * The midi number value for this key.
   */
  midiNumber: number;

  /**
   * Callback method to be called when a key is pressed.
   * The corresponding midiNote value will be passed to it.
   */
  onPlayNote: (midiNote: number) => void;
}
