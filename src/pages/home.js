import MainLayout from "../layouts";
import Gallery from "../Components/Gallery"

function Home() {
    return (
        <MainLayout>
        <div className="container">
            <div className="col-12 mt-5">
                <h2 className='header-2'>Our Premium Collection</h2>
            </div>
            <Gallery/>
        </div>
        </MainLayout>
    );
}

export default Home;
