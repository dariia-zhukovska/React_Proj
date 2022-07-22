import React from 'react';
import styles from './MessageItemTime.module.css';
interface IProps {
  time?: string;
}




function MessageItemTime({time}: IProps) {
  return (
    <div className={styles.msgTime}>
      {time}
    </div>
  );
}

export default MessageItemTime;


