import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";
import VideoPlayer from '../components/videoPlayer.jsx';

class VideoPlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const index = this.props.mainVideo
    return (
      <VideoPlayer
        {...this.props}
        video={this.props.videos[index]}
        mainVideoInfo={this.props.mainVideoInfo}
      />
    );
  }
}

export default VideoPlayerContainer;
