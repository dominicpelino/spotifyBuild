import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import spotify_image from '../../assets/images/spotifylogo.jpg';
import { Menu, TrackForm, PictureList } from '../../components';
// import { ArtistResponseData, TrackResponseData } from '../Forms';
import { searchArtist, searchTrack, stopSnippet } from '../../api';  

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

export const SearchMusic = () =>{

    const onSubmit = async (data: any) => {
        await searchTrack( data.track, data.artist )
    } 

    const StopSnippet = async () =>{
        await stopSnippet()
    }

    return (
        <Root>
            <Menu />
            <Main>
                <MainText>
                    <TrackForm onSubmitHandler={onSubmit} stopHandler={StopSnippet} />
                </MainText>
            </Main>
        </Root>
    )
};
    