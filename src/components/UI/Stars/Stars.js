import './Stars.css';
import {Component} from "react";

class Stars extends Component {

    state = {
        stars: ["\u2606", "\u2606", "\u2606", "\u2606", "\u2606"]
    }

    componentDidMount() {
        const stars = [...this.state.stars];
        for (let i = 0; i < Math.floor(this.props.rating); i++) {
            stars[i] = "\u2605";
        }
        this.setState({stars});
    }

    render() {
        return (
            <>
                {
                    this.state.stars.map((star, index) => <>{star}</>)
                }
                <> ({parseFloat(this.props.rating).toFixed(2)}/5)</>
            </>
        )
    }
}

export default Stars;
