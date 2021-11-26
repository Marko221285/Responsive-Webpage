//component that runs at build time in node environment

const path = require('path')  //imports in node environment

exports.createPages = async ({ graphql, actions }) => {    //async because we are fetching data to the template, we are also destructuring 
                                                          // graphql from the object for usage like we did in components with import
    const { data } = await graphql(`                      
      query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }     
    `)
    
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug, // Any valid URL. Must start with a forward slash. (path already exists in Link)
            component: path.resolve('./src/templates/project-details.js'), // What component we use to generate page - absolute path to the component for this page
            context: { slug: node.frontmatter.slug }   // What variable we want to pass in. The context is passed as props to the component as well
                                                       // as into the component's GraphQL query.
        })                                             // In this case slug is query variable for query ProjectDetails
    })
}

