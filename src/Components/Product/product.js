const Product = ({item}) => {
    return (
        <div className="card col-md-4 col-12 m-2" style={{height:'640',width:400}}>
            <img className="card-img-top p-4" src={item.image} style={{height:400,width:400}} alt={item.title} />
            <div className="card-body">
                <h6 className="card-category-heading text-capitalize">{item.category}</h6>
                <h3 className="card-text title text-start">{item.title}</h3>
                <button className="btn btn-sm rounded-circle float-start arrowButton" style={{backgroundColor: '#F86338'}}>
                    <img src={"/assets/rightArrow.svg"} width={20} height={25} alt="rightArrow" />
                </button>
            </div>
        </div>
    )
}

export default Product;
