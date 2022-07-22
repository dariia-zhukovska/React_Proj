import React from 'react';
import styles from './SideBarIcon.module.css';
interface IProps {
  icon: string;
  isLogo?: boolean;
}

function SideBarIcon({icon}: IProps) {
  return (
   <div><img src={icon} alt="icon" className={`${styles.icon}` }/></div>
  );
}

export default SideBarIcon;
