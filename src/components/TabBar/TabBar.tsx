import React from 'react';
import styles from './TabBar.module.css';
import TabBarIcon from '../TabBarIcon/TabBarIcon';
import logo from '../../assets/img/Logo.svg';
import discover from '../../assets/img/Icon_1_Discover.svg';
import contacts from '../../assets/img/Icon_2_Contacts.svg';
import chats from '../../assets/img/Icon_3_Chats.svg';
import notifications from '../../assets/img/Icon_4_Notifications.svg';
import settings from '../../assets/img/Icon_5_Settings.svg';
import footerIcon from '../../assets/img/Icon_6_Footer.svg';




function TabBar() {
  return (
    <div className={styles.tabBar}>
      <div className={styles.topIcons}>
        <TabBarIcon icon={logo} isLogo />
        <TabBarIcon icon={discover} />
        <TabBarIcon icon={contacts} />
        <div className={styles.chatsIcon}>
          <TabBarIcon icon={chats} />
          <div className={styles.chatsNumber}>3</div>
        </div>
        <TabBarIcon icon={notifications} /> 
        <TabBarIcon icon={settings}/>
      </div>
      <div >
        <TabBarIcon icon={footerIcon} />
      </div>
    </div>
  );
}

export default TabBar;
