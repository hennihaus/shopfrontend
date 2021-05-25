import "./Button.css";

function Button(props) {
    const handleClick = event => {
        event.stopPropagation();
        props.click();
    };
    return (
        <button className={props.className ? `Button ${props.className}` : 'Button'}
                onClick={event => handleClick(event)}>
            {props.children}
        </button>
    );
}

export default Button;
