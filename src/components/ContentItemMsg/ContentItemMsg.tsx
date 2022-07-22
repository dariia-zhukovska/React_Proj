import React from 'react';
import styles from './ContentItemMsg.module.css';
interface IProps {
  userMsg: string;
}





function ContentItemMsg({userMsg}: IProps) {
  return (
    <div className={styles.contentItemMsg}>
      {userMsg}
    </div>
  );
 
}

export default ContentItemMsg;


