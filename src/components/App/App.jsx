import { useState, useEffect } from 'react';
import './App.css';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {
  const [rateState, setRateState] = useState(() => {
    const savedState = window.localStorage.getItem('feedback');
    return savedState ? JSON.parse(savedState) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setRateState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setRateState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = rateState.good + rateState.neutral + rateState.bad;

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(rateState));
  }, [rateState]);

  return (
    <>
      {/* <h1>Sip Happens Caf&#233;</h1> */}
      <Description />

      <Options rateState={rateState} onFeedback={updateFeedback} onReset={handleReset} />

      {totalFeedback ? (
        <Feedback rateState={rateState} />
      ) : (
        <Notification rateState={{ good: 0, neutral: 0, bad: 0 }} />
      )}
    </>
  );
}

export default App;
