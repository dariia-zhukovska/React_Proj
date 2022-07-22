export interface ISideBarData {
  id: number;
  avatar: string;
  isOnline: boolean;
  name: string;
  lastMsg: {
    timestamp: string;
    text: string;
  };
  unreadMsg: {
    unreadMsgNum: number;
    isActive: boolean;
  }
}

export interface IMessage {
  timestamp: string;
  text: string;
}

export interface IOpenedChatData {
  id: number;
  avatar?: string;
  name?: string;
  workplace?: string;
  messages?: IMessage[];
  type: string;
  text?: string;
}



