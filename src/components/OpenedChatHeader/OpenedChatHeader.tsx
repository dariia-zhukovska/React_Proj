import React from 'react';
import styles from './OpenedChatHeader.module.css';
import OpenedChatName from '../OpenedChatName/OpenedChatName';
import ChatMembers from '../ChatMembers/ChatMembers';
import ChatMembersOnline from '../ChatMembersOnline/ChatMembersOnline';
import OpenedChatButton from '../OpenedChatButton/OpenedChatButton';


import chatAvatarTesla from '../../assets/img/Chat/Avatar_chat.svg';
import newMenberBtn from '../../assets/img/Chat/Icon_newMemb.svg';
import callBtn from '../../assets/img/Chat/Icon_call.svg';
import optionsBtn from '../../assets/img/Chat/Icon_moreOpt.svg';
import UserAvatar from '../UserAvatar/UserAvatar';






function OpenedChatHeader() {
  return (
    <header className={styles.openedChatHeader}>
      <div className={styles.openedChat}>
        <div className={styles.openedChatTop}>
          <UserAvatar avatar={chatAvatarTesla} chatAvatar />
          <div className={styles.openedChatInfo}>
            <OpenedChatName chatname={'Tesla Board'} />
            <div className={styles.openedChatSubtitle}>
              <ChatMembers chatmembers={'12 members'}/>
              <ChatMembersOnline chatmembersOnline={'8 online'}/>
            </div>
          </div>
        </div>
        <div className={styles.openedChatButtons}>
          <OpenedChatButton button={newMenberBtn}/>
          <OpenedChatButton button={callBtn}/>
          <OpenedChatButton button={optionsBtn}/>
        </div>
      </div>
    </header>


    
    
  );
}

export default OpenedChatHeader;

