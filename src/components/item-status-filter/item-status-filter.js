import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    const {onChangeFilter} = this.props;

    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={() => onChangeFilter('all')}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => onChangeFilter('active')}>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => onChangeFilter('done')}>Done</button>
      </div>
    );
  }
}
