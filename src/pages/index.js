import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query {
    allContentfulCity {
      nodes {
        id
        name
        location {
          lat
          lon
        }
        gatsbyPath(filePath: "/cities/{contentfulCity.name}")
      }
    }
  }
`;

function Home({ data }) {
  return (
    <Layout isHome>
      <title>Home</title>
      <h2>Cities</h2>
      <ul>
        {data.allContentfulCity.nodes.map(city => (
          <li key={city.id}>
            <Link
              to={city.gatsbyPath}
              title={`lat: ${city.location.lat}, lon: ${city.location.lon}`}>{city.name}
            </Link>
          </li>
        ))}  
      </ul>
    </Layout>
  )
}

export default Home
