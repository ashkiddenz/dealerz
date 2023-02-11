import '../../styles/header.css'

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
                    <a href="/"><img src={callCentre} width={25} height={25} alt="callCentre"/><span className="header-span-text px-3">Call Center</span></a>
                    <a href="/"><img src={shipping} width={25} height={25} alt="shipping"/><span className="header-span-text">Shipping & Returns</span></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
