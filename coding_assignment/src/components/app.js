import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './app.scss';
import Menu from './menu/menu';
import Dashboard from './dashboard/dashboard';
import ComposeEmail from './compose_email/compose_email';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleModal: false,
      sent: []
    }
  }

  componentDidMount() {
    this.state.sent.push(JSON.parse(localStorage.getItem('sentEmail')))
    this.setState({sent: this.state.sent});
  }

  render() {
    const onToggleModal = () => {
      this.setState({toggleModal: !this.state.toggleModal});
    }

    const onPushSent = () => {
      this.state.sent.push(JSON.parse(localStorage.getItem('sentEmail')))
      this.setState({sent: this.state.sent});
    }

    const renderComposeEmail = () => {
      if(this.state.toggleModal) {
        return(
          <ComposeEmail toggleModal={() => onToggleModal()} pushSent={() => onPushSent()}/>
        )
      }
    }

    const showComposeEmail = classnames({'hide-compose-email': !this.state.toggleModal})

    return <div className="dashboard-container">
              <div className={`compose-email-modal-container ${showComposeEmail}`}></div>
              {renderComposeEmail()}
              <div className="menu-container-parent">
                <Menu />
              </div>
              <div className="dashboard">
                <Dashboard toggleModal={() => onToggleModal()} sent={this.state.sent}/>
              </div>
           </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}