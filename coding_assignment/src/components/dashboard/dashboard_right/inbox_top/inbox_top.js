import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './inbox_top.scss';

export default class InboxTop extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const getCorrespondingCount = () => {
      if(this.props.screen === 'inbox') {
        return this.props.inboxCount;
      } else if(this.props.screen === 'trash') {
        return this.props.deletedCount;
      } else if(this.props.screen === 'sent') {
        return this.props.sentCount;
      }
    }

    const showTrash = classnames({'hide-trash': this.props.screen === 'trash' || this.props.screen === 'sent'})

    return(
        <div className="inbox-top">
          <div className="inbox-header">
            <div className="count">{this.props.screen} ({getCorrespondingCount()})</div>
            <div className="search">
              <input type="text" className="search-email" placeholder="Search email" />
              <div className="search-button">Search</div>
            </div>
          </div>
          <div className="action-buttons">
            <div className="action-buttons-left">
              <div className="refresh">Refresh</div>
              <div className="view"></div>
              <div className="important"></div>
              <div className={`trash ${showTrash}`} onClick={(e) => this.props.onDelete(e)}></div>
            </div>
            <div className="action-buttons-right">
              <div className="prev"></div>
              <div className="next"></div>
            </div>
          </div>
      </div>
    )
  }
}