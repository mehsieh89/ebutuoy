import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";

class VideoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const test = this.props.videos.map(function(item, index) {
      return <div key={index}>{index}</div>
    })

    if (this.props.searched) {
      return (
        <div>
          {test}
          <div>hi</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default VideoListContainer;
