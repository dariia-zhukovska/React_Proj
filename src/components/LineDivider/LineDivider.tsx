import React from 'react';
import styles from './LineDivider.module.css';
interface IProps {
  divider: string;
  isVertical?: boolean;
  
}

function LineDivider({divider, isVertical}: IProps) {
  return (
   <div><img src={divider} alt="icon" className={`${isVertical ? styles.vertical : styles.horizontal}` }/></div>
  );
}

export default LineDivider;
