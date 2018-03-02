import React, { Component } from 'react';
import axios from 'axios';
import custom from "../styles/custom.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleOnChange(e) { this.setState({ value: e.target.value }); }

  handleSearch(e) {
    e.preventDefault();
    const { importVideos, toggleSearchResults } = this.props;
    let options = {
      value: this.state.value,
    };
    axios.post('/search', options)
    .then((res) => {
      let videoArray = res.data.slice();
      // console.log('back on front end ');
      // console.log(res.data[0].id.videoId);
      // console.log(res.data[0].snippet.thumbnails.default.url);
      // console.log(res.data[0].snippet.description);
      this.props.importVideos(res.data);
      videoArray.splice(0, 1);
      this.props.importListVideos(videoArray);
      this.props.changeMainVideo(0);
    })
    .then(() => {
      console.log(this.props.listVideos);
      console.log(this.props.current)
      toggleSearchResults(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          value={this.state.value}
          placeholder="Search"
          onChange={this.handleOnChange}
          className="textbox"
        />
        <input
          type="submit"
          value="Search"
          className="submitbutton"/>
      </form>
    );
  }
}

export default Search;
