import React from 'react'
import UserForm from './UserForm'
import { setName } from '../../actions'
import { connect } from 'react-redux'

class UserFormContainer extends React.Component {
    state = { name: ''}

    onChange = (event) => {
        const { value } = event.target
        this.setState({ name: value })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        this.props.setName(this.state.name)
        this.setState({ name: '' })
    }

    render() {
        return <UserForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            value={this.state.name}
            user={this.props.user}
        />
    }
}

const mapDispatchToProps = {
    setName
}

export default connect(null, mapDispatchToProps)(UserFormContainer);
