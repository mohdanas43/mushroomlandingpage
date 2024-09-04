import React from 'react'
import Hero from './sections/home/hero'
import Concept from './sections/home/concept'
import Charging from './sections/home/charging'
import Iphone from './sections/home/iphone'
import PREORDER from './sections/home/preorder'
import Last from './sections/home/last'
const Page = () => {
  return (
    <div className=' font-helvi   ' >
    <Hero/>
   <Concept/>
   <Charging/>
   <Iphone/>
   <PREORDER/>
   <Last/>
    </div>
  )
}

export default Page