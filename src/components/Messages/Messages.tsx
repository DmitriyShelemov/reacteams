import React, { FC } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetMessagesQuery } from "../../store/messages/message.api";
import { IMessage } from "../../store/messages/message.types";
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
            ) : (
                <div className={styles.list}>
                    <ul>
                        {data?.map((message: IMessage, idx: number) => (    
                            <Message key={`chat_${idx}`} message={message} />
                        ))}
                    </ul>
                </div>
            )}

            
        </div>
    )
  }
  
  export default Messages;