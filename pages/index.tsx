import React from 'react'
import type { NextPage } from 'next'
import Terminal from '../components/terminal'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-bg-gray">
      <Terminal />
    </div>
  )
}

export default Home
