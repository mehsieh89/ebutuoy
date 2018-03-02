import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeName, importVideos, toggleSearchResults } from "../actions";
// import SearchBar from 'material-ui-search-bar';
import SearchBarContainer from '../containers/searchBarContainer.jsx';
import VideoPlayerContainer from '../containers/videoPlayerContainer.jsx';
import VideoListContainer from '../containers/videoListContainer.jsx';
import axios from 'axios';
import "../styles/normalize.css";
import "../styles/raleway.css";
import skeleton from "../styles/skeleton.css";
import custom from "../styles/custom.css";
// import electrodePng from "../images/electrode.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      videos: [],
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClick2 = this.handleOnClick2.bind(this);
  }

  // addVideos(array) {
  //   this.setState({
  //     videos: array
  //   })
  // }

  handleOnClick() {
    // this.props.toggleAboutDialog();
    axios.get('/test')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleOnClick2() {
    const { changeName } = this.props;
    changeName('dkjawbdjhadjhavda');
  }

  handleOnChange(e) { this.setState({ title: e.target.value }); }

  render() {
    let results = null;
    if (this.props.searched) {
      results = <VideoListContainer
        // addVideos={this.addVideos}
        videos={this.props.videos}
        searched={this.props.searched}
        toggleSearchResults={this.props.toggleSearchResults}
        importVideos={this.props.importVideos}
      />;
    }
    return (
      <div className={custom.searchDiv}>
        <SearchBarContainer
          // addVideos={this.addVideos}
          videos={this.props.videos}
          searched={this.props.searched}
          toggleSearchResults={this.props.toggleSearchResults}
          importVideos={this.props.importVideos}
        />
        {results}
      </div>
    );
  }
}

  // export default About;
Home.propTypes = {
  name: PropTypes.string,
  videos: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    name: state.app.name,
    videos: state.video.current,
    searched: state.video.searched,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeName: changeName,
    importVideos: importVideos,
    toggleSearchResults: toggleSearchResults,
  }, dispatch);
};

  export default connect(mapStateToProps, matchDispatchToProps)(Home);

  // export default connect(mapStateToProps, dispatch => ({ dispatch }))(Home);
