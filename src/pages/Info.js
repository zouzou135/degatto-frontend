import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Info.css";

function Info(props) {
  const navigate = useNavigate();

  const goHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="App">
      <div className="center-horizontal-container">
        <button className="primary-button mt-3" onClick={goHome}>
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>
    </div>
  );
}

export default Info;
