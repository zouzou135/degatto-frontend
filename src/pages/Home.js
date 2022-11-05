import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "../styles/Home.css";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

function Home(props) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const processData = (event) => {
    event.preventDefault();
    console.log("here");
    let url = "http://localhost:3001/registerFacebook";

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: userName,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    // console.log(responseText);
    // alert(responseJson.result);
    // alert(responseJson.result.insertId);
    navigate("/charts");
    // })
    // .catch((error) => {
    //   alert("Failed to Process.");
    // });
  };

  return (
    <div className="App">
      <form onSubmit={processData} method="POST" className="center">
        <FilePond
          required
          files={file}
          allowMultiple={false}
          credits=""
          maxFiles={3}
          server="/api"
          name="files" /* sets the file input name, it's filepond by default */
          // onupdatefiles={(fileItems) => {
          //   // Set currently active file objects to this.state
          //   this.setState({
          //     files: fileItems.map((fileItem) => fileItem.file),
          //   });
          // }}
        />

        <input
          type="submit"
          value="Process"
          className="primary-button"
          onClick={processData}
        />
      </form>
    </div>
  );
}

export default Home;
