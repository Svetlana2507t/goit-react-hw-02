import { useState } from 'react';
import './App.css';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

function App() {
  const [rateState, setRateState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleRateChange = type => {
    setRateState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  const handleReset = () => {
    setRateState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <h1>Sip Happens Caf&#233;</h1>
      <Description />
      <Options rateState={rateState} onRateChange={handleRateChange} onReset={handleReset} />
      <Feedback rateState={rateState} />
    </>
  );
}

export default App;
