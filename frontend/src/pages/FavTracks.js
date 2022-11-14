import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FavTracks = ({ favTracks }) => {
  const [favTracksData, setFavTracksData] = useState([]);

  const getFavTracks = () => {
    const url = "http://localhost:5000/api/tracks/";
    favTracks.forEach((trackId) => {
      axios
        .get(url + trackId)
        .then((res) => {
          let flag = false;
          favTracksData.forEach((element) => {
            if (element._id === res.data._id) {
              flag = true;
              console.log("true");
            }
          });
          if (!flag) {
            setFavTracksData((prev) =>
              Array.from(new Set([...prev, res.data]))
            );
          }
        })
        .catch((err) => console.error(err));
    });
  };

  useEffect(() => {
    getFavTracks();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h3 className="heading">Favourite Playlists</h3>
      <div className="container-fluid container-scroll">
        {favTracksData.length === 0 ? (
          <p>No Favourite Playlist Yet!!</p>
        ) : (
          <div className="row">
            {favTracksData.map((playlist) => {
              return (
                <div className="col-2 p-0 m-2" key={playlist._id}>
                  <div className="card">
                    <div
                      className="card-body"
                      onClick={() => navigate(`/playlist/${playlist._id}`)}
                    >
                      <img
                        src={playlist.songCover}
                        className="card-cover mb-2"
                        alt="..."
                      />
                      <h5 className="card-title">{playlist.songName}</h5>
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

export default FavTracks;
