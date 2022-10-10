import Logo from "../components-svg/Logo"
import { MenuIcon,CartIcon } from "../components-svg/Icons"

const Navbar = ({onCartClicked}) => {
    return (
        <nav className="navbar  navbar-expand-md py-3 py-sm-4 ps-4 ps-lg-0">
            <div className="d-flex">
                <button className=" navbar-toggler me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon />
                </button>
                <a className=" navbar-brand mb-2 pe-0 pe-lg-4" href="#">
                    <Logo />
                </a>
                
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarNav" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 pe-md-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-2 nav-icons">
                    <img onClick={onCartClicked} className='' src={process.env.PUBLIC_URL + '/icon-cart.svg'} alt="" />
                    <a href="#" >
                       <img className=" img-fluid nav-profile-img ms-3 ms-lg-5" src={process.env.PUBLIC_URL + '/image-avatar.png'} alt="" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar