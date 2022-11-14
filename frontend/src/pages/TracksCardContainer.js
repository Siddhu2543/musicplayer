import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TracksCardContainer = () => {
  const [tracks, setTracks] = useState([]);

  const getTracks = () => {
    const url = "http://localhost:5000/api/tracks";

    axios
      .get(url)
      .then((res) => setTracks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTracks();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Link to="/tracks">
        <h3 className="heading">Songs</h3>
      </Link>
      <div className="container-fluid container-scroll">
        <div className="row columns-16">
          {tracks.map((track) => {
            return (
              <div className="col p-0" key={track._id}>
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
    </>
  );
};

export default TracksCardContainer;
