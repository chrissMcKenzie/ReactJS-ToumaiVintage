import React from 'react'

import "./MenuGauche.css"
const MenuGauche = ()=> {
  return (
    <nav className="container-fluid">
        <div id="Row" className="row flex-nowrap">
            <div id="MenuGauche" className="col-auto col-xs-2 col-sm-2 col-md-2 col-xl-2 px-sm-4 px-0 mt-0">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <ul id="menu" className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                        <li className="nav-item shadow p-1">
                            <a href="/Profil" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Profil</span>
                            </a>
                        </li>
                        <li className="nav-item shadow p-1">
                            <a href="/Accueil" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Accueil</span>
                            </a>
                        </li>
                        <li className="nav-item shadow p-1 dropdown">
                            <a href="#Catégories_SubMenu" data-bs-toggle="collapse" data-bs-target="Catégories_SubMenu" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline dropdown-toggle" data-bs-toggle="dropdown">Catégories</span>
                            </a>
                            <ul className="collapse nav flex-column ms-1 dropdown-menu" id="Catégories_SubMenu" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="/Categorie/Ordinateurs" className="nav-link px-0"> <span className="d-none d-sm-inline">Ordinateurs</span></a>
                                </li>
                                <li>
                                    <a href="/Categorie/Ordinateurs" className="nav-link px-0"> <span className="d-none d-sm-inline">Téléphones</span></a>
                                </li>
                                <li>
                                    <a href="/Categorie/Ordinateurs" className="nav-link px-0"> <span className="d-none d-sm-inline">Sons et Accessoires</span></a>
                                </li>
                                <li>
                                    <a href="/Categorie/Ordinateurs" className="nav-link px-0"> <span className="d-none d-sm-inline">jeux vidéo</span></a>
                                </li>
                                <li>
                                    <a href="/Categorie/Ordinateurs" className="nav-link px-0"> <span className="d-none d-sm-inline">Appareils Photo</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item shadow p-1">
                            <a href="/Panier" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Panier</span>
                            </a>
                        </li>
                        <li className="nav-item shadow p-1">
                            <a href="/Payement" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Payement</span>
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <ul className="text-dark shadow">
                        <li><a className="dropdown-item" href="/Déconnexion">Déconnexion</a></li>
                    </ul>
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
