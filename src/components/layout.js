import React from "react"
import Header from "./header"

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
