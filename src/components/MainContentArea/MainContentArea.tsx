import React from 'react';
import OpenedChatContent from '../OpenedChatContent/OpenedChatContent';
import OpenedChatFooter from '../OpenedChatFooter/OpenedChatFooter';
import OpenedChatHeader from '../OpenedChatHeader/OpenedChatHeader';
import styles from './MainContentArea.module.css';



function MainContentArea() {
  return (
    <div className={styles.mainContentArea}>
      <OpenedChatHeader />
      <OpenedChatContent />
      <OpenedChatFooter/>
    </div>
  );
}

export default MainContentArea;
