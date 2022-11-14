import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlaylistCardContainer from "./PlaylistCardContainer";
import TracksCardContainer from "./TracksCardContainer";
import ArtistsCardContainer from "./ArtistsCardContainer";

const History = () => {
  return (
    <div className="home">
      <div className="main">
        <h1>History</h1>
      </div>
    </div>
  );
};
export default History;
