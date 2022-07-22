import React from 'react';
import styles from './SideBarChatExtraIcon.module.css';
interface IProps {
  icon: string;
  chatNameIcon?: boolean;
}

function SideBarChatExtraIcon({icon, chatNameIcon}: IProps) {
  return (
    <div><img src={icon} alt="avatar" className={`${chatNameIcon ? styles.chatNameIcon : styles.icon}` }/></div>
  );
}

export default SideBarChatExtraIcon;
