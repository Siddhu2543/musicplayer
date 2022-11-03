import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const VolumeMuteButton = () => {
  return <FontAwesomeIcon icon={faVolumeXmark} size="sm" title="Unmute" />;
};

export default VolumeMuteButton;
