import React from 'react';
import styles from './ChatItemAvatar.module.css';
interface IProps {
  avatar: string;
  isActive?: boolean;
}

function ChatItemAvatar({avatar, isActive}: IProps) {
  return (
    <div><img src={avatar} alt="avatar" className={`${isActive ? styles.activeAvatar : styles.avatar}` }/></div>
  );
}

export default ChatItemAvatar;
