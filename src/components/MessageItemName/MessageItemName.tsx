import React from 'react';
import styles from './MessageItemName.module.css';
interface IProps {
  username?: string;
}




function MessageItemName({username}: IProps) {
  return (
    <div className={styles.msgUsername}>
      {username}
    </div>
  );
}

export default MessageItemName;


