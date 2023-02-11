const Product = ({item}) => {
    return (
        <div className="col-md-4 col-12" style={{height:640,marginHorizontal:7}}>
            <img src={item.image} style={{height:400,width:400}} alt={item.title} />
            <h6>{item.category}</h6>
            <h3>{item.title}</h3>
            <button className="btn btn-sm rounded-circle float-start" style={{backgroundColor: '#F86338'}}>
                <img src={"/assets/rightArrow.svg"} width={20} height={25} alt="rightArrow" />
            </button>
        </div>
    )
}

export default Product;
