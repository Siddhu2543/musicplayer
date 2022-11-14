import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PlayingSongDetails from "./PlayingSongDetails";
import PlayerControls from "./PlayerControls";
import ExtraControls from "./ExtraControls";
import LyricsContainer from "./LyricsContainer";
import axios from "axios";

const Playerbar = ({ lastQueue }) => {
  const [tracks, setTracks] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [ind, setInd] = useState(0);
  const [song, setSong] = useState(null);
  const [elapsed, setElapsed] = useState(0);

  const getDuration = (duration) => {
    let mins = parseInt(duration.substring(0, 2)) * 60;
    let secs = parseInt(duration.substring(3));
    let result = mins + secs;
    return result;
  };

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

  const handlePlay = () => {
    !playing
      ? handlePlayButtonClick(setPlaying)
      : handlePauseButtonClick(setPlaying);
  };

  const handlePlayButtonClick = (setPlaying) => {
    var elem = document.querySelector("audio");
    elem.play();
    console.log("play button click");
    setPlaying(() => true);
  };

  const handlePauseButtonClick = (setPlaying) => {
    var elem = document.querySelector("audio");
    elem.pause();
    console.log("pause button click");
    setPlaying(() => false);
  };

  const handleTimeChange = () => {
    var elem = document.querySelector("audio");
    setElapsed(Math.floor(elem.currentTime));
  };

  const handlePrev = () => {
    setInd((ind) => (ind - 1) % tracks.length);
  };

  const handleNext = () => {
    setInd((ind) => (ind + 1) % tracks.length);
  };

  const handleSongEnd = () => {
    setInd((ind) => ind + 1);
  };

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const handleShuffle = () => {
    setTracks((prev) => shuffleArray(prev));
  };

  document.addEventListener("keydown", (event) => {
    if (event.target != document.querySelector("body")) return;
    event.stopImmediatePropagation();
    const audio = document.querySelector("audio");
    if (event.key === " ") {
      if (audio.paused == false) {
        console.log("pause");
        audio.pause();
      } else {
        console.log("play");
        audio.play();
      }
    } else if (event.key === "ArrowLeft") {
      if (audio.currentTime <= 10) audio.currentTime = 0;
      else audio.currentTime -= 10;
    } else if (event.key === "ArrowRight") {
      if (audio.currentTime >= audio.duration - 10)
        audio.currentTime = audio.duration;
      else audio.currentTime += 10;
    }
  });

  useEffect(() => {
    setSong(tracks[ind]);
    console.log(tracks[ind]);
  }, [ind, tracks]);

  useEffect(() => {
    setTracks([]);
    startQueue();
    setInd(0);
    // console.log(tracks.length);
  }, [lastQueue]);

  useEffect(() => {
    console.log(tracks.length);
  });

  return (
    <>
      <LyricsContainer track={song} />
      {song && (
        <audio
          id="audio-player"
          controls={false}
          src={song.songUrl}
          onTimeUpdate={handleTimeChange}
          onEnded={handleSongEnd}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          autoPlay={true}
        />
      )}
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
            {song ? (
              <PlayerControls
                onPlayControlButtonClick={handlePlay}
                playing={playing}
                duration={getDuration(song.songLen)}
                elapsed={elapsed}
                handleNext={handleNext}
                handlePrev={handlePrev}
                handleShuffle={handleShuffle}
              />
            ) : (
              <PlayerControls
                onPlayControlButtonClick={handlePlay}
                playing={playing}
                duration={getDuration("00:00")}
                elapsed={elapsed}
              />
            )}
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
    </>
  );
};

export default Playerbar;
