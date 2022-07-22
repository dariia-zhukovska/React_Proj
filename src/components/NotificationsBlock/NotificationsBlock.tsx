import React from 'react';
import styles from './NotificationsBlock.module.css';
interface IProps {
  // newMsg: string;
  unreadMsgNum: number;
  isActive: boolean;
}



function NotificationsBlock({ unreadMsgNum, isActive }: IProps) {
  return (
    unreadMsgNum === 0 ? null :
      <div className={isActive ? styles.notificationsBlock : styles.notificationsBlockMuted}>
          {unreadMsgNum}
      </div> )    
};

export default NotificationsBlock;


