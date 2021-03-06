import React, { FC, useState, useMemo } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetMessagesQuery } from "../../store/messages/message.api";
import { IMessage } from "../../store/messages/message.types";

import RteEditor from '../Slate/RteEditor';
import Message from './Message';
import styles from './Messages.module.scss'

const Messages: FC = () => {
    const {activeChat} = useTypedSelector(state => state)
    const {data, isLoading, error } = useGetMessagesQuery(activeChat.chat?.id)
    
    return (
        <div className={styles.messages}>
            <div className={styles.title}>{activeChat.chat?.title}</div>

            {isLoading ? (
                'Loading...'
            ) : error ? (
                <div>error</div>
            ) : !activeChat.chat ? (
                <div></div>
            ) : (
                <div className={styles.content}>
                    <div className={styles.list}>
                        <ul>
                            {data?.map((message: IMessage, idx: number) => (    
                                <Message key={`chat_${idx}`} message={message} />
                            ))}
                        </ul>
                    </div>
                    <div className={styles.editor}>
                        <RteEditor/>
                    </div>
                </div>
            )}
            
        </div>
    )
  }
  
  export default Messages;