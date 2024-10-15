import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <div className="result">
        <span>{emoji}</span>
        <p>
          You scored <strong>{points}</strong> out of {maxPossiblePoints} (
          {Math.ceil(percentage)}%)
        </p>
      </div>
      <p className="highScore">(highScore: {highScore} points)</p>
      <button
        aria-label="restart quiz"
        className="btn"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
