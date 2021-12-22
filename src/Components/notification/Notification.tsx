import React from "react";

interface Props {
  message: string;
}
const Notification = ({ message }: Props) => {
  return <p >{message}</p>;
};

export default Notification;