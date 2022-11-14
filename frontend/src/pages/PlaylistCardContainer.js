import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaylistCardContainer = () => {
  const [playlists, setPlaylists] = useState([]);

  const getPlaylists = () => {
    const url = "http://localhost:5000/api/playlists";

    axios
      .get(url)
      .then((res) => setPlaylists(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h3 className="heading">Playlists</h3>
      <div className="container-fluid container-scroll">
        <div className="row">
          {playlists.map((playlist) => {
            return (
              <div className="col p-0" key={playlist._id}>
                <div className="card">
                  <div
                    className="card-body"
                    onClick={() => navigate(`/playlist/${playlist._id}`)}
                  >
                    <img
                      src={playlist.coverUrl}
                      className="card-cover mb-2"
                      alt="..."
                    />
                    <h5 className="card-title">{playlist.name}</h5>
                    <p className="card-text">{playlist.description}</p>
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

export default PlaylistCardContainer;
