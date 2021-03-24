/**
 * Key component props.
 * {@docCategory Key}
 */
export interface IKeyProps {
  /**
   * CSS styling object for this key.
   */
  styles: any;

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
