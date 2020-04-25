import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-light">
          <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">	
                  <div className="bottom-boder pb-3 ">
                    <button type="button" className="btn btn-round btn-light">
                      <span><i className="fa fa-plus text-muted fa-lg"></i></span>
                      <span>Create contact</span>
                    </button>
                  </div>
                  <ul className="navbar-nav flex-column mt-4">
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 current"><i className="fas fa-user text-muted fa-lg mr-3"></i>Contacts</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-history text-muted fa-lg mr-3"></i>Frequently contacted</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-plus-square text-muted fa-lg mr-3"></i>Merge&fix</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-chevron-up text-muted fa-lg mr-3"></i>Labels</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-plus text-muted fa-lg mr-3"></i>Create label</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-upload text-muted fa-lg mr-3"></i>Import</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-download text-muted fa-lg mr-3"></i>Export</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-print text-muted fa-lg mr-3"></i>Print</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-caret-square-down text-muted fa-lg mr-3"></i>Other contacts</a></li>
                  </ul>
                </div>
                
                <div className="col-xl-12 col-lg-12 col-md-12 ml-auto fixed-top py-2 top-navbar">
                  <div className="row align-items-center">
                    <div className="col-md-2 toggle">                                
                       <a href="#" className="nav-link"><i className="fa fa-bars text-muted fa-lg"></i></a>
                       <a href="#" className="user-profile"><img src="img/contacts.png" alt=""/><span className="size">Contacts</span></a>                               
                    </div>
                    <div className="col-md-5">
                      <form>
                        <div className="input-group">
                          <input type="text" className="form-control search-input" placeholder="Search..."/>
                          <button type="button" className="btn btn-light search-button"><i className="fas fa-search text-danger"></i></button>    									
                        </div>
                      </form>
                    </div>
                    <div className="col-md-5 ">
                      <ul className="navbar-nav navbar-right">
                        <li className="nav-item icon-parent">
                        <a href="#" className="nav-link"  data-toggle="dropdown" aria-expanded="false"><i className="fas fa-question-circle text-muted fa-lg"></i>
                        </a>
                        <div className="dropdown-menu pull-right" >
                          <a className="dropdown-item"  href="#"> Send feedback</a>
                            <a className="dropdown-item"  href="#"> Help</a>
                        </div>
                      </li>
                        <li className="nav-item pl-2 icon-parent">
                        <a href="#" class="nav-link" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-cog text-muted fa-lg"></i></a>
                        <div className="dropdown-menu pull-right" >
                          <a className="dropdown-item"  href="#"> Undo changes</a>
                          <a className="dropdown-item"  href="#"> More setting</a>
                          </div>
                      </li>
                          <li className="nav-item pl-4 icon-parent"><a href="#" class="nav-link"><i className="fas fa-th text-muted fa-lg"></i></a></li>
                          <li className="nav-item pl-2"><a href="#" className="user-profile"><img src="img/user.jpg" alt=""/></a></li>
                      </ul>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </nav>
        )
    }
}

export default header
