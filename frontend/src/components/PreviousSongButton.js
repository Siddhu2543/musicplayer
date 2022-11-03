import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";

const PreviousSongButton = () => {
  return (
    <FontAwesomeIcon
      className="control-button"
      icon={faBackwardStep}
      size="lg"
      title="Previous"
    />
  );
};

export default PreviousSongButton;
