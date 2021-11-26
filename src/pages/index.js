import React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {

  return (
    <Layout>
      <div className={styles.header}>
        <Link to='/projects'>
          {<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />}
        </Link>
      </div>
    </Layout>
  )
}

//This is page query which is different from query in component
export const query = graphql`
  query MilkyWay {
    file(relativePath: {eq: "milky-way.jpeg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 750)
      }
    }
  }
`
