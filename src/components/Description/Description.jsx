import css from './Description.module.css';

function Description() {
  return (
    <>
      <h1 className={css.title}>
        Sip Happens <span className={css.span}>Café</span>
      </h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </>
  );
}

export default Description;
