import './OrderSort.css';
import {Component} from "react";
import {orderSort} from "../../../common/model";
import {setOrderSort} from "../../../store/order-actions";
import {connect} from "react-redux";

class OrderSort extends Component {

    handleClick = (event, order) => {
        event.preventDefault();
        this.props.setOrderSort(order);
    }

    render() {
        return (
            <ul className='OrderSort'>
                <li>
                    <a href='#'>Sortieren</a>
                    <ul className='OrderSort__Second'>
                        <li onClick={event => this.handleClick(event, orderSort.DATE_ASC)}>
                            <a href='#'>Datum aufsteigend</a>
                        </li>
                        <li onClick={event => this.handleClick(event, orderSort.DATE_DESC)}>
                            <a href='#'>Datum absteigend</a>
                        </li>
                        <li onClick={event => this.handleClick(event, orderSort.PRICE_ASC)}>
                            <a href='#'>Preis aufsteigend</a>
                        </li>
                        <li onClick={event => this.handleClick(event, orderSort.PRICE_DESC)}>
                            <a href='#'>Preis absteigend</a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOrderSort: orderSort => dispatch(setOrderSort(orderSort))
    };
};

export default connect(null, mapDispatchToProps)(OrderSort);
