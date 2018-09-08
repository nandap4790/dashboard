import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import update from 'react-addons-update';

import './dashboard_right.scss';
import InboxTop from './inbox_top/inbox_top';

export default class DashboardRight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10
    }
  }

  render() {
    const renderMailItem = () => {
      let mailItems;
      if(this.props.screen === 'inbox') {
        mailItems = this.props.mailList;
      } else if(this.props.screen === 'trash') {
        mailItems = this.props.deleted;
      } else if(this.props.screen === 'sent') {
        mailItems = this.props.sent;
      }

      if(this.props.screen !== 'sent') {
        const mailItem = mailItems.map((item, index) => {
        const selectedItem = classnames({ 'selected-item': item.checked === true && this.props.screen === 'inbox' });
        const hideCheckBox = classnames({ 'hide-checkbox': this.props.screen !== 'inbox' });
          return <div className={`mail-item ${selectedItem}`}>
                    <input type='checkbox' className={`checkbox ${hideCheckBox}`} onChange={(e) => this.props.selectMail(e, item, index)}/>
                    <div className="sender">{item.sender}</div>
                    <div className="subject">{item.subject}</div>
                    <div className="attachment">{item.attachment}</div>
                    <time datetime={item.time}>{item.time}</time>
                 </div>
        });
        return mailItem;
      } else {
          const mailItem = this.props.sent.map((item, index) => {
          const selectedItem = classnames({ 'selected-item': item.checked === true && this.props.screen === 'inbox' });
            return <div className={`mail-item ${selectedItem}`}>
                      <div className="sent-to">To: {item.to}</div>
                      <div className="cc">CC: {item.cc}</div>
                      <div className="subject">Sub: {item.subject}</div>
                      <div className="body">Body: {item.body}</div>
                   </div>
          });
          return mailItem;
      }
    }

    return(
      <div className="dashboard-right">
        <InboxTop onDelete={() => this.props.onDelete()} screen={this.props.screen} count={this.state.count} deletedCount={this.props.deletedCount} inboxCount={this.props.inboxCount} sentCount={this.props.sentCount}/>
        <div className="mail-list">
          {renderMailItem()}
        </div>
      </div>
    )
  }
}