import React, { Component } from 'react'
import styles from '../App.css'

class Heart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: true
        }
    }

    onClickHandler() {
        let value = !this.state.value;

        this.setState({value});
        this.props.like(this.state.value);
    }

    getHeartIcon() { 
        const heartIcon = this.state.value 
            ? '<img src="/heart.png" class="hearth-icon" />'
            : '<img src="/heart-checked.png" class="hearth-icon" />'

        return {__html: heartIcon}; 
    };

    render() {
    

        return (
            <div className="hearth-icon">
                <span onClick={ () => this.onClickHandler() } dangerouslySetInnerHTML={ this.getHeartIcon() }></span>
            </div>
        );
    }
}

export default Heart;