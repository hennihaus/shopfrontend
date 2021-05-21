import "./Button.css";
import {Component} from "react";

class Button extends Component {

    handleClick = event => {
        event.stopPropagation();
        this.props.click();
    }

    render() {
        return (
            <button className='Button' onClick={event => this.handleClick(event)}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
