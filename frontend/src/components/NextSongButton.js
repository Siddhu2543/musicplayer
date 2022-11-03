import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";

const NextSongButton = () => {
  return (
    <FontAwesomeIcon
      className="control-button"
      icon={faForwardStep}
      size="lg"
      title="Next"
    />
  );
};

export default NextSongButton;
