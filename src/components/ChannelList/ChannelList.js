import React from 'react'
import { allChannels } from '../../actions'
import { connect } from 'react-redux'
import UserFormContainer from '../UserForm/UserFormContainer'
import ChannelFormContainer from '../ChannelForm/ChannelFormContainer'
import { url } from '../../constants'
import { Link } from 'react-router-dom'

class ChannelList extends React.Component {
  state = { message: '' }

  source = new EventSource(`${url}/stream`)

  componentDidMount () {
    this.source.onmessage = (event) => {
      const channels = JSON.parse(event.data)
      this.props.allChannels(channels)
    }
  }

  render () {
    const channels = this.props.channels.map(channel =>
        <Link key={channel.id} to={`/channel/${channel.id}`}>
            <div>{channel.name}</div>
        </Link>)

    return <main>
      <UserFormContainer user={this.props.user} />
      <ChannelFormContainer />
      {channels}
    </main>
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
    user: state.user
  }
}

const mapDispatchToProps = {
  allChannels
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
