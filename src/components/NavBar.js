import './NavBar.css'
import logo2 from './logo.jpg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={logo2} alt="" width="80" height="80"/>
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    <a className="nav-link" href="/#">Deco</a>
                    <a className="nav-link" href="/#">Espejos</a>
                    <a className="nav-link" href="/#">Aromas</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar