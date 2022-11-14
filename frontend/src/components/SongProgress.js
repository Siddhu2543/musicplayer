import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import SeekSlider from "./SeekSlider";

const SongProgress = (props) => {
  const [duration, setDuration] = useState(props.duration);
  const [elapsed, setElapsed] = useState(props.elapsed);

  const handleSeek = () => {
    const slider = document.getElementById("slider");
    setElapsed(() => slider.value);
    const audio = document.querySelector("audio");
    audio.currentTime = slider.value;
  };

  const getFullDurationInString = () => {
    const mins = Math.floor(duration / 60);
    const secs = duration - mins * 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const getDurationInString = () => {
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed - mins * 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    setElapsed(props.elapsed);
    setDuration(props.duration);
  }, [props]);

  return (
    <Row className="duration-bar">
      <Col className="align-self-center text-center duration" xs="2">
        {getDurationInString()}
      </Col>
      <Col className="align-self-center  text-center" xs="8">
        <SeekSlider
          duration={duration}
          elapsed={elapsed}
          onSeekTime={handleSeek}
        />
      </Col>
      <Col className="align-self-center text-center duration" xs="2">
        {getFullDurationInString()}
      </Col>
    </Row>
  );
};

export default SongProgress;
