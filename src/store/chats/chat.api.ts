import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IChat } from './chat.types'

export const chatApi = createApi({
    reducerPath: 'api/chats',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: build => ({
        getChats: build.query<IChat[], number>({query: (limit = 20) => `users?limit=${limit}`})
    })
})
export const { useGetChatsQuery } = chatApi