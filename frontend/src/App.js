import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SharedLayout from "./pages/SharedLayout";
import SharedLayoutCollection from "./pages/SharedLayoutCollection";
import FavPlaylists from "./pages/FavPlaylists";
import FavArtists from "./pages/FavArtists";
import FavTracks from "./pages/FavTracks";
import History from "./pages/History";
import Playlist from "./pages/Playlist";
import Track from "./pages/Track";
import Artist from "./pages/Artist";
import User from "./pages/User";
import TopPlaylists from "./pages/TopPlaylists";
import TopTracks from "./pages/TopTracks";
import Error from "./pages/Error";
import Queue from "./pages/Queue";
import Settings from "./pages/Settings";
import ProtectedRoute from "./pages/ProtectedRoute";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Signout from "./pages/Signout";
import AllTracks from "./pages/AllTracks";

const setUserLocally = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUserLocally = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const App = () => {
  const [user, setUser] = useState(getUserLocally());

  useEffect(() => {
    setUserLocally(user);
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout user={user} />}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <Home user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="search"
            element={
              <ProtectedRoute user={user}>
                <Search user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="collection"
            element={
              <ProtectedRoute user={user}>
                <SharedLayoutCollection user={user} />
              </ProtectedRoute>
            }
          >
            {user && (
              <>
                <Route
                  path="playlists"
                  element={<FavPlaylists favPlaylists={user.favPlaylists} />}
                />
                <Route
                  path="artists"
                  element={<FavArtists favArtists={user.favArtists} />}
                />
                <Route
                  path="tracks"
                  element={<FavTracks favTracks={user.favSongs} />}
                />
              </>
            )}
          </Route>
          <Route
            path="playlist/:playlistId"
            element={
              <ProtectedRoute user={user}>
                <Playlist user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="artist/:artistId"
            element={
              <ProtectedRoute user={user}>
                <Artist user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="track/:trackId"
            element={
              <ProtectedRoute user={user}>
                <Track user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="tracks"
            element={
              <ProtectedRoute user={user}>
                <AllTracks user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="user"
            element={
              <ProtectedRoute user={user}>
                <User user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="top-playlists"
            element={
              <ProtectedRoute user={user}>
                <TopPlaylists user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="top-tracks"
            element={
              <ProtectedRoute user={user}>
                <TopTracks user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="history"
            element={
              <ProtectedRoute user={user}>
                <History user={user} />
              </ProtectedRoute>
            }
          />
          {user && (
            <Route
              path="queue"
              element={
                <ProtectedRoute user={user}>
                  <Queue lastQueue={user.lastQueue} />
                </ProtectedRoute>
              }
            />
          )}
          <Route
            path="preferences"
            element={
              <ProtectedRoute user={user}>
                <Settings user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="signup"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route
            path="signin"
            element={<Signin user={user} setUser={setUser} />}
          />
          <Route
            path="signout"
            element={
              <ProtectedRoute user={user}>
                <Signout setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
