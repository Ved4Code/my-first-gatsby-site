import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const NewPage = () => {
  return (
    <Layout pageTitle="New Page">
      <p>Hi Vedant👋 Please accept my pull request!</p>
      <StaticImage
        alt="Smiley face image"
        src="../images/smiley.png"
      />
    </Layout>
  )
}

export default NewPage
