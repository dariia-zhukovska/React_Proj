import React from 'react';
import styles from './ReactedUsers.module.css';
interface IProps {
  userList: string;
}




function ReactedUsers({userList}: IProps) {
  return (
    <div className={styles.reactedUserList}>
      {userList}
    </div>
  );
}

export default ReactedUsers;


