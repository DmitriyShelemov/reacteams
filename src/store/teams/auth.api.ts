import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { TypeRootState } from '../store'
import { ISkypeAuth } from "./teamsConfig";

export const authApi = createApi({
    reducerPath: 'api/auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://teams.microsoft.com/api/authsvc/v1.0/',
        prepareHeaders: (headers, { getState }) => { 
            const token = (getState() as TypeRootState).activeUser?.token

            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          }
    }),
    endpoints: build => ({
        getAuth: build.query<ISkypeAuth, number>({query: () => '/authz'})
    })
})
export const { useGetAuthQuery } = authApi