import React from 'react';
import styles from './MuteIcon.module.css';
interface IProps {
  icon: string;
}

function MuteIcon({icon}: IProps) {
  return (
   <div><img src={icon} alt="icon" className={`${styles.icon}`}/></div>
  );
}

export default MuteIcon;
