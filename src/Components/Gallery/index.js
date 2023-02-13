import {useState, useEffect} from "react";
import Product from "../Product/product";
import Products from '../../data/products.json';
import Categories from '../../data/categories.json';

function Gallery() {
    const [data, setData] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [corsError, setError] = useState(null);
    const [findOutMore , setFindOutMore ] = useState(0);

    useEffect(() => {
        if(corsError === null) {
         getData();
        }
    }, [selectedCategory]);

    useEffect(() => {
            getDataFromJson();
    },[selectedCategory])


    const getData = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                setCategories(json);
            }).catch( err => {
            setCategories(Categories);
            setError(err);
            console.error(err.message);
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
            }).catch( err => {
                setData(Products);
                setError(err);
                console.error(err.message);
        })
    }

    const getDataFromJson = () => {
        if (corsError !== null && selectedCategory != null) {
            const filteredArray = Products.filter(item => item.category === selectedCategory);
            setData(filteredArray);
        }
    }

    return (
                <div className="row" style={{backgroundColor:'#E5E5E5'}}>
                    <div className="col-12 d-flex flex-row justify-content-evenly align-items-center my-4">
                        <button type="button" className="btn text-capitalize gallery-buttons" style={ selectedCategory === null ? {color: "#F86338"} : {}} onClick={() => {
                            setSelectedCategory(null);
                        }}>All Products</button>
                        {categories.length > 0 && categories.map( (item,index) => {
                            return <button type="button" className="btn text-capitalize gallery-buttons" key={index} style={ selectedCategory === item ? {color: "#F86338"} : {}} onClick={() => {
                                setSelectedCategory(item);
                            }}>{item}</button>
                        })}
                    </div>
                    <div className="row d-flex justify-content-start" style={{marginLeft:104}} width="80%">
                            {data.length > 0 && data.map( (item,index) => {
                                if(findOutMore === 0 && index < 6) {
                                    return <Product item = {item} key={item.id}/>
                                } else if(findOutMore !== 0) {
                                    return <Product item = {item} key={item.id}/>
                                }
                                return null;
                            })}
                    </div>
                    <div className="pt-5" style={{paddingBottom:160}}>
                        { findOutMore === 0 ? <button className="btn find-out-more-button" onClick={() => {
                            setFindOutMore(1);
                        }}>Find out More</button> : null}
                    </div>
                </div>
    );
}

export default Gallery;
