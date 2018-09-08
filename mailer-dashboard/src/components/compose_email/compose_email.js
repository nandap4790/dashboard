import React from 'react';
import ReactDOM from 'react-dom';

import './compose_email.scss';

export default class ComposeEmail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      to: '',
      cc: '',
      subject: '',
      body: ''
    }
  }

  render() {
    const sendEmail = () => {
      this.props.toggleModal();
      const sendMailObj = {};
      sendMailObj.to = this.state.to;
      sendMailObj.cc = this.state.cc;
      sendMailObj.subject = this.state.subject;
      sendMailObj.body = this.state.body;
      localStorage.setItem('sentEmail', JSON.stringify(sendMailObj));
      this.props.pushSent();
    }

    const getValue = (e, label) => {
      this.setState({[label]: e.target.value});
    }

    return(
      <div className="parent">
        <div className="email-form">
          <div className="email-labels">
            <div className="header">New Email</div>
            <div className="close" onClick={() => this.props.toggleModal()}>Close</div>
          </div>
          <div>
            <div  className="to">
              <span>To</span>
              <input type="text" onChange={(e) => getValue(e, 'to')}/>
            </div>
          </div>
          <div>
            <div className="cc">
              <span>Cc</span>
              <input type="text" onChange={(e) => getValue(e, 'cc')} />
            </div>
          </div>
          <div>
            <div className="subject">
              <span>Subject</span>
              <input type="text" onChange={(e) => getValue(e, 'subject')}/>
            </div>
          </div>
          <div>
            <div className="mail-body">
              <textarea id="advanced" className="advanced" name="advanced"
                    placeholder="Start typing your message"
                    wrap="hard" onChange={(e) => getValue(e, 'body')}></textarea>
            </div>
          </div>
          <div>
            <div className="send-email" onClick={() => sendEmail()}>Send email</div>
          </div>
        </div>
      </div>
    )
  }
}

