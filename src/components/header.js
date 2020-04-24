import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-md navbar-light">
          <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="myNavbar">
            <div class="container-fluid">
              <div class="row">
                
                <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">	
                  <div class="bottom-boder pb-3 ">
                    <button type="button" class="btn btn-round btn-light">
                                    <span><i class="fa fa-plus text-muted fa-lg"></i></span>
                                    <span>Create contact</span>
                                </button>
                  </div>
                  <ul class="navbar-nav flex-column mt-4">
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 current"><i class="fas fa-user text-muted fa-lg mr-3"></i>Contacts</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-history text-muted fa-lg mr-3"></i>Frequently contacted</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-plus-square text-muted fa-lg mr-3"></i>Merge&fix</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-chevron-up text-muted fa-lg mr-3"></i>Labels</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-plus text-muted fa-lg mr-3"></i>Create label</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-upload text-muted fa-lg mr-3"></i>Import</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-download text-muted fa-lg mr-3"></i>Export</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-print text-muted fa-lg mr-3"></i>Print</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-dark p-3 mb-2 sidebar-link"><i class="fas fa-caret-square-down text-muted fa-lg mr-3"></i>Other contacts</a></li>
                  </ul>
                </div>
                
                <div class="col-xl-12 col-lg-12 col-md-12 ml-auto fixed-top py-2 top-navbar">
                  <div class="row align-items-center">
                    <div class="col-md-2 toggle">                                
                       <a href="#" class="nav-link"><i class="fa fa-bars text-muted fa-lg"></i></a>
                       <a href="#" class="user-profile"><img src="img/contacts.png" alt=""/><span class="size">Contacts</span></a>                               
                    </div>
                    <div class="col-md-5">
                      <form>
                        <div class="input-group">
                          <input type="text" class="form-control search-input" placeholder="Search..."/>
                          <button type="button" class="btn btn-light search-button"><i class="fas fa-search text-danger"></i></button>    									
                        </div>
                      </form>
                    </div>
                    <div class="col-md-5 ">
                      <ul class="navbar-nav navbar-right">
                        <li class="nav-item icon-parent">
                        <a href="#" class="nav-link"  data-toggle="dropdown" aria-expanded="false"><i class="fas fa-question-circle text-muted fa-lg"></i>
                        </a>
                        <div class="dropdown-menu pull-right" >
                          <a class="dropdown-item"  href="#"> Send feedback</a>
                            <a class="dropdown-item"  href="#"> Help</a>
                        </div>
                      </li>
                        <li class="nav-item pl-2 icon-parent">
                        <a href="#" class="nav-link" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-cog text-muted fa-lg"></i></a>
                        <div class="dropdown-menu pull-right" >
                          <a class="dropdown-item"  href="#"> Undo changes</a>
                          <a class="dropdown-item"  href="#"> More setting</a>
                          </div>
                      </li>
                          <li class="nav-item pl-4 icon-parent"><a href="#" class="nav-link"><i class="fas fa-th text-muted fa-lg"></i></a></li>
                          <li class="nav-item pl-2"><a href="#" class="user-profile"><img src="img/user.jpg" alt=""/></a></li>
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
