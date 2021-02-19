import React, {Component} from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {

  onSearchChange = (evt) => {
    this.props.onSearch(evt.target.value);
  };

  render() {
    return <input
      type="text"
      className="form-control search-panel"
      placeholder="type to search"
      onChange={this.onSearchChange}
    />;
  }
};
