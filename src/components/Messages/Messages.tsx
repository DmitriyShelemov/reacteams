import React, { FC, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetMessagesQuery } from "../../store/messages/message.api";
import { IMessage } from "../../store/messages/message.types";

import Message from './Message';
import styles from './Messages.module.scss'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from "slate-react"
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue:any = []

const Messages: FC = () => {
    const {activeChat} = useTypedSelector(state => state)
    const {data, isLoading, error } = useGetMessagesQuery(activeChat.chat?.id)
    const [editor] = useState(() => withReact(createEditor()))

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
            
            <div className={styles.editor}>
                <Slate editor={editor} value={initialValue}>
                    <Editable />
                </Slate>
            </div>
        </div>
    )
  }
  
  export default Messages;