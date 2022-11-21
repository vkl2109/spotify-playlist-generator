import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Search from './components/Search.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);    

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header handleShow = {handleShow}/>
          <About show={show} onHide={handleClose} />
        </Row>
        <Row>
          <Search/>
        </Row>
        <Footer />
      </Container>
    </div>
  )
}

export default App
