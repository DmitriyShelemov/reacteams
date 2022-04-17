import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { chatApi } from "./chats/chat.api";

export const store = configureStore({
    reducer: { [chatApi.reducerPath]: chatApi.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(chatApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>