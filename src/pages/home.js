import MainLayout from "../layouts";
import Gallery from "../Components/Gallery"

function Home() {
    return (
        <MainLayout>
            <div className="col-12 pt-5" style={{backgroundColor:"#e5e5e5"}}>
                <h2 className='header-2'>Our Premium Collection</h2>
            </div>
            <Gallery/>
        </MainLayout>
    );
}

export default Home;
