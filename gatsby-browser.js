// gatsby-browser.js
import React from "react"
import { ContextProvider } from "./src/context/context-provider"
import '@rildev/stylized/style.css'

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}
