import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";

class VideoListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.video)
    const video = this.props.video;
    return (
      <div>
        <img src={video.snippet.thumbnails.default.url} alt=""/>
        <div> {video.snippet.title} </div>
      </div>
    );
  }
}

export default VideoListEntry;
