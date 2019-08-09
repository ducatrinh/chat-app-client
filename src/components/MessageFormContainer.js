import React from 'react'
import * as request from 'superagent'
import MessageForm from './MessageForm'

class MessageFormContainer extends React.Component {
    state = { message: '' }

    onChange = (event) => {
        const { value } = event.target
        this.setState({ message: value })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        await request
            .post('http://localhost:5000/message')
            .send({ 
                message: this.state.message,
                user: this.props.user
            })

        this.setState({ message: '' })
    }

    render() {
        return <MessageForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            value={this.state.message}
        />
    }
}

export default MessageFormContainer