//import { useState } from 'react';
import css from './Options.module.css';

const Options = ({ onRateChange, onReset }) => {
  //   const [rateGood, setRateGood] = useState(0);
  //   const [rateNeutral, setRateNeutral] = useState(0);
  //   const [rateBad, setRateBad] = useState(0);

  const handleClickGood = () => {
    onRateChange('good');
  };
  const handleClickNeutral = () => {
    onRateChange('neutral');
  };
  const handleClickBad = () => {
    onRateChange('bad');
  };
  const handleClickReset = () => {
    onReset();
  };

  return (
    <div className={css.btn_wrapper}>
      <button className={css.btn} onClick={handleClickGood}>
        Good
      </button>
      <button className={css.btn} onClick={handleClickNeutral}>
        Neutral
      </button>
      <button className={css.btn} onClick={handleClickBad}>
        Bad
      </button>
      <button className={css.btn} onClick={handleClickReset}>
        Reset
      </button>
    </div>
  );
};

export default Options;
