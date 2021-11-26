import React from 'react'
import Layout from '../components/Layout'

// gatsby has its own way of saying that you are on endpoint that doesnt't exist but you can create your own 404 page and preview it
export default function NotFound() {

    return (
        <Layout>
            <div>
                <h2>404</h2>
                <p>Sorry, that page doesn't exist</p>
            </div>
        </Layout>
    )
}
