import { Link } from "react-router-dom";

const Home = () => {
    const nameSlider = [ "Emma Jones", "Proffessional", "Creative Director", "From United States" ];
  return(
    <>
     <section id="home" className="home">
        <div className="home-top-banner banner-1">
            <div className="display-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="banner-content banner-content-fullwidth">
                                    <h3>Hi, I'm</h3>
                                    <h1 className="header-title-text type-animate"> <a href="" className="typewrite" data-period="2000" data-type={JSON.stringify(nameSlider)}> <span className="wrap">Emma Jones</span> </a>&nbsp;</h1>
                                    <ul className="list-inline list-social">
                                        <li> <Link to="/" className="social-icon social-icon-facebook" target="_blank"> <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-facebook-f"></i> </Link></li>
                                        <li> <Link to="/about" className="social-icon social-icon-twitter" target="_blank"> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-twitter"></i> </Link></li>
                                        <li> <Link to="/" className="social-icon social-icon-linkedin" target="_blank"> <i className="fa-brands fa-linkedin"></i> <i className="fa-brands fa-linkedin"></i> </Link></li>
                                        <li> <Link to="/" className="social-icon social-icon-youtube" target="_blank"> <i className="fab fa-youtube"></i> <i className="fab fa-youtube"></i> </Link></li>
                                        <li> <Link to="/" className="social-icon social-icon-vimeo" target="_blank"> <i className="fa-brands fa-vimeo-v"></i> <i className="fa-brands fa-vimeo-v"></i> </Link></li>
                                        <li> <Link to="/" className="social-icon social-icon-pinterest" target="_blank"> <i className="fa-brands fa-pinterest"></i> <i className="fa-brands fa-pinterest"></i> </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
export default Home;