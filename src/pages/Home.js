import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/Home.css";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
    };
  }

  render() {
    return (
      <div className="App">
        <FilePond
          className="center"
          ref={(ref) => (this.pond = ref)}
          files={this.state.file}
          allowMultiple={false}
          credits=""
          maxFiles={3}
          server="/api"
          name="files" /* sets the file input name, it's filepond by default */
          onupdatefiles={(fileItems) => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map((fileItem) => fileItem.file),
            });
          }}
        />

        <button className="center primary-button">Process</button>
      </div>
    );
  }
}

export default Home;
