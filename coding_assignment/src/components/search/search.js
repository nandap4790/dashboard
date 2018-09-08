import React from 'react';
import ReactDOM from 'react-dom';
import './search.scss'

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <div className="search-left">
          <div className="toggle-menubar">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="search-box">
            <input type="text" className="search-text" placeholder="Search for something..." />
          </div>
        </div>
        <div className="search-right">
          <i className="fas fa-envelope message-icon"></i>
          <i className="fas fa-bell notification-icon"></i>
          <div className="logout">
            <i className="fas fa-sign-out-alt"></i>
            <div className="logout-text">Log out</div>
          </div>
        </div>
      </div>
    )
  }
}