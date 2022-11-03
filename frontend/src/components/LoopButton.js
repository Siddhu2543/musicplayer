import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const LoopButton = (props) => {
  if (props.loopType === 0)
    return (
      <FontAwesomeIcon
        className="control-button"
        icon={faRepeat}
        title="Turn on Repeat"
      />
    );
  else if (props.loopType === 1)
    return <FontAwesomeIcon icon={faRepeat} title="Repeat One" />;
  else if (props.loopType === 2)
    return (
      <i className="material-icons custom" title="Turn off Repeat">
        repeat_one
      </i>
    );
};

export default LoopButton;
