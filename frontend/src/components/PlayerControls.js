import { Row, Col, Button } from "react-bootstrap";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import PreviousSongButton from "./PreviousSongButton";
import NextSongButton from "./NextSongButton";
import ShuffleButton from "./ShuffleButton";
import LoopButton from "./LoopButton";
import SongProgress from "./SongProgress";
import { useEffect, useState } from "react";

const PlayerControls = (props) => {
  const [loopType, setLoopType] = useState(0);
  const [elapsed, setElapsed] = useState(props.elapsed);

  const handleLoopButtonClick = () => {
    setLoopType((prev) => (prev = (prev + 1) % 3));
  };

  useEffect(() => {
    setElapsed(props.elapsed);
  }, [props]);

  return (
    <Row>
      <Col xs={12}>
        <div className="d-flex flex-row justify-content-center">
          <div className="p-2 align-self-center">
            <span onClick={props.handleShuffle}>
              <ShuffleButton />
            </span>
          </div>
          <div className="p-2 align-self-center">
            <span onClick={props.handlePrev}>
              <PreviousSongButton />
            </span>
          </div>
          <div className="p-2 align-self-center">
            <span onClick={props.onPlayControlButtonClick}>
              {!props.playing ? <PlayButton /> : <PauseButton />}
            </span>
          </div>
          <div className="p-2 align-self-center">
            <span onClick={props.handleNext}>
              <NextSongButton />
            </span>
          </div>
          <div className="p-2 align-self-center">
            <span onClick={handleLoopButtonClick}>
              <LoopButton loopType={loopType} />
            </span>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <SongProgress duration={props.duration} elapsed={props.elapsed} />
      </Col>
    </Row>
  );
};

export default PlayerControls;
