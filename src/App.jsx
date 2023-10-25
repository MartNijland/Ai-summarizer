import Hero from './components/Hero'
import Demo from './components/Demo'

import AnimatedCursor from "react-animated-cursor"


import './App.css'

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
        </div>

        <div className="app">
            <AnimatedCursor
            className="cursor"
          innerSize={12}
          outerSize={30}
          color='157, 83, 222'
          outerAlpha={0.2}
          innerScale={1}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '.link_card',
          ]}
        />
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App