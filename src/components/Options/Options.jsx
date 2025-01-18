//import { useState } from 'react';
import css from './Options.module.css';

const Options = ({ onFeedback, onReset }) => {
  const handleClickGood = () => {
    onFeedback('good');
  };
  const handleClickNeutral = () => {
    onFeedback('neutral');
  };
  const handleClickBad = () => {
    onFeedback('bad');
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
