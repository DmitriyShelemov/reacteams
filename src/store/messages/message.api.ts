import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IMessage } from './message.types'

export const messageApi = createApi({
    reducerPath: 'api/messages',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: build => ({
        getMessages: build.query<IMessage[], number>({query: (id: number) => `posts/${id}/comments`})
    })
})
export const { useGetMessagesQuery } = messageApi