import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlaylistCardContainer from "./PlaylistCardContainer";
import TracksCardContainer from "./TracksCardContainer";
import ArtistsCardContainer from "./ArtistsCardContainer";

const url = "http://localhost:5000/api/users/";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <PlaylistCardContainer />
        <TracksCardContainer />
        <ArtistsCardContainer />
      </div>
    </div>
  );
};
export default Home;
