import React from 'react';
import styles from './OpenedChatItem.module.css';


import ChatItemAvatar from '../ChatItemAvatar/ChatItemAvatar';
import ContentItemUsername from '../ContentItemUsername/ContentItemUsername';
import ContentItemMsg from '../ContentItemMsg/ContentItemMsg';
import ContentItemUserMsgTime from '../ContentItemUserMsgTime/ContentItemUserMsgTime';
import NotificationsBlock from '../NotificationsBlock/NotificationsBlock';
import {IMessage, IOpenedChatData} from '../../types';
import avatars from '../../assets/img';
import MessageItemName from '../MessageItemName/MessageItemName';
import MessageItemPlace from '../MessageItemPlace/MessageItemPlace';
import MessageItemTime from '../MessageItemTime/MessageItemTime';
import UserAvatar from '../UserAvatar/UserAvatar';

interface IProps {
  openedChatData: IOpenedChatData
  // & IMessage;
}


function OpenedChatItem({ openedChatData  }: IProps) {
  return (
    <li className={styles.messageItem}>
      <div className={styles.avatar}><UserAvatar avatar={avatars[openedChatData.avatar || 'basicAvatar']} /></div>
      <div className={styles.messageItemContent}>
        <div className={styles.messageItemTitle}>
          <MessageItemName username={openedChatData.name}/>
          <MessageItemPlace workPlace={openedChatData.workplace}/>
          <MessageItemTime time={openedChatData.messages?.[0].timestamp}/>       
        </div>
        <div className={styles.messageContent}>
          {openedChatData.messages?.map((item, index) => (
            <ContentItemMsg userMsg={item.text} key={index}/>
          ))}
        </div>
      </div>
    </li>
  );
}



export default OpenedChatItem;
