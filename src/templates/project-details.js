import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../styles/project-details.module.css'

export default function projectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{ title }</h2>
                <h3>{ stack }</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={ featuredImg.childImageSharp.gatsbyImageData } /> 
                </div>
                {/*setting html property as variable is dangerous when using third party sources(XSS) but we use it from our file system so it's ok*/}
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} /> 
            </div>
        </Layout>
    )
}

// $ is query variable neccessary when quering individual files
export const query = graphql`
  query ProjectDetails($slug: String) {    
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 750)
          }
        }
      }
    }
  }
`
