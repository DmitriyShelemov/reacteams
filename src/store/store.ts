import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { activeChatReducer } from "./chats/activeChat.slice";
import { chatApi } from "./chats/chat.api";
import { messageApi } from "./messages/message.api";

export const store = configureStore({
    reducer: { 
        [chatApi.reducerPath]: chatApi.reducer, 
        [messageApi.reducerPath]: messageApi.reducer, 
        activeChat: activeChatReducer 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(chatApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>