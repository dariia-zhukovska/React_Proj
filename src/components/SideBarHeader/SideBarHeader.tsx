import React from 'react';
import styles from './SideBarHeader.module.css';
import sideBarData from '../../data/sidebar.data';

import SideBarIcon from '../SideBarIcon/SideBarIcon';
import searchIcon from '../../assets/img/Icon_12_SearchIcon.svg';
import onlineDot from '../../assets/img/Online.svg';

import ChatItem from '../ChatItem/ChatItem'
import ChatItemAvatar from '../ChatItemAvatar/ChatItemAvatar';
import MuteIcon from '../MuteIcon/MuteIcon';



import ContentItemMsg from '../ContentItemMsg/ContentItemMsg';
import NotificationsBlock from '../NotificationsBlock/NotificationsBlock';
import ContentItemUserMsgTime from '../ContentItemUserMsgTime/ContentItemUserMsgTime';
import ContentItemUsername from '../ContentItemUsername/ContentItemUsername';
import SideBarChatExtraIcon from '../SideBarChatExtraIcon/SideBarChatExtraIcon';
import SideBarSearchArea from '../SideBarSearchArea/SideBarSearchArea';






function SideBarHeader() {
  return (
    <div className={styles.sideBarHeader}>
          <div className={styles.appBar}>
            <h2 className={styles.appBarTitle}>Chats</h2>
            <div>
              <button className={styles.appBarChatNotification}></button>
              <button className={styles.appBarNewChat}></button>
            </div>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}><SideBarIcon icon={searchIcon} /></div>
            <SideBarSearchArea />
          </div>
    </div>
  );
}

export default SideBarHeader;
