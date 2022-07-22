import React from 'react';
import styles from './ContentItemUsername.module.css';
interface IProps {
  username: string;
}




function ContentItemUsername({username}: IProps) {
  return (
    <div className={styles.contentItemUsername}>
      {username}
    </div>
  );
}

export default ContentItemUsername;


