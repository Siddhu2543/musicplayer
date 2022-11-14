import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AccountDropdown from "./AccountDropdown";

const TopBar = ({ StackProvider }) => {
  const [stack_back, stack_for, user] = useContext(StackProvider);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [link, setLink] = useState();

  const handleBack = () => {
    if (!stack_back.isEmpty()) {
      stack_for.push(window.location.pathname);
      console.log(stack_for.print());
      var link = stack_back.pop();
      stack_back.pop();
      setLink(link);
      setShouldNavigate(true);
    }
  };
  const handleForward = () => {
    if (!stack_for.isEmpty()) {
      stack_back.push(window.location.pathname);
      stack_back.push(window.location.pathname);
      console.log(stack_back.print());
      var link = stack_for.pop();
      setLink(link);
      setShouldNavigate(true);
    }
  };

  useEffect(() => {
    setShouldNavigate(false);
  }, [shouldNavigate]);

  return (
    <div className="fixed-top">
      {shouldNavigate ? <Navigate to={link} /> : null}
      <Row style={{ height: "100%" }}>
        <Col className="align-self-center" sm="9">
          <span className="me-3" onClick={handleBack}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              size={"xl"}
              title="Go Back"
            />
          </span>
          <span onClick={handleForward}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              size={"xl"}
              title="Go Forward"
            />
          </span>
        </Col>
        <Col className="align-self-center text-end" sm="3">
          <AccountDropdown user={user} />
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;
