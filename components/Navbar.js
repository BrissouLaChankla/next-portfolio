import styles from '../styles/Navbar.module.scss';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom position-fixed w-100 z-3">
            <div className="container">
                <a className="navbar-brand" href="#">Brissou</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link ps-4 active" aria-current="page" href="#">Home</a>
                        <a className="nav-link ps-4" href="#">About</a>
                        <a className="nav-link ps-4" href="#">Services</a>
                        <a className="nav-link ps-4" href="#">Experience</a>
                        <a className="nav-link ps-4" href="#">Works</a>
                        <a className="nav-link ps-4" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
