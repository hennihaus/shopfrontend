import './Imprint.css';
import Title from "../UI/Title/Title";

function Imprint(props) {
    return (
        <div className='Imprint'>
            <Title>Impressum</Title>
            <p>E-Shop GmbH</p>
            <p>Am Gerhardshain 44</p>
            <p>24768 Rendsburg</p>
            <div className='Imprint__Contact'>
                <p>Tel.: +49 (0) 4331 / 14 38-0</p>
                <p>Fax: +49 (0) 4331 / 14 38 - 20</p>
                <p>E-Mail: info[at]e-shop.de</p>
                <p>Web: www.e-shop.de</p>
            </div>
        </div>
    )
}

export default Imprint;
