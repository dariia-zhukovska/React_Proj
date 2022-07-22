import React, { useState, useEffect } from 'react';
import styles from './SideBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch } from '../../state/hooks';
import { getData } from '../../state/sidebar.slice';
// import sideBarData from '../../data/sidebar.data';



import ChatItem from '../ChatItem/ChatItem'

import SideBarHeader from '../SideBarHeader/SideBarHeader';
import { ISideBarData } from '../../types';



function SideBar() {
	const dispatch = useAppDispatch();
  const [activeId, setActiveId] = useState(0);
	const sideBarData: ISideBarData[] = useSelector((state: any) => state.sidebar.data);

	// const sideBarData: ISideBarData[] = [];

  const handleClick = (id: number) => {
    // onClick(chatItemData.id)
    setActiveId(id);
  }
  console.log(activeId);

	useEffect(() => {
		dispatch(getData())
	}, [dispatch]);
  
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
