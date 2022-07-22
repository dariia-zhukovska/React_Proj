import React from 'react';
import styles from './ReactionBlock.module.css';

import emojiHeart from '../../assets/img/Chat/Reaction_heart.svg';
import emojiThumb from '../../assets/img/Chat/Reaction_thumb.svg';
import emojiOmg from '../../assets/img/Chat/Reaction_omg.svg';
import emojiDialogue from '../../assets/img/Chat/Reaction_dialogue.svg';
import Reaction from '../Reaction/Reaction';
import ReactedUsers from '../ReactedUsers/ReactedUsers';


interface IProps {
  reactionBlock: object;
}

function ReactionBlock({reactionBlock}: IProps) {
  return (
    <div className={styles.reactionBlock}>
      {reactionBlock = [
      <Reaction reactionEmoji={''}/>,
      <ReactedUsers userList={''}/> ]}
    </div>
  );
}

export default ReactionBlock;
