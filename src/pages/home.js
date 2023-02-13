import MainLayout from "../layouts";
import Gallery from "../Components/Gallery"
import Hero from "../Components/Hero"
import Form from "../Components/Form";

function Home() {
    return (
        <MainLayout>
            <Hero />
            <div className="col-12 pt-5" style={{backgroundColor:"#e5e5e5"}}>
                <h2 className='header-2'>Our Premium Collection</h2>
            </div>
            <Gallery/>
            <Form/>
        </MainLayout>
    );
}

export default Home;
