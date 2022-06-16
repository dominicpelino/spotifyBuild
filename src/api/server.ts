import { constants } from 'http2';
import React from 'react';
import { getTokenSourceMapRange } from 'typescript';
import { config } from '../config';

let clientSecret = config.secretKey
let clientId = config.clientId


const getToken = async () => {
    const authToken = 'Basic ' + btoa(clientId + ':' + clientSecret)
    console.log(authToken)
    const response = await fetch(`https://accounts.spotify.com/api/token`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
    const data = await response.json()
    // console.log(data)
    return data.access_token
};

export async function searchArtist( artist: string ) {
    let token = await getToken()
    console.log(token)
    const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist` ,{
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
    });

    if (!response.ok){
        // throw new Error('Failed to fetch data from server')
        console.log(response.json())
    }

    return await response.json()
};

let song;
let playSong: HTMLAudioElement;

export async function  searchTrack( track: string, artist: string )  {
    let token = await getToken()
    let request = await fetch(
        `https://api.spotify.com/v1/search?q=track:${track}+artist:${artist}&type=track&limit=10` ,{
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
    });

    if (!request.ok){
        throw new Error('Failed to fetch data from server')
    }

    let response = await request.json()
    console.log(response.tracks)

    let songList = response.tracks.items

    for(let i=0; i < songList.length;i++){
        if(songList[i].preview_url){
           song = response.tracks.items[i].preview_url
           console.log(`item index is ${i}` )
           break;
        }
    }

    song = response.tracks.items[0].preview_url
    console.log(song)


    songSnippet(song)
};

let songSnippet = (url: string ) =>{
    playSong = new Audio(url)
    return playSong.play()
};

export const stopSnippet = () => {
    return playSong.pause();
}
