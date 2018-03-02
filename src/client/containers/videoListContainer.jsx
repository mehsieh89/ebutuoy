import React, { Component } from 'react';
import axios from 'axios';
import VideoListEntry from '../components/videoListEntry.jsx';
import custom from "../styles/custom.css";

class VideoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index) {
    let videoArray = this.props.videos.slice();
    // console.log('back on front end ');
    // console.log(res.data[0].id.videoId);
    // console.log(res.data[0].snippet.thumbnails.default.url);
    // console.log(res.data[0].snippet.description);
    videoArray.splice(index, 1);
    this.props.changeSkipIndex(index);
    this.props.changeMainVideo(index);
  }

  render() {
    const more = {...this.props};
    const click = this.handleOnClick;
    const test = this.props.videos.map(function(item, index) {
      if (index === more.skipIndex) {
        return;
      } else {
        return  (
          <VideoListEntry
            more={more}
            onClick={() => click(index)}
            key={index}
            index={index}
            video={item}
          />
        )
      }
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
