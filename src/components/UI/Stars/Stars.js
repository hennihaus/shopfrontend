import './Stars.css';

function Stars(props) {
    const stars = ["\u2606", "\u2606", "\u2606", "\u2606", "\u2606"];
    for (let i = 0; i < Math.floor(props.rating); i++) {
        stars[i] = "\u2605";
    }
    return (
        <>
            {
                stars.map((star, index) => <span key={index}>{star}</span>)
            }
            <span> ({parseFloat(props.rating).toFixed(2)}/5)</span>
        </>
    )
}

export default Stars;
