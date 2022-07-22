import React from 'react';
import styles from './SideBarSearchArea.module.css';
import sideBarData from '../../data/sidebar.data';

import SideBarIcon from '../SideBarIcon/SideBarIcon';
import searchIcon from '../../assets/img/Icon_12_SearchIcon.svg';
import onlineDot from '../../assets/img/Online.svg';

import ChatItem from '../ChatItem/ChatItem'
import ChatItemAvatar from '../ChatItemAvatar/ChatItemAvatar';
import MuteIcon from '../MuteIcon/MuteIcon';



import ContentItemMsg from '../ContentItemMsg/ContentItemMsg';
import NotificationsBlock from '../NotificationsBlock/NotificationsBlock';
import ContentItemUserMsgTime from '../ContentItemUserMsgTime/ContentItemUserMsgTime';
import ContentItemUsername from '../ContentItemUsername/ContentItemUsername';
import SideBarChatExtraIcon from '../SideBarChatExtraIcon/SideBarChatExtraIcon';
interface IProps {
  filterText: string;
}





function SideBarSearchArea() {
  return (
    <input className={styles.searchArea} type="text" placeholder="Chats, messages and more"></input>
  );
}

// class SideBarSearchArea extends React.Component {
//   onFilterTextChange: any;
//   constructor(filterText: IProps) {
//     super(filterText);
//     this.onFilterTextChange = this.onFilterTextChange.bind(this);
//   }
  
//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }
//   render() {
//     return ()
// }

export default SideBarSearchArea;
