import './OrderSort.css';
import {orderSort} from "../../../common/model";
import {setOrderSort} from "../../../store/order-actions";
import {useDispatch} from "react-redux";

function OrderSort() {
    const dispatch = useDispatch();
    return (
        <ul className='OrderSort'>
            <li className='OrderSort__List__Item'>
                <span>Sortieren</span>
                <ul className='OrderSort__List'>
                    <li className='OrderSort__List__Item'
                        onClick={() => dispatch(setOrderSort(orderSort.DATE_ASC))}>
                        Datum aufsteigend
                    </li>
                    <li className='OrderSort__List__Item'
                        onClick={() => dispatch(setOrderSort(orderSort.DATE_DESC))}>
                        Datum absteigend
                    </li>
                    <li className='OrderSort__List__Item'
                        onClick={() => dispatch(setOrderSort(orderSort.PRICE_ASC))}>
                        Preis aufsteigend
                    </li>
                    <li className='OrderSort__List__Item'
                        onClick={() => dispatch(setOrderSort(orderSort.PRICE_DESC))}>
                        Preis absteigend
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default OrderSort;
