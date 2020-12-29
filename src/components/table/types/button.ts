export interface ButtonProps {
   /**
   * Display button text
   * @type string
   */
  text?: string;

  /**
   * Display column method name
   * @type string
   */
  handleName?: string;

   /**
   * Whether the button is displayed
   * @default false
   * @type boolean
   */
  show?: boolean;

   /**
   * Display two styles of buttons:  'primary' | 'warning'
   * @default 'primary'
   * @type string
   */
  type?: string;
}