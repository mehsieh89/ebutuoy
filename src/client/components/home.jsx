import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeName } from "../actions";
// import SearchBar from 'material-ui-search-bar';
import SearchBarContainer from '../containers/searchBarContainer.jsx';
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
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClick2 = this.handleOnClick2.bind(this);
  }

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
    return (
      <div className={custom.searchDiv}>
        <SearchBarContainer/>
      </div>
    );
  }
}

  // export default About;
Home.propTypes = {
  name: PropTypes.string,
  // dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    name: state.app.name,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeName: changeName,
  }, dispatch);
};

  export default connect(mapStateToProps, matchDispatchToProps)(Home);

  // export default connect(mapStateToProps, dispatch => ({ dispatch }))(Home);
