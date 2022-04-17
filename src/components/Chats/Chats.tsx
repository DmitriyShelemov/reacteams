import React, { FC } from "react"
import { useGetChatsQuery } from "../../store/chats/chat.api";
import { IChat } from "../../store/chats/chat.types";
import Chat from './Chat';

import styles from './Chats.module.scss'

const Chats: FC = () => {
    const {data, isLoading, error } = useGetChatsQuery(20)


    return (
      <div className={styles.chats}>
        <div className={styles.title}>My chats</div>

        {isLoading ? (
            'Loading...'
        ) : error ? (
            <div>error</div>
        ) : (
            <div className={styles.list}>
                <ul>
                    {data?.map((chat: any, idx: number) => (    
                        <Chat key={`chat_${idx}`} chat={chat} />
                    ))}
                </ul>
            </div>
        )}

        
      </div>
    );
  }
  
  export default Chats;