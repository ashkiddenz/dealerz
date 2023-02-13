import React from "react";

const Footer = () => {
    return (
          <div className="row">
              <div className="col-md-8 col-12 d-flex justify-content-start align-items-start">
                    <div className="footer-square"></div>
                    <div className="text-start" style={{paddingLeft:56,paddingTop:69}}>
                        <img src={'/assets/footerLogo.svg'} alt="footerLogo"/>
                        <p className="footer-text" style={{paddingTop:32}}>Privacy Policy</p>
                        <p className="footer-text" style={{paddingTop:24}}>Terms and Conditions</p>
                        <p className="footer-text" style={{paddingTop:159}}>@2020 TanahAir Studio. All rights reserved.</p>
                    </div>
              </div>
              <div className="col-md-4 col-12">
                  <div className="d-flex justify-content-end circle-group">
                      <div id="circle">Yt</div>
                      <div id="circle">Fb</div>
                      <div id="circle">Tw</div>
                      <div id="circle">Ig</div>
                  </div>
              </div>
          </div>
    )
}

export default Footer
