import React from 'react'

export default function MessageForm(props) {
    const { value, onChange, onSubmit } = props

    return <div>
        <h3>New Message</h3>
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">Send</button>
        </form>
    </div>
}
