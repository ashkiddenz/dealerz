import Header from "../Components/Header/Header";

const MainLayout = (props) => {
    return (
        <div>
        <Header></Header>
            {props.children}
            {/*<Footer></Footer>*/}
        </div>
    )
}

export default MainLayout
