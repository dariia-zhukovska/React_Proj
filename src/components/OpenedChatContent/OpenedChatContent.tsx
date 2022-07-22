import React from 'react';
import MessageItemName from '../MessageItemName/MessageItemName';
import MessageItemPlace from '../MessageItemPlace/MessageItemPlace';
import MessageItemTime from '../MessageItemTime/MessageItemTime';

import styles from './OpenedChatContent.module.css';


import elonMuskAvatar from '../../assets/img/Chat/Avatar_elonMusk.svg';
import joeRoganAvatar from '../../assets/img/Chat/Avatar_joeRogan.svg';
import alarmBot from '../../assets/img/Chat/Avatar_alarmBot.svg';
import SentPictures from '../SentPictures/SentPictures';
import forwardedPicture from '../../assets/img/Chat/Thumbs.svg'
import verticalDevider from '../../assets/img/Chat/Line.svg'
import LineDivider from '../LineDivider/LineDivider';
import UpdatedInfo from '../UpdatedInfo/UpdatedInfo';
import ReactedUsers from '../ReactedUsers/ReactedUsers';
import Reaction from '../Reaction/Reaction';


import openedChatData from '../../data/openedchat.data';
import OpenedChatItem from '../OpenedChatItem/OpenedChatItem';

/*interface IProps {
  openedChatData: IOpenedChatData & IMessage;
}*/
 

function OpenedChatContent() {
  return (
     <main className={styles.messagesArea}>
       <ul className={styles.messagesList}>
        {openedChatData.map((item) => (<OpenedChatItem openedChatData={item} key={item.id}/>))}
    
        {/* <li className={styles.messageItem}>
          <UserAvatar avatar={elonMuskAvatar}/>
          <div className={styles.messageItemContent}>
            <div className={styles.messageItemTitle}>
              <MessageItemName username={'Elon Musk'}/>
              <MessageItemPlace workPlace={'Tesla'}/>
              <MessageItemTime time={'9:59 PM'}/>
            </div>
            <div className={styles.messageContent}>You’re welcome!
            </div>
          </div>
        </li>
        <div className={styles.updatedInfoBlock}>
          <UpdatedInfo info={'Joe Rogan started a call'} />
        </div>
        <li className={styles.messageItem}>
          <UserAvatar avatar={joeRoganAvatar}/>
          <div className={styles.messageItemContent}>
            <div className={styles.messageItemTitle}>
              <MessageItemName username={'Joe Rogan'}/>
              <MessageItemPlace workPlace={'JRE podcast'}/>
              <MessageItemTime time={'10:00 PM'}/>
            </div>
            <div className={styles.messageContent}> How does one, just in the middle of doing all the things you do, create cars,
              rockets, all the stuff you're doing, constantly innovating, decide to just make a flamethrower? Where do you have the time for that?
            </div>
            <div className={styles.reactionBlockItem}>
              <Reaction reactionEmoji={emojiHeart}/>
              <Reaction reactionEmoji={emojiThumb}/>
              <ReactedUsers userList={'You and Jason Statham'}/>
            </div>
              
          </div>
          
        </li>
        <li className={styles.messageItem}>
          <UserAvatar avatar={alarmBot}/>
          <div className={styles.messageItemContent}>
            <div className={styles.messageItemTitle}>  
              <MessageItemName username={'Alarm'}/>
              <MessageItemPlace workPlace={'Bot'}/>
              <MessageItemTime time={'10:02 PM'}/>
            </div>
            <div className={styles.messageContent}>Well, the flame, we didn't put a lot of time into the flamethrower. This was an
              off-the-cuff thing. It's sort of a hobby
              company called the Boring Company, which started out as a joke, and we decided to make a real, and dig a
              tunnel under
              LA.
            </div>
            <div className={styles.messageContent}>And then, other people asked us to dig tunnels. And so, we said yes in a few
              cases.
            </div>
            <div className={styles.reactionBlock}>
              <div className={styles.reactionBlockItem}>
                <Reaction reactionEmoji={emojiHeart}/>
                <Reaction reactionEmoji={emojiThumb}/>
                <Reaction reactionEmoji={emojiOmg}/>
                <ReactedUsers userList={'Jack Dorsey and 12 others'}/>
              </div>
              <div className={styles.reactionBlockItem}>
                <Reaction reactionEmoji={emojiDialogue}/>
                <ReactedUsers userList={'2 comments'}/>
              </div> 
            </div>
          </div>
        </li>
        <div className={styles.lastUpdatedInfoblock}>
          <UpdatedInfo info={'New messages'}/>
        </div>
        <li className={styles.messageItem}>
          <UserAvatar avatar={joeRoganAvatar}/>
          <div className={styles.messageItemContent}>
            <div className={styles.messageItemTitle}>
              <MessageItemName username={'Joe Rogan'}/>
              <MessageItemPlace workPlace={'JRE podcast'}/>
              <MessageItemTime time={'10:05 PM'}/>
            </div>
            <div className={styles.messageContent}>Now who
            </div>
          </div>
        </li>

        <li className={styles.messageItem}>
          <UserAvatar avatar={elonMuskAvatar}/>
          <div className={styles.messageItemContent}>
            <div className={styles.messageItemTitle}>
              <MessageItemName username={'Elon Musk'}/>
              <MessageItemPlace workPlace={'Tesla'}/>
              <MessageItemTime time={'10:06 AM'}/>
            </div>
            <div className={`${styles.messageContent} ${styles.forwardedMsgContent}`}>
              <LineDivider divider={verticalDevider} isVertical/>
              <SentPictures photo={forwardedPicture} isMiniPhoto/>
              <div className={styles.messageItemContent}>
                <div className={styles.messageItemTitle}>
                  <MessageItemName username={'Joe Rogan'}/>
                  <MessageItemPlace workPlace={'JRE podcast'}/>
                  <MessageItemTime time={'10:05 PM'}/>
                </div>
                <div className={styles.messageContent} style={{color: 'grey'}} >Photo
                </div>
              </div>
            </div>
            <div className={styles.messageContent}>I should also go there sometime
            </div>
          </div>
        </li> */}
       </ul>
     </main>
  );
}

export default OpenedChatContent;


