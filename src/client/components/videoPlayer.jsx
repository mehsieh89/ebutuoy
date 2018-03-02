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
    const mainVideoInfo = this.props.mainVideoInfo
    return (
      <div className={custom.videoPlayer}>
        <iframe className={custom.iframe} src={'https://www.youtube.com/embed/' + video.id.videoId} allowFullScreen></iframe>
        <div> {video.snippet.title} </div>
        <div> {video.snippet.description} </div>
        <div> {mainVideoInfo.likes} </div>
        <div> {mainVideoInfo.dislikes} </div>
      </div>
    );
  }
}

export default VideoPlayer;
