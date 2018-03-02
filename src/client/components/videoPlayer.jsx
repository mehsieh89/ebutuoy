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
    console.log(this.props.comments[0]);
    console.log('video player');
    const video = this.props.video;
    const mainVideoInfo = this.props.mainVideoInfo;
    const comments = this.props.comments;
    return (
      <div className={custom.mainPLayer}>
        <iframe className={custom.iframe} src={'https://www.youtube.com/embed/' + video.id.videoId} allowFullScreen></iframe>
        <div className={custom.mainPlayerInfo}>
          <div> {video.snippet.title} </div>
          <div> {video.snippet.description} </div>
          <div> {mainVideoInfo.likes} </div>
          <div> {mainVideoInfo.dislikes} </div>
        </div>
        <div className={custom.MainPLayerComments}> {comments[0].user} </div>
      </div>
    );
  }
}

export default VideoPlayer;
