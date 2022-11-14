import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTracks = () => {
  const [tracks, setTracks] = useState([]);

  const getTracks = () => {
    const url = "http://localhost:5000/api/tracks/all";
    axios
      .get(url)
      .then((res) => setTracks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTracks();
  });

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="main">
        <h3>All Songs</h3>
        <div className="row">
          {tracks.map((track) => {
            return (
              <div className="col-2 p-0 pb-3" key={track._id}>
                <div className="card">
                  <div
                    className="card-body"
                    onClick={() => navigate(`/track/${track._id}`)}
                  >
                    <img
                      src={track.songCover}
                      className="card-cover mb-2"
                      alt="..."
                    />
                    <h5 className="card-title">{track.songName}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTracks;
