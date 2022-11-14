import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlayButton from "../components/PlayButton";

const Track = ({ user, setUser }) => {
  const { trackId } = useParams();
  const [track, setTrack] = useState();

  const getPlaylist = () => {
    const url = "http://localhost:5000/api/tracks/" + trackId;
    axios
      .get(url)
      .then((res) => {
        setTrack(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPlaylist();
  }, []);
  if (track) {
    return (
      <div className="home">
        <div className="main">
          <div className="heading-playlist">
            <div className="row">
              <div className="col-auto">
                <img
                  src={track.songCover}
                  height="260px"
                  width="260px"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col align-self-center">
                <h6 className="display-6">SONG</h6>
                <h1 className="display-3">{track.songName.toUpperCase()}</h1>
              </div>
            </div>
          </div>
          <div className="container-fluid container-scroll">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Song</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr key={track._id} className="text-white">
                  <th scope="col"></th>
                  <td scope="col">
                    <Link className="track-link" to={`/track/${track._id}`}>
                      {track.songName}
                    </Link>
                  </td>
                  <td scope="col">{track.songLen}</td>
                </tr>
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

export default Track;
