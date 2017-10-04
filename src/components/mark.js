import React, { Component } from 'react'
import styles from '../App.css'

class Mark extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="marks">
                <p className="quantity">{ this.props.option.quantity }</p>
                <span className="quantity-text">{ this.props.option.text }</span>
            </div>
        )
    }
}

export default Mark;