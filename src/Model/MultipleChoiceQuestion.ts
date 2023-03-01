import { JsxElement } from "typescript";
import QuizQuestion from "./QuizQuestion";
import { QuizAnswer } from "./Types";
import Viewable from "./Viewable";

/**
 * Represents a Multiple Choice question on a form, in which a user must choose
 * one option from a list of possible answers.
 */
export default class MultipleChoiceQuestion implements QuizQuestion, Viewable {
  private readonly _prompt: string;
  private readonly _choices: string[];
  private _answer: QuizAnswer;

  /**
   * Creates a MultipleChoiceQuestion object from the given prompt and answer choices.
   * @param prompt the prompt for the question, i.e. what is being asked
   * @param choices the list of possible answers which can be selected by the user
   */
  public constructor(prompt: string, choices: string[]) {
    this._prompt = prompt;
    if (choices.length === 0) {
      throw new Error("MultipleChoiceQuestion constructor: Must have at least one option");
    }
    this._choices = choices;
    this._answer = "";
  }
  get prompt(): string {
    return this._prompt;
  }
  get answer(): QuizAnswer {
    return this._answer;
  }
  set answer(answer: QuizAnswer) {
    let validChoice: boolean = false;
    for (let i = 0; i < this._choices.length; i++) {
      if (answer === i) {
        validChoice = true;
      }
    }
    if (!validChoice && answer !== "") {
      throw new Error(
        "Invalid Answer: answer must be an index in list of MultipleChoiceQuestion choices"
      );
    }

    this._answer = answer;
  }

  view(): JsxElement {
    throw new Error("Method not implemented.");
  }
}
