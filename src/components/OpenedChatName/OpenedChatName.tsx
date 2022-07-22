import React from 'react';
import styles from './OpenedChatName.module.css';
interface IProps {
  chatname: string;
}




function OpenedChatName({chatname}: IProps) {
  return (
    <div className={styles.openedChatTitle}>
      {chatname}
    </div>
  );
}

export default OpenedChatName;


