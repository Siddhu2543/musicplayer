import { useEffect } from "react";

const PlayingSongDetails = (props) => {
  useEffect(() => {}, [props]);
  const mapArtist = (artist) => (
    <a href="" key={artist}>
      {artist}
    </a>
  );

  if (!props.song) {
    return (
      <div className="text-center">
        <h6>No Queue Detected!</h6>
      </div>
    );
  }
  return (
    <div className="d-flex flex-row">
      <div className="p-2">
        <img
          title="Cover"
          className="player-cover"
          src={props.song.songCover}
          height="55px"
          width="55px"
        />
      </div>
      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        className="player-song-details p-2 d-flex flex-column"
      >
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="player-song-name"
        >
          <a href="">{props.song.songName}</a>
        </div>
        {/* <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="player-song-artists"
        >
          {props.song.artists.map(mapArtist)}
        </div> */}
      </div>
    </div>
  );
};

export default PlayingSongDetails;
