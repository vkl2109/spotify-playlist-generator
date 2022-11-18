import Modal from 'react-bootstrap/Modal';

const About = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>About:</Modal.Title>
            </Modal.Header >
                <Modal.Body>Insert a sentence and generate a playlist of the words on Spotify!!</Modal.Body>
            <Modal.Footer>
                © 2022 Copyright: Vincent Le
            </Modal.Footer>
        </Modal>
    )
}

export default About