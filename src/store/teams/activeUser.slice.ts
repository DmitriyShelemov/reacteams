import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IActiveUser {
    token: string;
    skypeToken: string;
}

const initialState:IActiveUser = {} as IActiveUser

export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        setToken: (state, action:PayloadAction<string>) => {
            state.token = action.payload 
        },
        setAuth: (state, action:PayloadAction<string>) => {
            state.skypeToken = action.payload 
        }
    }
})

export const activeUserReducer = activeUserSlice.reducer
export const activeUserActions = activeUserSlice.actions
