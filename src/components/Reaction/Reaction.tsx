import React from 'react';
import styles from './Reaction.module.css';
interface IProps {
  reactionEmoji: string;
}

function Reaction({reactionEmoji}: IProps) {
  return (
   <div><img src={reactionEmoji} alt="reaction emoji" className={styles.reactionEmoji}/></div>
  );
}

export default Reaction;

