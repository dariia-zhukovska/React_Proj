import React from 'react';
import styles from './UpdatedInfo.module.css';
interface IProps {
  info: string;
}




function UpdatedInfo({info}: IProps) {
  return (
      <div className={styles.info}>
        {info}
      </div>
  );
}

export default UpdatedInfo;


