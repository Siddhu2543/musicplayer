import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Signout;
