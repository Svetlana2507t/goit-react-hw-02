const Feedback = ({ rateState }) => {
  //const totalFeedback = good + neutral + bad;

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p>Good: {rateState.good}</p>
      <p>Neutral: {rateState.neutral}</p>
      <p>Bad: {rateState.bad}</p>
    </div>
  );
};
export default Feedback;
