import React from 'react'
import Hero from './Hero'
import About from './About'
import DyVideo from '../DynamicComps/DynamicVideo'
import Workspace from './Workspace'
import Phrase from './Phrase'
import Contact from './Contact'
import DyWpp from '../DynamicComps/DynamicWpp'

const HomeComp = () => {
  return (
    <div className='w-full h-full bg-main-black overflow-x-hidden'>
        <Hero />
        <About />
        <DyVideo />
        <Workspace />
        <Phrase />
        <Contact />
        <DyWpp />
    </div>
  )
}

export default HomeComp