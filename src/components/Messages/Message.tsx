import React, { FC, useState } from "react"
import { IMessage } from "../../store/messages/message.types";

import styles from './Message.module.scss'
import accountImage from '../../assets/img/account.svg'

const Message: FC<{ message: IMessage }> = ({ message }) => {
    return (
      <div className={styles.message}>
        <div className={styles.avatar}>            
            <img src={accountImage} alt="" />
        </div>
        <div className={styles.data}>
            <div className={styles.actor}>
                <div className={styles.name}>{message.email}</div>
                <div className={styles['last-date']}>{message.name}</div>
            </div>        
            <div className={styles['last-message']}>{message.body}</div>
        </div>
      </div>
    );
  }
  
  export default Message;