import React from 'react';
import styles from './ChatMembers.module.css';
interface IProps {
  chatmembers: string;
}




function ChatMembers({chatmembers}: IProps) {
  return (
    <div className={styles.openedChatMembers}>
      {chatmembers}
    </div>
  );
}

export default ChatMembers;


