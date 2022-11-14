import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ArtistsCardContainer = () => {
  const [artists, setArtists] = useState([]);

  const getArtists = () => {
    const url = "http://localhost:5000/api/artists";

    axios
      .get(url)
      .then((res) => setArtists(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getArtists();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <h3 className="heading">Top Artists</h3>
      <div className="container-fluid container-scroll">
        <div className="row columns-16">
          {artists.map((artist) => {
            return (
              <div className="col p-0" key={artist._id}>
                <div className="card">
                  <div
                    className="card-body"
                    onClick={() => navigate(`/artist/${artist._id}`)}
                  >
                    <img
                      src={artist.coverUrl}
                      className="card-cover mb-2"
                      alt="..."
                    />
                    <h5 className="card-title">{artist.name}</h5>
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

export default ArtistsCardContainer;
