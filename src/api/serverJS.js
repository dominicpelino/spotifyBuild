import React, {useEffect, useState} from 'react';
import axios from "axios";

export const LoginCall = () => {
    const CLIENT_ID = "ff61f75f0c084316bf327b6083284192"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
  
    const [token, setToken] = useState("")
  
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
  
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
  
        setToken(token)
  
    }, [])
  
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    // const searchArtists = async (e) => {
    //   e.preventDefault()
    //   const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //       headers: {
    //           Authorization: `Bearer ${token}`
    //       },
    //       params: {
    //           q: searchKey,
    //           type: "artist"
    //       }
    //   })
  
    //   setArtists(data.artists.items)
    // }

    // const searchTracks = async (e) => {
    //     e.preventDefault()
    //     const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: searchKey,
    //             type: "track"
    //         }
    //     })
    
    //     setTracks(data.tracks.items)
    //   }
  
    // const renderArtists = () => {
    //   return artists.map(artist => (
    //       <div key={artist.id}>
    //           {artist.images.length ? <img width={"5%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
    //           {artist.name}
    //       </div>
    //   ))
    // }
  
    return (
        <div className="App" >
            <header className="App-header">
                <h1>Spotify Song Sampler</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
                    
                    {/* <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>
                    {renderArtists()} */}
            </header>
        </div>
    );
}

