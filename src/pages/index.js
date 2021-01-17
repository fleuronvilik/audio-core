import * as React from "react"
import { Link } from "gatsby"

function Home() {
  return (
    <main>
      <title>Home</title>
      <h1>AudioC0RE</h1>
      <ul>
        <li><Link to="/about/">About</Link></li>
        <li>
          <Link to="/location/">Location</Link>
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
        </li>
      </ul>
    </main>
  )
}

export default Home
