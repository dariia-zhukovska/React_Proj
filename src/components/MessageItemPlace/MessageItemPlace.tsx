import React from 'react';
import styles from './MessageItemPlace.module.css';
interface IProps {
  workPlace?: string;
}




function MessageItemPlace({workPlace}: IProps) {
  return (
    <div className={styles.msgUserWorkPlace}>
      {workPlace}
    </div>
  );
}

export default MessageItemPlace;


