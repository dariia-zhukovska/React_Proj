import React, { useState } from 'react';
import styles from './SideBar.module.css';
import sideBarData from '../../data/sidebar.data';


import ChatItem from '../ChatItem/ChatItem'

import SideBarHeader from '../SideBarHeader/SideBarHeader';



function SideBar() {
  const [activeId, setActiveId] = useState(0);

  const handleClick = (id: number) => {
    // onClick(chatItemData.id)
    setActiveId(id);
  }
  console.log(activeId);
  
  return (
    <div className={styles.sideBar}>
      <header>
        <SideBarHeader />
      </header>
      <main className={styles.messagesArea}>
        <ul className={styles.chatList}>
          {sideBarData.map((item) => (
            <ChatItem chatItemData={item} key={item.id} onClick={handleClick} isSelected={item.id === activeId} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default SideBar;
