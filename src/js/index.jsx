import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './components/Carousel'
import Copyright from './components/Copyright'

const carouselRoot = ReactDOM.createRoot(document.getElementById('react-carousel'))
const copyrightRoot = ReactDOM.createRoot(document.getElementById('react-copyright'))

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
