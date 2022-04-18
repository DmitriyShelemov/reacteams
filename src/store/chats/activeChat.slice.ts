import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChat } from "./chat.types";

export interface IActiveChat {
    chat: IChat;
}

const initialState:IActiveChat = {} as IActiveChat

export const activeChatSlice = createSlice({
    name: 'activeChat',
    initialState,
    reducers: {
        setChat: (state, action:PayloadAction<IChat>) => {
            state.chat = action.payload 
        }
    }
})

export const activeChatReducer = activeChatSlice.reducer
export const activeChatActions = activeChatSlice.actions
