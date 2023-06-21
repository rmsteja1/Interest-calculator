import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const initialUserInputs = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  };
  const [userInput, setUserInput] = useState(initialUserInputs);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("SUBMIT");
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    setUserInput(initialUserInputs);
    props.resetHandler();
  };
  const inputChangeHandler = (input, value) => {
    setUserInput((preValue) => {
      return {
        ...preValue,
        [input]: value,
      };
    });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
