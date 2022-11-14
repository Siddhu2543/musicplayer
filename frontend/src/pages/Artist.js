import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Artist = ({ user, setUser }) => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);

  const getArtist = () => {
    const url = "http://localhost:5000/api/artists/" + artistId;
    const url1 = "http://localhost:5000/api/tracks/";
    axios
      .get(url)
      .then((res) => {
        setArtist(res.data);
        const tracksRes = res.data.tracks;
        tracksRes.forEach((trackId) => {
          axios
            .get(url1 + trackId)
            .then((res1) => setTracks((prev) => [...prev, res1.data]));
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setTracks([]);
    getArtist();
  }, []);
  if (artist) {
    return (
      <div className="home">
        <div className="main">
          <div className="heading-playlist">
            <div className="row">
              <div className="col-auto">
                <img
                  src={artist.coverUrl}
                  height="260px"
                  width="260px"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col align-self-center">
                <h6 className="display-6">ARTIST</h6>
                <h1 className="display-3">{artist.name.toUpperCase()}</h1>
              </div>
              <div className="col-auto align-self-center p-md-5">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  size="10x"
                  title="Play This Artist"
                />
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
          <div className="heading-playlist">Artist</div>
        </div>
      </div>
    );
  }
};

export default Artist;
