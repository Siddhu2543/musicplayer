import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlayButton from "../components/PlayButton";

const Playlist = ({ user, setUser }) => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);

  const getPlaylist = () => {
    const url = "http://localhost:5000/api/playlists/" + playlistId;
    const url1 = "http://localhost:5000/api/tracks/";
    axios
      .get(url)
      .then((res) => {
        setPlaylist(res.data);
        const tracksRes = res.data.tracks;
        tracksRes.forEach((trackId) => {
          axios
            .get(url1 + trackId)
            .then((res1) => setTracks((prev) => [...prev, res1.data]));
        });
      })
      .catch((err) => console.error(err));
  };

  const handleClick = () => {
    setUser((prev) => {
      return { ...prev, lastQueue: playlistId };
    });
  };

  useEffect(() => {
    setTracks([]);
    getPlaylist();
  }, []);
  if (playlist) {
    return (
      <div className="home">
        <div className="main">
          <div className="heading-playlist">
            <div className="row">
              <div className="col-auto">
                <img
                  src={playlist.coverUrl}
                  height="260px"
                  width="260px"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col align-self-center">
                <h6 className="display-6">PLAYLIST</h6>
                <h1 className="display-3">{playlist.name.toUpperCase()}</h1>
                <h3 className="display-6">{playlist.description}</h3>
              </div>
              <div className="col-auto align-self-center p-md-5">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  size="10x"
                  title="Play This Playlist"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="container-fluid container-scroll">
            <table class="table">
              <thead class="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Song</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track) => {
                  return (
                    <tr key={track._id} className="text-white">
                      <th scope="col"></th>
                      <td scope="col">
                        <Link className="track-link" to={`/track/${track._id}`}>
                          {track.songName}
                        </Link>
                      </td>
                      <td scope="col">{track.songLen}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home">
        <div className="main">
          <div className="heading-playlist">Playlist</div>
        </div>
      </div>
    );
  }
};

export default Playlist;
