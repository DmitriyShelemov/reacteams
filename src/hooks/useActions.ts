import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { activeChatActions } from "../store/chats/activeChat.slice"

const allActions = {
    ...activeChatActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}