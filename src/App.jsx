import { useEffect, useState } from 'react'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import CoverPhoto from './components/CoverPhoto';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <CoverPhoto></CoverPhoto>
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Timeline></Timeline>
        <Contact></Contact>
        <Footer></Footer>
      </div>
        
    </>
  )
}

export default App
