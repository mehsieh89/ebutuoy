import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeName } from "../actions";
import axios from 'axios';
import "../styles/normalize.css";
import "../styles/raleway.css";
import skeleton from "../styles/skeleton.css";
import custom from "../styles/custom.css";
import electrodePng from "../images/electrode.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // this.props.toggleAboutDialog();
    console.log('click worked');
    axios.get('/test')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOnClick}>{this.props.name}</div>
      </div>
    );
  }
}

  // export default About;
  Home.propTypes = {
    name: PropTypes.string,
  };

  const mapStateToProps = state => {
    return {
      name: state.name,
    };
  };

  const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeName: changeName,
  }, dispatch);
};

  export default connect(mapStateToProps, matchDispatchToProps)(Home);
