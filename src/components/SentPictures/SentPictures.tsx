import React from 'react';
import styles from './SentPictures.module.css';
interface IProps {
  photo: string;
  isMiniPhoto?: boolean;
}

function SentPictures({photo, isMiniPhoto}: IProps) {
  return (
   <div><img src={photo} alt="icon" className={`${isMiniPhoto ? styles.miniPhoto : styles.maxPhoto}` }/></div>
  );
}

export default SentPictures;
