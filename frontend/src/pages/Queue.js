import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Queue = ({ lastQueue }) => {
  const [tracks, setTracks] = useState([]);

  const startQueue = () => {
    if (lastQueue === "") return;
    const url = "http://localhost:5000/api/playlists/" + lastQueue;
    const url1 = "http://localhost:5000/api/tracks/";
    axios
      .get(url)
      .then((res) => {
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
    startQueue();
    localStorage.setItem("tracks", JSON.stringify(tracks));
    localStorage.setItem("currentIndex", JSON.stringify(0));
  }, [lastQueue]);

  if (lastQueue === "") {
    return (
      <div className="home">
        <div className="main">
          <h1>Queue</h1>
          <p>You have no queue yet</p>
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="main">
        <h1>Queue</h1>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Song</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, i) => {
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
  );
};

export default Queue;
