import React from 'react';
import styles from './ContentItemUserMsgTime.module.css';
interface IProps {
  userMsgTime: string;
}




function ContentItemUserMsgTime({userMsgTime}: IProps) {
  return (
   <div className={styles.contentItemUserMsgTime}>
     {userMsgTime}
    </div>
  );
}

export default ContentItemUserMsgTime;


