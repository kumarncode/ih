import { Link } from 'react-router-dom';
const Header = () => {
    const mgsChangeMenubar = (xmgs) => {
        xmgs.classList.toggle("mgschangemenu-bar");
    }
    return(
      <>
       <header id="header" className="header fixed-top headerbg-darkcolor nav-container">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar navbar-expand-lg navbar-light mgsb4navbar"> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>mgsChangeMenubar(this)}> <span className="menubar1"></span> <span className="menubar2"></span> <span className="menubar3"></span> </button>                        <a className="navbar-brand d-md-block d-lg-none" href="index.html"> <img className="logo logo-white" src="images/logo.png" alt="logo" /> <img className="logo logo-color" src="images/logo-color.png" alt="logo" /> </a>
                        <div className="collapse navbar-collapse"
                            id="navbarSupportedContent"> <a className="navbar-brand d-none d-sm-none d-md-none d-lg-block" href="index.html"> <img className="logo logo-white" src="images/logo.png" alt="logo" /> <img className="logo logo-color" src="images/logo-color.png" alt="logo" /> </a>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"> <Link className="nav-link active" to="/">Home</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/service">Service</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                {/* <li className="nav-item"> <Link className="nav-link" to="#pricingtable">Pricing</Link></li> */}
                                {/* <li className="nav-item"> <Link className="nav-link" to="#blog">Blog</Link></li> */}
                                <li className="nav-item"> <Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* </nav> */}
            </div>
        </div>
        {/* </div> */}
    </header>
      </>
    );
  }
  export default Header;