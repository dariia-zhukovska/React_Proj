import React from 'react';
import styles from './ChatMembersOnline.module.css';
interface IProps {
  chatmembersOnline: string;
}




function ChatMembersOnline({chatmembersOnline}: IProps) {
  return (
    <div className={styles.chatMembersOnline}>
      {chatmembersOnline}
    </div>
  );
}

export default ChatMembersOnline;


