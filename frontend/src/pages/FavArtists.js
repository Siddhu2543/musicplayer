import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FavArtist = ({ favArtists }) => {
  const [favArtistsData, setFavArtistsData] = useState([]);

  const getFavArtists = () => {
    const url = "http://localhost:5000/api/artists/";
    favArtists.forEach((artistId) => {
      axios
        .get(url + artistId)
        .then((res) => {
          let flag = false;
          favArtistsData.forEach((element) => {
            if (element._id === res.data._id) {
              flag = true;
              console.log("true");
            }
          });
          if (!flag) {
            setFavArtistsData((prev) =>
              Array.from(new Set([...prev, res.data]))
            );
          }
        })
        .catch((err) => console.error(err));
    });
  };

  useEffect(() => {
    getFavArtists();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h3 className="heading">Favourite Playlists</h3>
      <div className="container-fluid container-scroll">
        {favArtistsData.length === 0 ? (
          <p>No Favourite Playlist Yet!!</p>
        ) : (
          <div className="row">
            {favArtistsData.map((playlist) => {
              return (
                <div className="col p-0 pb-3" key={playlist._id}>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FavArtist;
