import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { TypeRootState } from './../store'
import { IChat } from './chat.types'

/* export const chatApi = createApi({
    reducerPath: 'api/chats',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://graph.microsoft.com/v1.0/',
        prepareHeaders: (headers, { getState }) => { 
            debugger;
            const token = (getState() as TypeRootState).activeUser?.token

            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          }
    }),
    endpoints: build => ({
        getChats: build.query<IChat[], number>({query: (limit = 20) => `/me/chats?limit=${limit}`})
    })
}) */

export const chatApi = createApi({
    reducerPath: 'api/chats',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://emea.ng.msg.teams.microsoft.com/v1/',
        prepareHeaders: (headers, { getState }) => { 
            const token = (getState() as TypeRootState).activeUser?.skypeToken

            if (token) {
              headers.set('authorization', `${token}`)
            }
        
            return headers
          }
    }),
    endpoints: build => ({
        getChats: build.query<IChat[], number>({query: (limit = 20) => `users/me/conversations?limit=${limit}`})
    })
})

export const { useGetChatsQuery } = chatApi