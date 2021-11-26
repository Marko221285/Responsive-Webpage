import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Solarsystem</h2>
                <h3>Planets</h3>
                <div className={styles.projects}>
                  {projects.map(project => (
                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                      <div>
                        <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                        <h3>{ project.frontmatter.title }</h3>
                        <p>{ project.frontmatter.stack }</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <p>Like what you see? Email me at <a rel="noreferrer" href="mailto:horvat.marko2212@gmail.com"
                 target="_blank" style={{fontWeight: 'bold'}}>{ contact }</a> for a query!</p>
            </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___position}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

`
