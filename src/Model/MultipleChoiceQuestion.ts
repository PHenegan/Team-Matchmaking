import QuizQuestion from "./QuizQuestion";
import { QuizAnswer } from "./Types";

/**
 * Represents a Multiple Choice question on a form, in which a user must choose
 * one option from a list of possible answers.
 */
export default class MultipleChoiceQuestion implements QuizQuestion {
  private readonly _qId: string;
  private readonly _prompt: string;
  private readonly _options: string[];
  private _answer: string;

  /**
   * Creates a MultipleChoiceQuestion object from the given prompt and answer choices.
   * @param prompt the prompt for the question, i.e. what is being asked
   * @param options the list of possible answers which can be selected by the user
   * @param qId is an identifier for the question being asked
   */
  public constructor(prompt: string, options: string[], qId: string) {
    this._prompt = prompt;
    if (options.length === 0) {
      throw new Error("MultipleChoiceQuestion constructor: Must have at least one option");
    }
    this._options = options;
    this._answer = "";
    this._qId = qId;
  }

  get questionID(): number {
    return this.questionID;
  }

  get options(): string[] {
    return this._options;
  }

  get prompt(): string {
    return this._prompt;
  }

  get answer(): string {
    return this._answer;
  }

  set answer(answer: QuizAnswer) {
    let validChoice: boolean = false;
    for (let i = 0; i < this._options.length; i++) {
      if (answer === i) {
        validChoice = true;
      }
    }
    if (!validChoice && answer !== "") {
      throw new Error(
        "Invalid Answer: answer must be an index in list of MultipleChoiceQuestion choices"
      );
    }

    this._answer = answer.toString();
  }
}
