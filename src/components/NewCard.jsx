import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewCard = (props) => {
    const clientID = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    const [ audioTrack, setAudioTrack ] = useState(null);

    const getAccessToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        return result.json();
    }

    const getTracks = async (keyword, token) => {
        const result = await fetch ('https://api.spotify.com/v1/search?q=' + keyword + '&type=track', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result.json();
    }

    useEffect(() => {
        const runFuncs = async () => {
            let token = await getAccessToken();
            let tracks = await getTracks(props.word, token.access_token);
            setAudioTrack(tracks.tracks.items[0]);
            console.log(audioTrack);
        }
        runFuncs();
    }, [])

    return (
        <div className="mt-5">
            {audioTrack ? 
            (
                <Card style={{width: '10rem'}}>
                    <Card.Img variant="top" src={audioTrack.album.images[0].url} />
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title>{audioTrack.name}</Card.Title>
                        <Card.Text className="text-center">{audioTrack.artists[0].name}</Card.Text>
                        <Button variant="success" href={audioTrack.external_urls.spotify} target='_blank'>Play</Button>
                    </Card.Body>
                </Card>
            ) : (<h1>{props.word} is loading...</h1>)}
        </div>
    )
}

export default NewCard;