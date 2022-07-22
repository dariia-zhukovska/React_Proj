import React from 'react';
import styles from './OnlineDotComponent.module.css';
interface IProps {
  onlineDot: string;
  isActive?: boolean;
}

function OnlineDotComponent({onlineDot, isActive}: IProps) {
  return (
   <div><img src={onlineDot} alt="logo" className={`${isActive ? styles.activeDot : styles.onlineDot}` }/></div>
  );
}

export default OnlineDotComponent;