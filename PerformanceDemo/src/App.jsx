import { useState } from 'react'
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './modal'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <button onClick={() => setIsOpen(true)}></button>
      <div>
        Something done here
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
      <div>
        Something done here
      </div>
      <SlowComponent />
    </>
  )
}

export default App
