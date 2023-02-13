import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";

const MainLayout = (props) => {
    return (
        <div>
        <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
