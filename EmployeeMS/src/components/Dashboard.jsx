import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css'; // Import your custom CSS file

const Dashboard = () => {
    const navLinks = [
        { to: '/dashboard', label: 'Dashboard', icon: 'speedometer2' },
        { to: '/manage-employees', label: 'Manage Employees', icon: 'people' },
        { to: '/category', label: 'Category', icon: 'grid' },
        { to: '/profile', label: 'Profile', icon: 'person' },
        { to: '/logout', label: 'Logout', icon: 'arrow-right-circle' },
    ];

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* Sidebar */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
                        <Link to="/dashboard" className="navbar-brand">
                            something
                        </Link>
                        <ul className="nav flex-column">
                            {navLinks.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <Link to={link.to} className="nav-link">
                                        <i className={`bi bi-${link.icon} me-2`}></i>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col p-0 m-0">
                    <div className='p-2 d-flex justify-content-center shadow'>
                        <h4>Employee Management System</h4>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
