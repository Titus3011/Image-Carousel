import React from 'react'
import './App.css'
import { Carousel } from './components/Carousel'
import {slides} from './data/carouseldata.json'

function App() {
  return (
    <div className='App'>
    <h1 className='title'>IMAGE CAROUSEL </h1>
      <Carousel data={slides}/>
    </div>
  )
}

export default App