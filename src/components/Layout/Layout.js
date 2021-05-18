import './Layout.css';
import Header from "./Header/Header";
import Toolbar from "./Toolbar/Toolbar";
import Footer from "./Footer/Footer";

function Layout(props) {
    return (
        <>
            <Header/>
            <Toolbar/>
            <main className='Layout__main'>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout;
