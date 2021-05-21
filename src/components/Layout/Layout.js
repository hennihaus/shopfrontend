import './Layout.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Content from "../UI/Content/Content";

function Layout(props) {
    return (
        <div className='Layout'>
            <Header/>
            <Navbar/>
            <main>
                <Content>
                    <div className='Layout__Content'>
                        {props.children}
                    </div>
                </Content>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;
