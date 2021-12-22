import React, { useState } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Notification from "../notification/Notification";
import Statistics from "../statistic/Statistic";

interface Props {
  title: string | undefined;
  
}

const Section = ({ title = ""}: Props)=> {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const changeState = (e) => {
    switch (e.target.name) {
      case "good":
        setGood(good + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();
    const positiveFeedback = sum ? (good / sum) * 100 : 0;
    return Number(positiveFeedback).toFixed(0);
  };
  const feedback = countPositiveFeedbackPercentage();
  return (
    <div>
      <h1 >{title}</h1>

      <FeedbackOptions
        onLeaveFeedback={changeState}
        options={{ good, neutral, bad }}
      />

      <hr />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={feedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
export default Section;