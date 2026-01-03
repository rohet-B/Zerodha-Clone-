import React from 'react'
import Hero from './Hero'
import Team from './Team'

const AboutPage = () => {
  return (
    // In React, <> </> is called a Fragment. 
    // It is used to wrap multiple JSX elements so a component can return them together, without adding an extra HTML element like a div to the DOM. 
    // This keeps the HTML clean while still following React’s rule of returning a single parent element.
    <>
        <Hero/>
        <Team/>
    </>
  )
}

export default AboutPage
