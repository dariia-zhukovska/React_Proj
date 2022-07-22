import React from 'react';
import styles from './OpenedChatFooter.module.css';
import OpenedChatButton from '../OpenedChatButton/OpenedChatButton';

import addFileBtn from '../../assets/img/Chat/Icon_addFile.svg';
import enterBtn from '../../assets/img/Chat/Icon_send.svg';
import stickerIcon from '../../assets/img/Chat/Icon_sticker.svg';
import OpenedChatAddFileButton from '../OpenedChatAddFileButton/OpenedChatAddFileButton';








function OpenedChatFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.composeBar}>
      <div className={styles.addFileBtn}> 
        <OpenedChatAddFileButton addButton={addFileBtn}/>
      </div>
      <div className={styles.inputArea}>
        <input type="text" placeholder="Write a message…" className={styles.newMessageInput}/>
        <img src={stickerIcon} alt="stickersIcon" className={styles.stickersIcon}/>
      </div>
      <div className={styles.enterBtn}> 
        <OpenedChatButton button={enterBtn}/>
      </div>
    </div> 
    </footer>  
);
}

export default OpenedChatFooter;

