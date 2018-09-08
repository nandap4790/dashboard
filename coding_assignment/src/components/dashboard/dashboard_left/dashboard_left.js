import React from 'react';
import ReactDOM from 'react-dom';

import './dashboard_left.scss';

export default class DashboardLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const folderItems = [{label: 'inbox', value: 'Inbox'},
                         {label: 'sent', value: 'Sent'},
                         {label: 'important', value: 'Important'},
                         {label: 'drafts', value: 'Drafts'},
                         {label: 'trash', value: 'Trash'}];
    const categoryItems = [{label: 'work', value: 'Work'},
                         {label: 'documents', value: 'Documents'},
                         {label: 'social', value: 'Social'},
                         {label: 'advertising', value: 'Advertising'},
                         {label: 'clients', value: 'Clients'}];
    const labelItems = [{label: 'family', value: 'Family'},
                         {label: 'work', value: 'Work'},
                         {label: 'home', value: 'Home'},
                         {label: 'children', value: 'Children'},
                         {label: 'holidays', value: 'Holidays'},
                         {label: 'music', value: 'Music'},
                         {label: 'photography', value: 'Photography'},
                         {label: 'film', value: 'Film'}];

    const renderItems = (items) => {
      const renderItems = items.map((item) => {
        const label = item.label;
        return <li className={`item ${item.label}`} onClick={(e,label) => this.props.changeScreen(e, item.label)}>
                <div className="icon"></div>
                <div className="label">{item.value}</div>
              </li>
      });
      return renderItems;
    }

    return(
      <div className="dashboard-left">
        <div className="compose-email" onClick={() => this.props.toggleModal()}>Compose Mail</div>
        <ul className="folders">
          <div className="header">Folders</div>
          {renderItems(folderItems)}
        </ul>
        <ul className="categories">
          <div className="header">Categories</div>
          {renderItems(categoryItems)}
        </ul>
        <ul className="labels">
          <div className="header">Labels</div>
          <div class="tagged">{renderItems(labelItems)}</div>
        </ul>
      </div>
    )
  }
}