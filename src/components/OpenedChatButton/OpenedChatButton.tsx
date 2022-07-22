import React from 'react';
import styles from './OpenedChatButton.module.css';
interface IProps {
  button: string;
}

function OpenedChatButton({button}: IProps) {
  return (
    <button className={styles.openedChatButton}><img src={button} alt="buttonIcon" className={styles.button}/></button>
  );
}

export default OpenedChatButton;
