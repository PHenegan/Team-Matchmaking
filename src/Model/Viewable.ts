import { JsxElement } from "typescript";

/**
 * Represents an object which can be drawn on a page
 */
export default interface Viewable {
    view(): JsxElement
}