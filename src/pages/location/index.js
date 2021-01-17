import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

function Location() {
  return (
    <Layout>
      <title>Location</title>
      <h1>Location</h1>
      <ul>
        <li>
          <Link to="/location/long-beach/">Long Beach</Link>
        </li>
        <li>
          <Link to="/location/sacramento/">Sacramento</Link>
        </li>
        <li>
          <Link to="/location/oakland/">Oakland</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Location