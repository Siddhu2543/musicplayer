import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import SharedLayoutCollection from "./pages/SharedLayoutCollection";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<h1>Search</h1>} />
          <Route path="collection" element={<SharedLayoutCollection />}>
            <Route index element={<h1>Collection</h1>} />
            <Route path="playlists" element={<h1>Collection/Playlists</h1>} />
            <Route path="artists" element={<h1>Collection/Artists</h1>} />
            <Route path="albums" element={<h1>Collection/Albums</h1>} />
            <Route path="tracks" element={<h1>Collection/Tracks</h1>} />
          </Route>
          <Route path="playlist">
            <Route index element={<h1>Playlist</h1>} />
            <Route path=":playlistId" element={<h1>Playlist/:playlistId</h1>} />
          </Route>
          <Route path="album">
            <Route index element={<h1>Album</h1>} />
            <Route path=":albumId" element={<h1>Album/:albumId</h1>} />
          </Route>
          <Route path="track">
            <Route index element={<h1>Track</h1>} />
            <Route path=":trackId" element={<h1>Track/:trackId</h1>} />
          </Route>
          <Route path="artist">
            <Route index element={<h1>Artist</h1>} />
            <Route path=":artistId" element={<h1>Artist/:artistId</h1>} />
          </Route>
          <Route path="genre">
            <Route index element={<h1>Genre</h1>} />
            <Route path=":genreId" element={<h1>Genre/:genreId</h1>} />
          </Route>
          <Route path="lyrics" element={<h1>Lyrics</h1>} />
          <Route path="queue" element={<h1>Queue</h1>} />
          <Route path="user">
            <Route index element={<h1>User</h1>} />
            <Route path=":userId" element={<h1>User/:userId</h1>} />
          </Route>
          <Route path="preferences" element={<h1>Settings</h1>} />
          <Route path="signup" element={<h1>Sign Up</h1>} />
          <Route path="signin" element={<h1>Sign In</h1>} />
          <Route path="signout" element={<h1>Sign Out</h1>} />
          <Route path="top-playlists" element={<h1>Top Playlists</h1>} />
          <Route path="top-tracks" element={<h1>Most Liked Songs</h1>} />
          <Route path="history" element={<h1>History</h1>} />
          <Route path="*" element={<h1>404 - Page not found!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
