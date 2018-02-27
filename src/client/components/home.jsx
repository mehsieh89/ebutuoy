/*
 * This is a demo component the Eletrode app generator included
 * to show using Skeleton CSS lib (named base.css) and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/normalize.css";
import "../styles/raleway.css";
import skeleton from "../styles/skeleton.css";
import custom from "../styles/custom.css";
import electrodePng from "../images/electrode.png";
/**/

// export default () =>
//   <div className={custom.container}>
//     {/**/}
//
//     <section className={custom.header}>
//       <h2 className={skeleton.title}>
//         Hello from {" "}
//         <a href="https://github.com/electrode-io">{"Electrode"} <img src={electrodePng} /></a>
//       </h2>
//     </section>
//   </div>;

  class Home extends Component {
    constructor(props) {
      super(props);
      // this.handleOnClick = this.handleOnClick.bind(this);
    }

    // handleOnClick() {
    //   this.props.toggleAboutDialog();
    // }

    render() {
      return (
        <div>{this.props.name}</div>
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

  export default connect(mapStateToProps, dispatch => ({ dispatch }))(Home);
