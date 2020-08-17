import React, { createContext, useReducer } from "react"
import PropTypes from "prop-types"

const initialState = {
  isGDPRCardVisible: true,
}

export const StateContext = createContext(initialState)
export const DispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-isGDPRCardVisible": {
      return {
        ...state,
        isGDPRCardVisible: action.payload,
      }
    }
    default:
      throw Error("Wrong Action Type")
  }
}

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}
