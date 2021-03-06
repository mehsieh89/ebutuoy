import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";
import CommentEntry from '../components/commentEntry.jsx';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let commentsArray = this.props.comments
    const moreProps = {...this.props}
    const commentList = commentsArray.map(function(item, index) {
      return <CommentEntry moreProps={moreProps} key={index} index={index}/>
    });
    return (
      <div>
        {commentList}
      </div>
    );
  }
}

export default CommentsContainer;
