import React, { FC } from "react"
import { IChat } from "../../store/chats/chat.types";

import styles from './Chat.module.scss'
import accountImage from '../../assets/img/account.svg'

const Chat: FC<{ chat: IChat }> = ({ chat }) => {
    return (
      <div className={styles.chat}>
        <div className={styles.avatar}>            
            <img src={accountImage} alt="" />
        </div>
        <div className={styles.data}>
            <div className={styles.actor}>
                <div className={styles.name}>{chat.name?.lastname}, {chat.name?.firstname}</div>
                <div className={styles['last-date']}>{chat.username}</div>
            </div>        
            <div className={styles['last-message']}>{chat.email}</div>
        </div>
      </div>
    );
  }
  
  export default Chat;