import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Search from './components/Search.jsx';
import Cards from './components/Cards.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);    
  const [ input, setInput ] = useState('');

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header handleShow = {handleShow}/>
          <About show={show} onHide={handleClose} />
        </Row>
        <Row>
          <Search input={input} setInput={setInput}/>
        </Row>
        <Row>
          <Cards input={input}/>
        </Row>
        <Footer />
      </Container>
    </div>
  )
}

export default App
