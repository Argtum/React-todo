import React, {Component} from 'react';
import './item-add.css'

export default class ItemAdd extends Component {

  render() {
    const {onAddItem} = this.props;

    return (
      <div className="item-add">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onAddItem("Read book")}
        >
          Add event
        </button>
      </div>
    )
  }
}