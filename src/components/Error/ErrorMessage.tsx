import React from "react";
import styles from "./error.module.css";
interface IMessage {
  message: string;
}

const ErrorMessage = ({ message }: IMessage) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>{message}</div>
    </div>
  );
};

export default ErrorMessage;
