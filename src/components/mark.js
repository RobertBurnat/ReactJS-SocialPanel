import React from "react";

class Mark extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mark">
                <p>{ this.props.option.quantity }</p>
                <span>{ this.props.option.text }</span>
            </div>
        )
    }
}

export default Mark;