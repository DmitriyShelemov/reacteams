import React, { FC, useState } from "react"
import { IChat } from "../../store/chats/chat.types";

import styles from './Chat.module.scss'
import accountImage from '../../assets/img/account.svg'

const Chat: FC<{ chat: IChat }> = ({ chat }) => {
    const [selected, setSelected] = useState<boolean>(false)

    React.useEffect(() => {
        chat.selected = selected;
    }, [selected])

    return (
      <div className={`${styles.chat} ${selected ? 'selected' : null}`} onClick={() => setSelected(true)}>
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