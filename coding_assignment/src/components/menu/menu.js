import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const parentListItems = [{label: 'dashboards', value: 'Dashboards'},
                             {label: 'layouts', value: 'Layouts'},
                             {label: 'graphs', value: 'Graphs'},
                             {label: 'mailbox', value: 'Mailbox'},
                             {label: 'metrics', value: 'Metrics'},
                             {label: 'widgets', value: 'Widgets'},
                             {label: 'forms', value: 'Forms'},
                             {label: 'app-views', value: 'App Views'}];
    const childListItems = ['Inbox', 'Email view', 'Compose email', 'Email templates'];
    const profile = {name: 'Foobar', profession: 'Foobar consultant'};

    const renderMailBoxMenu = () => {
      const mailBoxMenu = <ul className="sub-menu">
                            {renderMailBoxMenuItems()}
                          </ul>
      return mailBoxMenu;
    }

    const renderMailBoxMenuItems = () => {
      const mailBoxMenuItems = childListItems.map((item) => {
        return(
          <li className="sub-menu-item item">
            {item}
          </li>
        )
      })
      return mailBoxMenuItems;
    }

    const renderMenuItems = () => {
      const menu = parentListItems.map((item) => {
        if(item.value === 'Mailbox') {
          return(
            <li className={`item ${item.label}`}>
              {item.value}
              {renderMailBoxMenu()}
            </li>
          )
        } else {
          return <li className={`item ${item.label}`}>{item.value}</li>
        }
      });
      return menu;
    }

    const renderProfile = () => {
      return(
        <div className="profile-info">
          <div className="avatar"></div>
          <div className="name">{profile.name}</div>
          <div className="profession">{profile.profession}</div>
        </div>
      )
    }

    return(
      <div className="menu-container">
        <nav className="menu">
          {renderProfile()}
          <ul className="menu-list">
            {renderMenuItems()}
          </ul>
        </nav>
      </div>
    )
  }
}

