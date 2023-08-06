import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Copyright from './components/Copyright'

const headerRoot = ReactDOM.createRoot(document.getElementById('react-header'))
const carouselRoot = ReactDOM.createRoot(document.getElementById('react-carousel'))
const copyrightRoot = ReactDOM.createRoot(document.getElementById('react-copyright'))

headerRoot.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

carouselRoot.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
)

copyrightRoot.render(
  <React.StrictMode>
    <Copyright />
  </React.StrictMode>,
)
