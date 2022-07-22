import React from 'react';
import styles from './UserAvatar.module.css';
interface IProps {
  avatar?: string;
  chatAvatar?: boolean;
}




function UserAvatar({avatar, chatAvatar}: IProps) {
  return (
    avatar === '' ? null : 
    <div>
      <img src={avatar} alt="avatar" className={`${chatAvatar ? styles.chatAvatar : styles.userAvatar}` }/>
    </div>
  );
}



export default UserAvatar;
