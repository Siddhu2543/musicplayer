import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

const VolumeOffButton = () => {
  return <FontAwesomeIcon icon={faVolumeOff} size="sm" title="Mute" />;
};

export default VolumeOffButton;
