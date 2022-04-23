import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { activeUserActions } from "../store/teams/activeUser.slice"
import { activeChatActions } from "../store/chats/activeChat.slice"

const allActions = {
    ...activeUserActions,
    ...activeChatActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}