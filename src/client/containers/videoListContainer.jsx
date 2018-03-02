import React, { Component } from 'react';
import axios from 'axios';
import VideoListEntry from '../components/videoListEntry.jsx';
import custom from "../styles/custom.css";

class VideoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const test = this.props.listVideos.map(function(item, index) {
      return <VideoListEntry key={index} index={index} video={item}/>
    })

    if (this.props.searched) {
      return (
        <div className={custom.videoList}>
          {test}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default VideoListContainer;
