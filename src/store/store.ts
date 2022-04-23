import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { activeChatReducer } from "./chats/activeChat.slice";
import { activeUserReducer } from "./teams/activeUser.slice";
import { authApi } from "./teams/auth.api";
import { chatApi } from "./chats/chat.api";
import { messageApi } from "./messages/message.api";

export const store = configureStore({
    reducer: { 
        activeUser: activeUserReducer,
        [authApi.reducerPath]: authApi.reducer, 
        [chatApi.reducerPath]: chatApi.reducer, 
        [messageApi.reducerPath]: messageApi.reducer, 
        activeChat: activeChatReducer 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware).concat(chatApi.middleware).concat(messageApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>