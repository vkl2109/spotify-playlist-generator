import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NewCard from './NewCard.jsx';
import { useState } from 'react';

const Search = () => {
    const [ input, setInput ] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(e.target.search.value.split(' '));
        e.target.reset();
    }

    return (
        <Container fluid>
            <Container className="text-center mt-5">
                <h1>Generate A Playlist!!!</h1>
                <p>Enter a sentence below and we'll show you songs starting with those words.</p>
                <p>Ex. "Jolene & Barbara hack together." returns 4+ songs inspired by those words.</p>
            </Container>
            <Container className="w-75">
                <Form className="d-flex flex-row ms-5 me-5" onSubmit={handleSubmit}>
                    <Form.Control className="border-end-0 border rounded-pill" type="text" placeholder="Insert Sentence Here!" name="search"/>
                    <Button type="submit" variant="outline-success" className="rounded-pill ms-n3">Generate!</Button>
                </Form>
            </Container>
            <Container className="d-flex flex-wrap justify-content-center">
                {input.map(word => {
                    return (
                        <NewCard key={word} word={word}/>
                    )
                })}
            </Container>
        </Container>
    )
}

export default Search