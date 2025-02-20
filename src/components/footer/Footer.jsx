const Footer = () => {
    return(
      <>
      <footer id="footer" className="footer">
        <div className="container">
            <div className="footer-top clearfix">
                <div className="row">
                    <div className="col-md-4">
                        <div className="columnbottom-margin subscribe-form-wrap">
                            <h4 className="widget-title">Subscribe <span>NewsLetter</span></h4>
                            <p>By subscribing to our mailing list you will always get latest news from us.</p>
                            <div className="mc-form-holder">
                                <form id="mc-form"> <input id="mc-email" className="form-control" placeholder="email address" name="EMAIL" type="email" /> <button className="btn" type="submit"><i className="fa-solid fa-paper-plane"></i></button> <label htmlFor="mc-email"></label></form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="columnbottom-margin recent-work-wrap">
                            <h4 className="widget-title">Recent <span>Work</span></h4>
                            <div className="latest-pfolio">
                                <div className="row">
                                    <div className="col-sm-4 no-space">
                                        <div className="portfolio-wrapper"> <img src="images/portfolio/thumb/3.jpg" alt="Portfolio Title" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-overlay-inner">
                                                    <div className="portfolio-overlay-content">
                                                        <div className="portfolio-link"> <a title="Details" href="single-portfolio.html"><i className="fa-solid fa-link"></i></a> <a data-lightbox="recentwork" data-title="Image Preview" href="images/portfolio/3.jpg"><i className="fa-solid fa-magnifying-glass"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 no-space">
                                        <div className="portfolio-wrapper"> <img src="images/portfolio/thumb/6.jpg" alt="Portfolio Title" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-overlay-inner">
                                                    <div className="portfolio-overlay-content">
                                                        <div className="portfolio-link"> <a title="Details" href="single-portfolio.html"><i className="fa-solid fa-link"></i></a> <a data-lightbox="recentwork" data-title="Image Preview" href="images/portfolio/6.jpg"><i className="fa-solid fa-magnifying-glass"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 no-space">
                                        <div className="portfolio-wrapper"> <img src="images/portfolio/thumb/4.jpg" alt="Portfolio Title" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-overlay-inner">
                                                    <div className="portfolio-overlay-content">
                                                        <div className="portfolio-link"> <a title="Details" href="single-portfolio.html"><i className="fa-solid fa-link"></i></a> <a data-lightbox="recentwork" data-title="Image Preview" href="images/portfolio/4.jpg"><i className="fa-solid fa-magnifying-glass"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="columnbottom-margin contact-info-wrap">
                            <h4 className="widget-title">Contact <span>Details</span></h4>
                            <ul className="contact-info list-unstyled">
                                <li><i className="fa-solid fa-house"></i> 70 Trent Rd, Luton LU3 1TA, UK</li>
                                <li><i className="fa-solid fa-phone"></i> <a href="tel:000-0000-0000">000 0000 0000</a></li>
                                <li><i className="fa-solid fa-envelope"></i> <a href="mailto:sales@yourwebsite.com">sales@yourwebsite.com</a></li>
                            </ul>
                            <ul className="list-inline list-social clearfix">
                                <li className="list-inline-item"> <a href="#" className="social-icon social-icon-small social-icon-facebook"> <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-facebook-f"></i> </a></li>
                                <li className="list-inline-item"> <a href="#" className="social-icon social-icon-small social-icon-twitter"> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-twitter"></i> </a></li>
                                <li className="list-inline-item"> <a href="#" className="social-icon social-icon-small social-icon-gplus"> <i className="fa-brands fa-google-plus-g"></i> <i className="fa-brands fa-google-plus-g"></i> </a></li>
                                <li className="list-inline-item"> <a href="#" className="social-icon social-icon-small social-icon-vimeo"> <i className="fa-brands fa-vimeo-v"></i> <i className="fa-brands fa-vimeo-v"></i> </a></li>
                                <li className="list-inline-item"> <a href="#" className="social-icon social-icon-small social-icon-pinterest"> <i className="fa-brands fa-pinterest"></i> <i className="fa-brands fa-pinterest"></i> </a></li>
                                <li className="list-inline-item"> <a href="#" className="social-icon social-icon-small social-icon-linkedin"> <i className="fa-brands fa-linkedin"></i> <i className="fa-brands fa-linkedin"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12"> <a href="#" className="footer-logo-link"><img className="footer-logo" src="images/footer-logo.png" alt="Steve" /></a>
                    <p className="text-center copyright">&copy; <span id="mgsYear"></span> <a href="https://1.envato.market/kPy00" className="footer-site-link">MGScoder</a> All rights reserved. <a href="https://1.envato.market/7B3dY" className="footer-site-link">Buy AboutMe HTML Template</a></p>
                </div>
            </div>
        </div>
    </footer>
      </>
    );
  }
  export default Footer;