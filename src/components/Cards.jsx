import { useState, useEffect } from 'react';

const Cards = (props) => {
    const clientID = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    const [ accessToken, setAccessToken ] = useState();
    const [ audioTracks, setAudioTracks ] = useState({});
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
            setAccessToken(token.access_token);
            let tracks = await getTracks('Madonna', accessToken);
            setAudioTracks(tracks.tracks.items);
            console.log(tracks.tracks.items);
        }
        runFuncs();
    }, [])
    return (
        <div>
            {
                // audioTracks.map(track => {
                //     let srcUrl = `https://open.spotify.com/embed/track/${track.id}?utm_source=generator`;
                //     return (
                //         <iframe src={srcUrl} allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'>
                //         </iframe>
                //     )
                // })
            }
        </div>
    )
}

export default Cards;