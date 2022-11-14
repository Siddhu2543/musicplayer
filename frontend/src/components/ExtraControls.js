import VolumeHighButton from "./VolumeHighButton";
import VolumeLowButton from "./VolumeLowButton";
import VolumeOffButton from "./VolumeOffButton";
import VolumeMuteButton from "./VolumeMuteButton";
import LyricsOffButton from "./LyricsOffButton";
import LyricsOnButton from "./LyricsOnButton";
import QueueButton from "./QueueButton";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ExtraControls = () => {
  const [queue, setQueue] = useState(false);
  const [cc, setCC] = useState(false);
  const [volume, setVolume] = useState(0.75);

  const handleQueueButtonClick = () => {
    if (queue) setQueue(false);
    else setQueue(true);
  };

  const handleCCButtonClick = () => {
    const lyrics = document.querySelector("#lyrics");

    if (cc) setCC(false);
    else setCC(true);

    if (!cc) lyrics.classList.remove("d-none");
    else lyrics.classList.add("d-none");
  };

  const handleVolumeChange = () => {
    const vol = document.querySelector(".volume-slider");
    setVolume(vol.value);
    const audio = document.querySelector("audio");
    audio.volume = vol.value;
  };

  const handleMuteButtonClick = () => {
    const vol = document.querySelector(".volume-slider");
    const audio = document.querySelector("audio");

    if (volume != -1) {
      setVolume(() => -1);
      vol.disabled = true;
      audio.muted = true;
    } else {
      setVolume(() => 0.75);
      vol.disabled = false;
      audio.muted = false;
      audio.volume = 0.75;
    }
  };

  useEffect(() => {
    setQueue(false);
  }, [queue, volume]);

  return (
    <div className="d-flex flex-row justify-content-end">
      {queue && <Navigate to={"/queue"} />}
      <div className="p-2 align-self-center">
        <span onClick={handleQueueButtonClick}>
          <QueueButton />
        </span>
      </div>
      <div onClick={handleCCButtonClick} className="p-2 align-self-center">
        <span>{!cc ? <LyricsOnButton /> : <LyricsOffButton />}</span>
      </div>
      <div className="p-2 align-self-center">
        <InputGroup>
          <Form.Range
            className="volume-slider"
            value={volume}
            step="any"
            onChange={handleVolumeChange}
            min="0"
            max="1"
          />
          <InputGroup.Text id="basic-addon1" onClick={handleMuteButtonClick}>
            {volume != -1 ? (
              volume != 0 ? (
                volume >= 0.5 ? (
                  <VolumeHighButton />
                ) : (
                  <VolumeLowButton />
                )
              ) : (
                <VolumeOffButton />
              )
            ) : (
              <VolumeMuteButton />
            )}
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

export default ExtraControls;
