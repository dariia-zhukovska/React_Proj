import React from 'react';
import styles from './OpenedChatAddFileButton.module.css';
interface IProps {
  addButton: string;
}

function OpenedChatAddFileButton({addButton}: IProps) {
  return (
    <div className={styles.imageUpload}>
      <label htmlFor = 'inputImg'>
        <img src={addButton} alt="buttonIcon" className={styles.addButton}/>
      </label>
      <input id='inputImg' className={styles.openedChatButton} type="file" />
    </div>

  );
}

export default OpenedChatAddFileButton;


