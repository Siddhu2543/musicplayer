import VolumeHighButton from "./VolumeHighButton";
import VolumeLowButton from "./VolumeLowButton";
import VolumeOffButton from "./VolumeOffButton";
import VolumeMuteButton from "./VolumeMuteButton";
import LyricsOffButton from "./LyricsOffButton";
import LyricsOnButton from "./LyricsOnButton";
import QueueButton from "./QueueButton";
import { useState } from "react";

const ExtraControls = () => {
  const [queue, setQueue] = useState(false);
  const [cc, setCC] = useState(false);
  const [volume, setVolume] = useState(0.75);

  const handleQueueButtonClick = () => {
    // show Queue Container
  };

  const handleCCButtonClick = () => {
    setCC((cc) => !cc);
  };

  const handleMuteButtonClick = () => {
    if (volume != -1) setVolume(() => -1);
    else setVolume(() => 0.75);
  };
  return (
    <div className="d-flex flex-row justify-content-end">
      <div className="p-2 align-self-center">
        <span onClick={handleQueueButtonClick}>
          <QueueButton />
        </span>
      </div>
      <div onClick={handleCCButtonClick} className="p-2 align-self-center">
        <span>{!cc ? <LyricsOnButton /> : <LyricsOffButton />}</span>
      </div>
      <div className="p-2 align-self-center">
        <span onClick={handleMuteButtonClick}>
          {volume != -1 ? (
            volume >= 0.5 ? (
              <VolumeHighButton />
            ) : (
              <VolumeLowButton />
            )
          ) : (
            <VolumeMuteButton />
          )}
        </span>
      </div>
    </div>
  );
};

export default ExtraControls;
