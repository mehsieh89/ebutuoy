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
    let options = {
      value: this.state.value,
    };
    axios.post('/search', options)
    .then((res) => {
      console.log('back on front end ' + res.data);
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

// const styles = {
//   search: {
//     position: 'relative',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   }
// }

export default Search;
