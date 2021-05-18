import "./Button.css";

function Button(props) {
    return (
        <button className='Button' onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;
