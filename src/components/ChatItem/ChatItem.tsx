import React from 'react';
import styles from './ChatItem.module.css';


import ChatItemAvatar from '../ChatItemAvatar/ChatItemAvatar';
import ContentItemUsername from '../ContentItemUsername/ContentItemUsername';
import ContentItemMsg from '../ContentItemMsg/ContentItemMsg';
import ContentItemUserMsgTime from '../ContentItemUserMsgTime/ContentItemUserMsgTime';
import NotificationsBlock from '../NotificationsBlock/NotificationsBlock';
import {ISideBarData} from '../../types';
import avatars from '../../assets/img';

interface IProps {
  chatItemData: ISideBarData;
  onClick: (id: number) => void; 
  isSelected: boolean;
}


function ChatItem({ chatItemData, onClick, isSelected}: IProps) {
  const handleClick = () => {
    onClick(chatItemData.id)
  }
  return (
    <li onClick={handleClick}  className={styles.chatItem} >
      <div className={styles.avatar}><ChatItemAvatar avatar={avatars[chatItemData.avatar]} /></div>
      <div className={styles.contentItem}>
        <div className={styles.contentUser}>
          <ContentItemUsername username={chatItemData.name} />
          <ContentItemUserMsgTime userMsgTime={chatItemData.lastMsg.timestamp} />          
        </div>
        <div className={styles.userMsg}>
          <ContentItemMsg userMsg={chatItemData.lastMsg.text} />
          <NotificationsBlock unreadMsgNum={chatItemData.unreadMsg.unreadMsgNum} isActive={chatItemData.unreadMsg.isActive} />
        </div>
      </div>
    </li>
  );
}

export default ChatItem;
