import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PlayingSongDetails from "./PlayingSongDetails";
import PlayerControls from "./PlayerControls";
import ExtraControls from "./ExtraControls";

const Playerbar = () => {
  const [playing, setPlaying] = useState(false);
  const [song, setSong] = useState({
    name: "Jugnu - Badshah",
    artists: ["Badshah"],
    coverUrl: "covers/Jugnu - Badshah.jpg",
    songUrl: "songs/Jugnu - Badshah.mp3",
    songLen: "03:50",
  });

  const getDuration = (duration) => {
    let mins = parseInt(duration.substring(0, 2)) * 60;
    let secs = parseInt(duration.substring(3));
    let result = mins + secs;
    return result;
  };

  const handlePlay = () => {
    !playing
      ? handlePlayButtonClick(setPlaying)
      : handlePauseButtonClick(setPlaying);
  };

  const handlePlayButtonClick = (setPlaying) => {
    // var elem = document.querySelector("audio");
    // elem.play();
    console.log("play button click");
    setPlaying(() => true);
  };

  const handlePauseButtonClick = (setPlaying) => {
    // var elem = document.querySelector("audio");
    // elem.pause();
    console.log("pause button click");
    setPlaying(() => false);
  };

  return (
    <div className="position-fixed bottom-0">
      <Row style={{ height: "100%" }}>
        <Col
          xs="3"
          className="align-self-center"
          style={{
            padding: "0 30px",
            textAlign: "start",
          }}
        >
          <PlayingSongDetails song={song} />
        </Col>
        <Col
          xs="6"
          className="align-self-center"
          style={{
            textAlign: "center",
            zIndex: "2000",
          }}
        >
          <PlayerControls
            onPlayControlButtonClick={handlePlay}
            playing={playing}
            duration={getDuration(song.songLen)}
          />
        </Col>
        <Col
          xs="3"
          className="align-self-center"
          style={{
            padding: "0 30px",
            textAlign: "end",
            zIndex: "2000",
          }}
        >
          <ExtraControls />
        </Col>
      </Row>
    </div>
  );
};

export default Playerbar;

/* <div class="audio-player">
      <div class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="audio-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
        </svg>
        <audio src={url} id="audio"></audio>
      </div>
      <div class="controls">
        <button class="player-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#3D3132"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div> */
