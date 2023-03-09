import { FormEvent, ReactElement, ReactEventHandler } from "react";
import MultipleChoiceQuestion from "../../Model/MultipleChoiceQuestion";
import { QuizAnswer } from "../../Model/Types";

export default function MCQuestion(props: {
  question: MultipleChoiceQuestion;
}) {
  function displayOption(option: string, answer: QuizAnswer): ReactElement {
    return <div>option</div>;
  }
  function selectOptionHandler(option: string) {
    props.question.answer = option;
  }

  return (
    <div>
      <div>Question: {props.question.prompt}</div>
      <div>
        {props.question.options?.map((eachOption) =>
          displayOption(eachOption, props.question.answer)
        )}
      </div>
    </div>
  );
}
