import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const url = "http://localhost:5000/api/users/";

const Home = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await axios.get(url);
    const result = await res.data;
    setUsers(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h2>Home</h2>
        </Col>
        <Col>
          <h2>Search</h2>
        </Col>
        <Col>
          <h2>Collection</h2>
        </Col>
      </Row>
      <h1> Project Started Hello </h1>
      {users.map((u) => (
        <h4 key={u._id}>userName : {u.userName}</h4>
      ))}

      <button className="btn btn-primary">Bootstrap button</button>
    </Container>
  );
};
export default Home;
