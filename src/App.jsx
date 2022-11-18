import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Header handleShow = {handleShow}/>
      <About show={show} onHide={handleClose} />
      <Footer />
    </div>
  )
}

export default App
