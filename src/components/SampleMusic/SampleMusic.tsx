import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import spotify_image from '../../assets/images/spotifylogo.jpg';
import { Menu, PictureList } from '../../components';
// import { ArtistResponseData, TrackResponseData } from '../Forms';
import { searchArtist, searchTrack, LoginCall } from '../../api';  

// Create Styled Components with styled-components
const Root = styled("div")({
    padding: 0,
    margin: 0
});
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${spotify_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
});
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
});

export const SampleMusic = () =>{
    // const [ artistData, setArtistData ] = useState< ArtistResponseData | null>(null);
    // const [ trackData, setTrackData ] = useState< TrackResponseData | null>(null);

    const onSubmit = async (data:any, _event: any) => {
        await searchArtist( data.artist )
        .then(response => {
            // setArtistData(response)
            console.log(response);
        });

        await searchTrack( data.track, data.artist )
        .then(response => {
            // setTrackData(response)
            console.log(response);
        });
    } 

    return (
        <Root>
            <Menu />
            <Main>
                <MainText>
                    <PictureList />
                </MainText>
            </Main>
        </Root>
    )
};
    