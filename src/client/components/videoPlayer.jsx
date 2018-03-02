import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";
import CommentsContainer from "../containers/commentsContainer.jsx";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const video = this.props.video;
    const mainVideoInfo = this.props.mainVideoInfo;
    const comments = this.props.comments;
    return (
      <div className={custom.mainPLayer}>
        <iframe className={custom.iframe} src={'https://www.youtube.com/embed/' + video.id.videoId} allowFullScreen></iframe>
        <div className={custom.mainPlayerInfo}>
          <div> {video.snippet.title} </div>
          <div> {video.snippet.description} </div>
          <div> likes: {mainVideoInfo.likes} </div>
          <div> dislikes: {mainVideoInfo.dislikes} </div>
        </div>
        <CommentsContainer
          {...this.props}
        />
      </div>
    );
  }
}

export default VideoPlayer;
