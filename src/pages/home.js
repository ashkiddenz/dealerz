import MainLayout from "../layouts";
import Gallery from "../Components/Gallery"

function Home() {
    return (
        <MainLayout>
        <div className="container">
            <Gallery/>
        </div>
        </MainLayout>
    );
}

export default Home;
