import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const ShuffleButton = () => {
  return (
    <FontAwesomeIcon
      className="control-button"
      icon={faShuffle}
      title="Shuffle"
    />
  );
};

export default ShuffleButton;
