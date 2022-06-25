import React from 'react';
import AvatarImage from './asset/images/avatar.png';
import { MdDashboard, MdMenu, MdMessage, MdNotifications, MdPeople, MdSettings } from 'react-icons/md';
import './sass/_app.scss';

export const App = () => {
    return (
        <div className="wrapper">
            <aside className="sidebar h-100 position-fixed">
                <div className="sidebar__content h-100">
                    <div className="sidebar__header">
                        <div className="pt-4 pb-3 px-4">
                            <div className="d-flex flex-row align-items-center">
                                <img src={ AvatarImage } alt="Avatar" width={60} className="img-fluid" />
                                <div className="ms-3">
                                    <h6 className="mb-0 text-secondary fw-bold">Jose Duvan</h6>
                                    <small className="mb-0 text-secondary">Desarrollador Web/App</small>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="sidebar__body">
                        <div>
                            <div className="w-100">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-3 mx-3 py-1 rounded-3">
                                        <a href="/" className="nav-link d-flex flex-row align-items-center text-secondary">
                                            <MdDashboard className="me-2 fs-4"/>
                                            <span className="fs-6">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 mx-3 py-1 rounded-3">
                                        <a href="/" className="nav-link d-flex flex-row align-items-center text-secondary">
                                            <MdPeople className="me-2 fs-4"/>
                                            <span className="fs-6">Usuarios</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="main">
                <nav className="navbar py-0 px-3">
                    <div className="d-flex flex-row align-items-center">
                        <a href="#" className="btn navbar__btn-icon text-secondary position-relative">
                            <MdMenu className="fs-4"/>
                        </a>
                        <h4 className="text-secondary fw-bold mb-0">Dashboard</h4>
                    </div>
                    <div>
                        <a href="#" className="btn navbar__btn-icon text-secondary position-relative">
                            <MdNotifications className="fs-4"/>
                            <span className="navbar__notification-badge position-absolute translate-middle bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </a>
                        <a href="#" className="btn navbar__btn-icon text-secondary position-relative">
                            <MdMessage className="fs-4"/>
                            <span className="navbar__notification-badge position-absolute translate-middle bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </a>
                        <a href="#" className="btn navbar__btn-icon text-secondary position-relative">
                            <MdSettings className="fs-4"/>
                        </a>
                    </div>
                </nav>
                <div className="container-fluid py-4">
                    <div className="card text-secondary" style={{ backgroundColor: '#151A34' }}>
                        <div className="card-body">
                            <h4 className="card-title">Bienvenidos</h4>
                            <p>Pendientes</p>
                            <p>- Sidebar open</p>
                            <p>- Offcanvas para las configuraciones, notificaciones y mensajes</p>
                            <p>- Agregar modo noche</p>
                            <p>- Agregar funcionalidad de cambio de colores</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}