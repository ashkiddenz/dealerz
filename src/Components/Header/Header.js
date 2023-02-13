import '../../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    const logo = "/assets/logo.png";
    const callCentre = "/assets/callCentre.svg"
    const shipping = "/assets/shipping.svg"
    return (
        <header className="container-fluid mt-4">
            <div className="row brand-header-logo">
                <div className="col text-start">
                <img src={logo}  alt="logo"/>
                </div>
                <div className="col header-content">
                    <a style={{marginRight:30}} href="/"><img src={callCentre} width={25} height={25} alt="callCentre"/><span className="header-span-text px-3">Call Center</span></a>
                    <a href="/"><img src={shipping} width={25} height={25} alt="shipping"/><span className="header-span-text">Shipping & Returns</span></a>
                </div>
            </div>
            <div className="row mt-4" style={{backgroundColor:"#e5e5e5"}}>
                <div className="col-md-3 col-12 d-flex align-items-center">
                    <nav className="navbar navbar-expand">
                                <div className="navbar-nav" style={{marginLeft:92}}>
                                    <a className="nav-link active myNavLinks" aria-current="page" href="#">Shop</a>
                                    <a className="nav-link myNavLinks" href="#">Promo</a>
                                    <a className="nav-link myNavLinks" href="#">About</a>
                                    <a className="nav-link myNavLinks" href="#">Blog</a>
                                </div>
                    </nav>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <form action="" className="mysearchForm my-3">
                        <div className="p-1 bg-light mySearchBar">
                            <div className="input-group">
                                <input type="search" placeholder="Search what you need"
                                       aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link text-primary">
                                            <img src={'/assets/search.png'}/></button>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3 col-12 d-grid align-items-center ">
                    <nav className="navbar navbar-expand align-items-center">
                        <div className="navbar-nav">
                            <a className="nav-link myIconLinks" href="#">
                                <img src={'/assets/heart.svg'}/>
                            </a>
                            <a className="nav-link myIconLinks" href="#">
                                <img src={'/assets/shoppingcart.svg'}/>
                            </a>
                            <a className="nav-link myIconLinks" href="#" style={{color: 'black',fontSize: 19}}>
                                <FontAwesomeIcon icon={faUser} size="lg" color="black" className="highlight-icon"/>
                            </a>
                            <a className="nav-link myIconLinks" href="#">
                                <img src={'/assets/bell.svg'}/>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
