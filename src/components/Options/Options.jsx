import { useState } from 'react';
import css from './Options.module.css';
const Options = () => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    console.log('+1 click');
    setClicks(clicks + 1);
    console.log('clicks:', clicks);
  };
  const handleResetClick = () => {};
  return (
    <div className={css.btn_wrapper}>
      <button className={css.btn} onClick={() => handleClick}>
        Good
      </button>
      <button className={css.btn} onClick={() => handleClick}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => handleClick}>
        Bad
      </button>
      <button className={css.btn} onClick={() => handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Options;
