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
    videoArray.splice(index, 1);
    this.props.changeSkipIndex(index);
    this.props.changeMainVideo(index);
    let options = {
      id: this.props.videos[index].id.videoId
    }
    axios.post('/videoInfo', options)
    .then((data) => {
      this.props.changeMainVideoInfo(data.data);
    })
  }

  render() {
    const more = {...this.props};
    const click = this.handleOnClick;
    const videoList = this.props.videos.map(function(item, index) {
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
          {videoList}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default VideoListContainer;
