import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import _ from 'lodash';
import './dashboard.scss';
import Search from '../search/search';
import DashboardLeft from './dashboard_left/dashboard_left';
import DashboardRight from './dashboard_right/dashboard_right';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'inbox',
      deleted: [],
      sent: [],
      mailList: [
        {id:1, sender: 'Daenerys', subject: 'Queen of Andals', attachment: true, time: '6.00 AM', checked: false},
        {id:2, sender: 'Jon Snow', subject: 'I know nothing', attachment: false, time: '7.00 AM', checked: false},
        {id:3, sender: 'Clegane', subject: 'The mountain', attachment: false, time: '8.00 AM', checked: false},
        {id:4, sender: 'Cersei', subject: 'Everyone who isn’t us is an enemy', attachment: true, time: '9.00 AM', checked: false},
        {id:5, sender: 'Tyrion', subject: 'The Halfman', attachment: false, time: '10.00 AM', checked: false},
        {id:6, sender: 'Arya Stark', subject: 'No One', attachment: false, time: '11.00 AM', checked: false},
        {id:7, sender: 'Sansa Stark', subject: 'I am Sansa Stark of Winterfell', attachment: true, time: '12.00 PM', checked: false},
        {id:8, sender: 'Khal Drogo', subject: 'Dothraki', attachment: false, time: '1.00 PM', checked: false},
        {id:9, sender: 'Joffrey Baratheon', subject: 'Died', attachment: false, time: '2.00 PM', checked: false},
        {id:10, sender: 'Eddark Stark', subject: 'Winter Is Coming', attachment: false, time: '3.00 PM', checked: false}
      ]
    }
  }

  render() {
    const onChangeScreen = (e, label) => {
      this.setState({screen: label});
    }

    const selectMail = (e, item, index) => {
      if(e.target.checked) {
        const cloneMailList = this.state.mailList;
        const newObj =update(cloneMailList, {[index]: {checked: {$set: true}}});
        this.setState({mailList: newObj});
      }
      else {
        const cloneMailList = this.state.mailList;
        const newObj =update(cloneMailList, {[index]: {checked: {$set: false}}});
        this.setState({mailList: newObj});
      }

      this.setState({selected: this.state.selected});
    }

    const onDeleteMail = () => {
      const cloneMailList = [...this.state.mailList];
      const removeCheckedItems = _.remove(cloneMailList, (item) => {
        return item.checked;
      })
      this.setState({mailList: cloneMailList, deleted: removeCheckedItems}, resetChecked());
    }

    const resetChecked = () => {
      //Try avoiding this
      const checkbox = document.querySelectorAll('input[type=checkbox]');
      return checkbox.forEach((item, index) => {
        item.checked = false;
      })
    }

    return(
      <div className="dashboard-parent">
        <Search />
        <div className="email-dashboard">
          <DashboardLeft changeScreen={(e, label) => onChangeScreen(e, label)} toggleModal={() => this.props.toggleModal()} />
          <DashboardRight screen={this.state.screen} mailList={this.state.mailList} selectMail={(e, item, index) => selectMail(e, item, index)} onDelete={() => onDeleteMail()} deletedCount={this.state.deleted.length} inboxCount={this.state.mailList.length} sentCount={this.props.sent.length} deleted={this.state.deleted} sent={this.props.sent} />
        </div>
      </div>
    )
  }
}

