import React from 'react';
import styles from './TabBarIcon.module.css';
interface IProps {
  icon: string;
  isLogo?: boolean;
}

function TabBarIcon({icon, isLogo}: IProps) {
  return (
   <div><img src={icon} alt="icon" className={`${isLogo ? styles.logo : styles.icon}` }/></div>
  );
}

export default TabBarIcon;
