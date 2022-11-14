import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signin = ({ user, setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();
  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "" || password === "") {
      setError("Please enter your name and password");
      return;
    }

    const url = "http://localhost:5000/api/users/signin";
    axios
      .post(url, { userName: userName, password: password })
      .then((res) => {
        if (res.data === null) {
          setError("Invalid Log In Credentials!");
        } else if (res.data.message) {
          setError(res.data.message);
        } else {
          setUser(res.data);
          setError(null);
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="home">
      <div className="main">
        <h1>Sign In</h1>
        <hr />
        {error && (
          <>
            <span className="text-danger">{error}</span>
            <hr />
          </>
        )}
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              onChange={handleUserName}
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handlePassword}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Sign In
            </button>
          </div>
          <div className="col-12">
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
