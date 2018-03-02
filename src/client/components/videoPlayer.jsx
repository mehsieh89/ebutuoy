import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const video = this.props.video;
    return (
      <div className={custom.videoPlayer}>
        <div> {video.snippet.title} </div>
        <iframe className={custom.iframe} src={'https://www.youtube.com/embed/' + video.id.videoId} allowFullScreen></iframe>
      </div>
    );
  }
}

export default VideoPlayer;
