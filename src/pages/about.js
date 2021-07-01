import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site. Myself <i>Vedant Sultania</i> pursuing <i>B.tech in Chem Engg.</i> from <i>IIT BOMBAY</i>
          ..Recently I completed my 2nd yr. and to be in my 3rd yr. soon.Talking about my hobbies I like reading books,watching movies,dramatics,
            & playing outdoor games(especially cricket:D).Also,I love travelling very much and spending time with family and friends ❤❤.
                Always ready to learn and explore something new !!💫  </p>
      <StaticImage
        alt="Photo of website creator"
        src="../images/My_pic.jpg"
      />
      <p>Contact 📱: 8651813603  📩:vedantsultania36@gmail.com 
            Feel free to reach out to me!!
      </p>
    </Layout>
  )
}

export default AboutPage
