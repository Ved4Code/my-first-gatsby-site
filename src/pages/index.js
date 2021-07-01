import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello everyone! I am making my own blog site which is going to be published very soon. Loving the every new technology I explore.
        Hoping to make this amazing website published soon having a lot of features. Mean while you can know more about me in <b>ABOUT</b> section.
        Updating blog page very soon. Stay Tuned ! 😀✌ </p>
      <StaticImage
        alt="A person trying to build websites."
        src="../images/home_tech.jpg"
      />
    </Layout>
  )
}

export default IndexPage
