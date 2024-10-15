import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        aria-label="next question"
        className="btn"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        aria-label="finish quiz"
        className="btn"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
