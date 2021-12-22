import React from "react";

interface Props {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: any;
}

const Statistic = ({good,neutral,bad,positivePercentage,total}: Props) => {
  // const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li>
      </ul>
    </>
  );
};

export default Statistic;