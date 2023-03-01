import { JsxElement } from "typescript";

/**
 * Represents an object which can be drawn on a page
 */
export default interface Viewable {

  /**
   * Draws the viewable object as a JSX element
   */
  view(): JsxElement;
}
