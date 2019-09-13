import React from 'react'
import * as request from 'superagent'
import ChannelForm from './ChannelForm'
import { url } from '../../constants'

class ChannelFormContainer extends React.Component {
    state = { name: '' }

    onChange = (event) => {
        const { value } = event.target
        this.setState({ name: value })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        await request
            .post(`${url}/channel`)
            .send({ name: this.state.name })

        this.setState({ name: '' })
    }

    render() {
        return <ChannelForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            value={this.state.message}
            user={this.props.user}
        />
    }
}

export default ChannelFormContainer