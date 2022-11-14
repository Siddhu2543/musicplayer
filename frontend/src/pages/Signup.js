import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signup = ({ user, setUser }) => {
  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [cpassword, setCpassword] = useState();

  const [error, setError] = useState();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerUrl = "http://localhost:5000/api/users/register";
    const userUrl = "http://localhost:5000/api/users/";

    if (userData.password !== cpassword) {
      setError("Password and Confirm Password have to be same!");
      return;
    }
    axios.post(registerUrl, userData).then((response) => {
      const result = response.data;
      if (!result.message) {
        axios.get(userUrl + result.insertedId).then((userJson) => {
          setUser(userJson.data);
        });
        navigate("/");
      } else {
        setError(result.message);
      }
    });
  };

  const handleName = (e) => {
    setUserData((user) => {
      return { ...user, name: e.target.value };
    });
  };

  const handleEmail = (e) => {
    setUserData((user) => {
      return { ...user, email: e.target.value };
    });
  };

  const handleUserName = (e) => {
    setUserData((user) => {
      return { ...user, userName: e.target.value };
    });
  };

  const handlePassword = (e) => {
    setUserData((user) => {
      return { ...user, password: e.target.value };
    });
  };

  const handleCPassword = (e) => {
    setCpassword(e.target.value);
  };

  return (
    <div className="home">
      <div className="main">
        <h1>Create an Account</h1>
        <hr />
        {error && (
          <>
            <span className="text-danger">{error}</span>
            <hr />
          </>
        )}
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleName}
            />
          </div>
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={handleEmail}
            />
          </div>
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              id="cpassword"
              onChange={handleCPassword}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <div className="col-12">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
