import {useState, useEffect} from "react";
import Product from "../Product/product";
import Products from '../../data/products.json';
import Categories from '../../data/categories.json';

function Gallery() {
    const [data, setData] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        getData();
    },
         [selectedCategory]
    );

    console.log(Products);

    const getData = () => {
        setCategories(Categories);
        // fetch('https://fakestoreapi.com/products/categories')
        //     .then(res=>res.json())
        //     .then(json=>{
        //         setCategories(json);
        //     }).catch( err => {
        //         console.error(err.message);
        // })

        let productUrl = "https://fakestoreapi.com/products"

        if (selectedCategory != null) {
            productUrl += '/category/' + selectedCategory;
        }

        setData(Products);
        // fetch(productUrl)
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json);
        //         setData(json);
        //     }).catch( err => {
        //     console.error(err.message);
        // })

        if (selectedCategory != null) {
            const filteredArray = Products.filter(item => item.category === selectedCategory);
            setData(filteredArray);
        }
    }

    return (
                <div className="row">
                    <div className="col-12 d-flex flex-row justify-content-evenly align-items-center my-5">
                        <button type="button" className="btn text-capitalize gallery-buttons" style={ selectedCategory === null ? {color: "#F86338"} : {}} onClick={() => {
                            setSelectedCategory(null);
                        }}>All Products</button>
                        {categories.length > 0 && categories.map( (item,index) => {
                            return <button type="button" className="btn text-capitalize gallery-buttons" key={index} style={ selectedCategory === item ? {color: "#F86338"} : {}} onClick={() => {
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
