import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

const VolumeLowButton = () => {
  return <FontAwesomeIcon icon={faVolumeLow} size="sm" title="Mute" />;
};

export default VolumeLowButton;
