const Feedback = ({ rateState, totalFeedback, positiveFeedback }) => {
  if (!totalFeedback) {
    return null; // No feedback yet
  }

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p>Good: {rateState.good}</p>
      <p>Neutral: {rateState.neutral}</p>
      <p>Bad: {rateState.bad}</p>
      <p>Positive feedback: {positiveFeedback}&#37;</p>
    </div>
  );
};
export default Feedback;
