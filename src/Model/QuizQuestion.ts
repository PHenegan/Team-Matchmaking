import { JsxElement } from "typescript";
import { QuizAnswer } from "./Types";

/**
 * Represents a Question for a form or quiz. For the purpose of this application,
 * there will likely need to be some way of quantifying the answer,
 * because it will have to be processed in some way in order create a matching
 */
export default interface QuizQuestion {
    get prompt(): string;
    set prompt(question: string);

    get answer(): QuizAnswer;
    set answer(answer: QuizAnswer);

    view(): JsxElement;
}