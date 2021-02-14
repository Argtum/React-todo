import React, {Component} from 'react';
import './item-add.css'

export default class ItemAdd extends Component {

  state = {
    label: ``
  }

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    this.props.onAddItem(this.state.label)
  };

  render() {
    return (
      <form className="item-add d-flex"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What need to be done"
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add event
        </button>
      </form>
    )
  }
}