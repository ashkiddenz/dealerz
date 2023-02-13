import React from "react";

const Form = () => {
  return (
      <div className="form-container">
            <div className="form-box">
                <h1 className="form-header">Join Our News Letters</h1>
                <div className="form-text-main">
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                    <p>Iterative approaches to corporate strategy foster</p>
                </div>
                <div className="d-flex justify-content-center">
                    <form action="" className="email-form">
                        <div className="p-1 bg-light mySearchBar">
                            <div className="input-group" style={{height:64}}>
                                <input type="search" placeholder="Insert your mail here"
                                       aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                                <div className="input-group-append d-flex">
                                    <button id="button-addon1" type="submit" className="btn btn-link text-primary">
                                        <div id="square" className="d-flex justify-content-center align-items-center">
                                            <div id="circle-inside-square" className="d-flex justify-content-center align-items-center">
                                                <img alt="arrow-inside-circle" src={'/assets/arrow-inside-circle.svg'} />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{height:80}}></div>
            </div>
      </div>
  )
}

export default Form
