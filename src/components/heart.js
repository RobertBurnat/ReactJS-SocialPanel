import React from "react";

class Heart extends React.Component {
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
            ? '<img src="/heart.png" width="32" height="32" />'
            : '<img src="/heart-checked.png" width="32" height="32" />'

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