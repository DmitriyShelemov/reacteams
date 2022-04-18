import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { activeChatReducer } from "./chats/activeChat.slice";
import { chatApi } from "./chats/chat.api";

export const store = configureStore({
    reducer: { [chatApi.reducerPath]: chatApi.reducer, activeChat: activeChatReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(chatApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>