import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

const VolumeOffButton = () => {
  return <FontAwesomeIcon icon={faVolumeOff} size="2xl" title="Mute" />;
};

export default VolumeOffButton;
