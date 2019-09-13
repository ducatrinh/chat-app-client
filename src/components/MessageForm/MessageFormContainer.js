import React from 'react'
import * as request from 'superagent'
import MessageForm from './MessageForm'
import { url } from '../../constants'

class MessageFormContainer extends React.Component {
    state = { message: '' }

    onChange = (event) => {
        const { value } = event.target
        this.setState({ message: value })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        await request
            .post(`${url}/message`)
            .send({ 
                message: this.state.message,
                user: this.props.user,
                channelId: this.props.channelId
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