import React from 'react';
import { connect } from 'react-redux'
import { allMessages } from './actions'
import MessageFormContainer from './components/MessageFormContainer'

class App extends React.Component {
  source = new EventSource('http://localhost:5000/stream')

  componentDidMount() {
    this.source.onmessage = (event) => {
      const messages = JSON.parse(event.data)
      this.props.allMessages(messages)
    }
  }

  render() {
    const messages = this.props.messages.map((message, index) => <p key={index}>{message.text}</p>)

    return <main>
      <MessageFormContainer />
      {messages}
    </main>
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = {
  allMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
