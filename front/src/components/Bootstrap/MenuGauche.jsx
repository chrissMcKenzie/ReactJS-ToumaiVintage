import React from 'react'

import "./MenuGauche.css"
const MenuGauche = ()=> {
  return (
    <nav className="container-fluid">
        <div className="row flex-nowrap">
            <div id="MenuGauche" className="col-auto col-md-3 col-xl-2 px-sm-5 px-0">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <ul id="menu" className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start shadow">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Accueil</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Panier</span> </a>
                            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                                <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>1</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>2</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>3</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>4</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    {/* <div className="dropdown pb-4"> */}
                        <ul className="text-primary shadow">
                            <li><a className="dropdown-item" href="/Déconnexion">Déconnexion</a></li>
                        </ul>
                    {/* </div> */}
                </div>
            </div>
            <div className="col py-3">
                Content area...
            </div>
        </div>
    </nav>
  )
}

export default MenuGauche
