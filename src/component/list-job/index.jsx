import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ListJob extends Component {
    static propTypes = { list: PropTypes.array }

    renderList = () => this.props.list.map((item, index) => <li key={index}>{item}</li>);

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}
