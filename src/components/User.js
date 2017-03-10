/**
 * Created by ftalaev on 07.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    render() {
        const { name } = this.props
        return <div className='ib user'>
            <p>Here's {name}!</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
}