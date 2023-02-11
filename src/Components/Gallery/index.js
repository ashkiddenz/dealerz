import {useState, useEffect} from "react";
import Product from "../Product/product"

function Gallery() {
    const [data, setData] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        getData();
    }, [selectedCategory]);

    const getData = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                setCategories(json);
            })

        let productUrl = "https://fakestoreapi.com/products"

        if (selectedCategory != null) {
            productUrl += '/category/' + selectedCategory;
        }

        fetch(productUrl)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json);
            });
    }

    return (
                <div className="row">
                    <div className="col-12">
                        <h2>Our Gallery</h2>
                    </div>
                    <div className="col-12 d-flex flex-row justify-content-evenly align-items-center">
                        <button type="button" className="btn text-capitalize" style={ selectedCategory ==null ? {color: "#F86338"} : {}} onClick={() => {
                            setSelectedCategory(null);
                        }}>All Products</button>
                        {categories.length > 0 && categories.map( (item,index) => {
                            return <button type="button" className="btn text-capitalize" key={index} style={ selectedCategory == item ? {color: "#F86338"} : {}} onClick={() => {
                                setSelectedCategory(item);
                            }}>{item}</button>
                        })}
                    </div>
                    {data.length > 0 && data.map( item => {
                        return <Product item = {item} key={item.id}/>
                    })}
                </div>
    );
}

export default Gallery;
