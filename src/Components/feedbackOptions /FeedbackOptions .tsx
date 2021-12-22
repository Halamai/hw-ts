import React from "react";
interface Props {
  options: [];
  onLeaveFeedback?: any;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => {
  return Object.keys(options).map((item) => (
    <button
      key={item}
      type="button"
      name={item}
      onClick={onLeaveFeedback}
    >
      {item}
    </button>
  ));
};

export default FeedbackOptions;