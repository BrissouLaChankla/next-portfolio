const Footer = () => (
    <div class="mt-section bg-dark">
        <div className="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 ">
            <div class="col-md-4 d-flex align-items-center">
                <small class="mb-3 mb-md-0 text-white">© {new Date().getFullYear()} Tous droits réservés</small>
            </div>
            <a className="navbar-brand fs-4 fw-bold text-white" href="#">Brissou</a>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-light" href="#">
                    <i className="bi bi-linkedin fs-4"></i>
                </a></li>
                <li class="ms-3"><a class="text-light" href="#">
                    <i className="bi bi-github fs-4"></i>
                </a></li>
                <li class="ms-3"><a class="text-light" href="#">
                    <i className="bi bi-file-earmark-person-fill fs-4"></i>
                </a></li>
            </ul>
        </footer>
        </div>
    </div>
)

export default Footer;