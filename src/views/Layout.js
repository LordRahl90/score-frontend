import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <div>
             <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Game Score</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                 <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/create" className="nav-link">Create</Link>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </nav>

                <Outlet />
        </div>
    );
}

export default Layout;