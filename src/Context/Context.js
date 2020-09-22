import React, { createContext, useContext, useReducer } from 'react'
import { initState, reducer } from '../Redux/Reducer/Reducer'

const UserStateContext = createContext(undefined)
const UserDispatchContext = createContext(undefined)

export const UserProvider = ({ children }) => {
    const [state, redux] = useReducer(reducer, initState)

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={redux}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export function UseUserState() {
    const state = useContext(UserStateContext)
    if (!state) throw new Error('UserState not found')
    return state
}

export function UseUserDispatch() {
    const dispatch = useContext(UserDispatchContext)
    if (!dispatch) throw new Error('UserDispatch not found')
    return dispatch
}
