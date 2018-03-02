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
    console.log(this.props.videos)
    return (
      <VideoPlayer
        {...this.props}
        video={this.props.videos[0]}
      />
    );
  }
}

export default VideoPlayerContainer;
