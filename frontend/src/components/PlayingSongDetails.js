const PlayingSongDetails = (props) => {
  const mapArtist = (artist) => (
    <a href="" key={artist}>
      {artist}
    </a>
  );
  return (
    <div className="d-flex flex-row">
      <div className="p-2">
        <img
          title="Cover"
          className="player-cover"
          src={props.song.coverUrl}
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
          <a href="">{props.song.name}</a>
        </div>
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="player-song-artists"
        >
          {props.song.artists.map(mapArtist)}
        </div>
      </div>
    </div>
  );
};

export default PlayingSongDetails;
