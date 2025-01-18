const Feedback = ({ rateState }) => {
  const totalFeedback = rateState.good + rateState.neutral + rateState.bad;
  const positiveFeedback = Math.round((rateState.good / totalFeedback) * 100);
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
