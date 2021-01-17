import React from "react"
import { Link } from "gatsby"

function Layout(props) {
  return (
    <>
      {props.children}
      <Link to="/">back to homepage &larr;</Link>
    </>
  )
}

export default Layout