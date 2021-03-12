import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout"

export const query = graphql`
  query ($id: String) {
    allContentfulCity(filter: {id: {eq: $id}}) {
      nodes {
        id
        name
        description {
          description
        }
      }
    }
  }
`;

export default function City({ data }) {
  const city = data.allContentfulCity.nodes[0];
  return (
    <Layout>
      <h2>Welcome to {city.name}</h2>
      <p>{city.description.description}</p>
    </Layout>
  );
}