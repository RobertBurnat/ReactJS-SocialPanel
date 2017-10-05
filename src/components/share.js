import React, { Component } from 'react'
import styles from '../App.css'

class Share extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <img src="/share.png" className="share-button" />
        );
    }
}

export default Share;