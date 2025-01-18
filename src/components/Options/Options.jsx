import { useState } from 'react';
import css from './Options.module.css';

const Options = () => {
  const [rateGood, setRateGood] = useState(0);
  const [rateNeutral, setRateNeutral] = useState(0);
  const [rateBad, setRateBad] = useState(0);

  const handleClickGood = () => {
    console.log(rateGood);
    setRateGood(rateGood + 1);
  };
  const handleClickNeutral = () => {
    setRateNeutral(rateNeutral + 1);
    console.log(rateNeutral);
  };
  const handleClickBad = () => {
    console.log(rateBad);
    setRateBad(rateBad + 1);
  };
  const handleClickReset = () => {
    setRateGood(0);
    setRateNeutral(0);
    setRateBad(0);
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
