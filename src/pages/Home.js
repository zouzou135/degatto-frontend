import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "../styles/Home.css";
import logo from "../images/degatto-logo.png";
import { Link } from "react-router-dom";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
registerPlugin(FilePondPluginFileValidateType);

function Home(props) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const processData = (event) => {
    event.preventDefault();
    console.log("here");
    let url = "http://localhost:3001/process-data";

    setIsLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   username: userName,
      // }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        navigate("/charts");
      })
      .catch((error) => {
        alert("Failed to Process.");
      });
  };

  return (
    <div className="App bg-img">
      <div className="menu-container">
        <Link className="menu-item" to="/info">
          Tool Information
        </Link>
      </div>
      <div className="bg-img">
        <form onSubmit={processData} method="POST" className="center">
          <div className="logo-container">
            <img className="degatto-logo" src={logo} />
            <h3 className="project-title">DeGatto</h3>
          </div>
          <div className="flex-center">
            <div className="upload-area-container">
              <FilePond
                required
                files={file}
                allowMultiple={false}
                credits=""
                maxFiles={3}
                server="/api"
                acceptedFileTypes={[
                  "application/vnd.ms-excel",
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  "text/csv",
                ]}
                name="files" /* sets the file input name, it's filepond by default */
                // onupdatefiles={(fileItems) => {
                //   // Set currently active file objects to this.state
                //   this.setState({
                //     files: fileItems.map((fileItem) => fileItem.file),
                //   });
                // }}
              />

              <span className="file-alert">You have to choose a file</span>
            </div>

            <div>
              <div class="moon">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png"
                  className={"loader" + " " + (isLoading ? "active" : "")}
                />
                {/* <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> */}
              </div>
              <input
                type="submit"
                value="Process"
                className={"primary-button" + " " + (isLoading ? "hidden" : "")}
                onClick={processData}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
