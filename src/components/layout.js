import React from "react"
import { Link } from "gatsby"

function Layout(props) {
  return (
    <>
      <header>
        <h1>AudioC0RE</h1>
        <Link to="/about/">
          About
        </Link>
      </header>
      {props.children}
      {props.isHome || <Link to="/">back to homepage &larr;</Link>}
    </>
  )
}

export default Layout