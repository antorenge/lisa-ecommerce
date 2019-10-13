import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Categories from './Categories'
import Catalogue from './Catalogue'
import Newsletter from './Newsletter'
import Footer from './Footer'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
        <Categories/>
        <Catalogue/>
        <Newsletter/>
        <Footer/>
      </div>
    )
  }
}

export default Home