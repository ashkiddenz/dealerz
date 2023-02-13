import './styles.css'

const Hero = (props) => {
return (
    <div className="row border bg-light" style={{height:'auto'}} >
        <div className="col-md-6">
            <div className="d-flex justify-content-between" style={{paddingLeft:68}}>
                <img src={'/assets/ellipse153.svg'} alt="ellipse153"/>
                <img src={'/assets/ellipse156.svg'} alt="ellipse156" style={{paddingTop:80,paddingRight:110}}/>
            </div>
            <div className="d-flex justify-content-between" style={{paddingLeft:119,paddingTop:323,paddingBottom:167}}>
                <img src={'/assets/ellipse157.svg'} alt="ellipse157"/>
                <img src={'/assets/ellipse154.svg'} alt="ellipse154"/>
            </div>
        </div>
        <div className="col-md-6" style={{paddingLeft:94}}>
            <div className="text-end">
                <img src={'/assets/ellipse155.svg'} alt="ellipse155" style={{paddingTop:73,paddingRight:172}}/>
            </div>
            <div className="text-start">
                <h1 className="premium-title">Your Premium<br/>Sound, Unplugged</h1>
                <p className="premium-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="text-end">
                <img src={'/assets/ellipse158.svg'} alt="ellipse158" style={{paddingTop:26,paddingRight:208}} />
            </div>
            <div className="text-start" style={{paddingTop:30}}>
                <button className="btn find-out-more-button">Find out More</button>
                <img src={'/assets/ellipse159.svg'} alt="ellipse159" style={{paddingLeft:179,paddingTop:125}}/>
            </div>
        </div>
    </div>
 
)
 
}

export default Hero
