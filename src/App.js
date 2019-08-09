import React from 'react';
import { connect } from 'react-redux'
import { allMessages } from './actions'
import MessageFormContainer from './components/MessageFormContainer'
import UserFormContainer from './components/UserFormContainer'

class App extends React.Component {
  source = new EventSource('http://localhost:5000/stream')

  componentDidMount() {
    this.source.onmessage = (event) => {
      const messages = JSON.parse(event.data)
      this.props.allMessages(messages)
    }
  }

  render() {
    const messages = this.props.messages.map((message, index) => <p key={index}>{message.user}: {message.text}</p>)

    return <main>
      <UserFormContainer user={this.props.user} />
      <MessageFormContainer user={this.props.user} />
      {messages}
    </main>
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  }
}

const mapDispatchToProps = {
  allMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
