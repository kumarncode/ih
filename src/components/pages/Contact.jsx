const Contact = () =>{
    return(
        <>
           <section id="testimonials" className="testimonials testimonial-single parallax">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-wrap">
                        <div className="section-title-box">
                            <h2 className="section-title">What <strong>Client Say!</strong></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="owl-carousel owl-theme">
                        <div className="testimonial-item">
                            <div className="testimonial-image"> <img src="images/customer/customer-1.jpg" alt="Jonathon Hume" /></div>
                            <div className="testimonial-content">
                                <div className="rating-wrap">
                                    <div className="rating">
                                        <div className="stars five"></div>
                                    </div>
                                </div>
                                <p className="blockquote">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                <div className="testimonial-author">
                                    <h4 className="text-capitalize">Lisa Hume</h4>
                                    <p>CEO, MGSTech.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-image"> <img src="images/customer/customer-2.jpg" alt="John Doe" /></div>
                            <div className="testimonial-content">
                                <div className="rating-wrap">
                                    <div className="rating">
                                        <div className="stars five"></div>
                                    </div>
                                </div>
                                <p className="blockquote">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                <div className="testimonial-author">
                                    <h4 className="text-capitalize">John Doe</h4>
                                    <p>Designer, MGSUI</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-image"> <img src="images/customer/customer-3.jpg" alt="Jonathon Hume" /></div>
                            <div className="testimonial-content">
                                <div className="rating-wrap">
                                    <div className="rating">
                                        <div className="stars five"></div>
                                    </div>
                                </div>
                                <p className="blockquote">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                <div className="testimonial-author">
                                    <h4 className="text-capitalize">Mike Arthur</h4>
                                    <p>CEO, MGSIT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" className="contact">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-wrap">
                        <div className="section-title-box">
                            <h2 className="section-title">Wanna <strong>Talk</strong></h2>
                        </div>
                    </div>
                    <div className="intro-text text-center"> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my heart.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="title-box">
                        <h3 className="sub-title">Write <strong>Me</strong></h3>
                    </div>
                    <form id="contactForm" name="contactform" data-toggle="validator" className="contact-form">
                        <div id="msgContactSubmit" className="hidden"></div>
                        <div className="form-group col-sm-12">
                            <div className="help-block with-errors"></div> <input name="fname" id="fname" placeholder="Your Name*" className="form-control" type="text" required data-error="Please enter Name" />
                            <div className="input-group-icon"><i className="fa-solid fa-user"></i></div>
                        </div>
                        <div className="form-group col-sm-12">
                            <div className="help-block with-errors"></div> <input name="email" id="email" placeholder="Your Email*" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" className="form-control" type="email" required data-error="Please enter valid Email" />
                            <div className="input-group-icon"><i className="fa-solid fa-envelope"></i></div>
                        </div>
                        <div className="form-group col-sm-12">
                            <div className="help-block with-errors"></div> <input name="phone" id="phone" placeholder="Phone* Use Only Digit with/without + sign" className="form-control" type="text" required data-error="Please enter valid Phone" />
                            <div className="input-group-icon"><i className="fa-solid fa-phone"></i></div>
                        </div>
                        <div className="form-group col-sm-12">
                            <div className="help-block with-errors"></div><textarea rows="3" name="message" id="message" placeholder="Write comment here*" className="form-control" required data-error="Please enter message"></textarea>
                            <div className="input-group-icon"><i className="fa-solid fa-info"></i></div>
                        </div>
                        <div className="form-group col-sm-12"> <button type="submit" id="submit" className="btn btn-shutter-out-horizontal">Send</button></div> <span className="sub-text">* Required fields</span>
                        <div className="clearfix"></div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="title-box">
                        <h3 className="sub-title">Get Free <strong>Quote</strong></h3>
                    </div>
                    <div id="serviceQuoteForm" className="hireme-holder">
                        <form id="quoteForm" name="free-quote" data-toggle="validator" className="quoteForm">
                            <div id="msgQuoteSubmit" className="hidden"></div>
                            <div className="form-group">
                                <div className="help-block with-errors"></div> <input name="fname" id="quoteName" placeholder="Full Name*" className="form-control" required data-error="Please enter Name" type="text" />
                                <div className="input-group-icon"><i className="fa-solid fa-user"></i></div>
                            </div>
                            <div className="form-group">
                                <div className="help-block with-errors"></div> <input name="email" id="quoteEmail" placeholder="Email Address*" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" className="form-control" required data-error="Please enter valid Email" type="email" />
                                <div className="input-group-icon"><i className="fa-solid fa-envelope"></i></div>
                            </div>
                            <div className="form-group">
                                <div className="help-block with-errors"></div> <input name="phone" id="quotePhone" placeholder="Phone* Use Only Digit with/without + sign" className="form-control" required data-error="Please enter valid Phone" type="text" />
                                <div className="input-group-icon"><i className="fa-solid fa-phone"></i></div>
                            </div>
                            <div className="form-group">
                                <div className="help-block with-errors"></div> <input name="address" id="address" placeholder="Address*" className="form-control" required data-error="Please enter Address" type="text" />
                                <div className="input-group-icon"><i className="fa-solid fa-location-dot"></i></div>
                            </div>
                            <div className="form-group">
                                <div className="help-block with-errors"></div> <select name="service" id="quoteService" className="form-control" required data-error="Please Select Service"><option value="">--- Select a Sevice* ---</option><option value="Web Design">Web Design</option><option value="Graphic Design">Graphic Design</option><option value="Flash Design">Flash Design</option><option value="Photography">Photography</option><option value="App Devlopment">App Devlopment</option><option value="Support">Support</option> </select>
                                <div
                                    className="input-group-icon"><i className="fa-solid fa-gear"></i></div>
                    </div>
                    <div className="form-group bottomMargin0"> <button type="submit" id="quoteSubmit" className="btn btn-shutter-out-horizontal disabled" style={{pointerEvents:'all',cursor:'pointer'}}>Send Request</button></div> <span className="sub-text">* Required fields</span></form>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 text-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-item">
                            <div className="contact-item-inner">
                                <div className="contact-icon"> <i className="fa-solid fa-house"></i></div>
                                <div className="contact-desc">
                                    <h4>70 Trent Rd, Luton LU3 1TA</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-item">
                            <div className="contact-item-inner">
                                <div className="contact-icon"> <i className="fa-solid fa-envelope"></i></div>
                                <div className="contact-desc">
                                    <h4><a href="mailto:sales@yourwebsite.com">sales@yourwebsite.com</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-item">
                            <div className="contact-item-inner">
                                <div className="contact-icon"> <i className="fa-solid fa-phone"></i></div>
                                <div className="contact-desc">
                                    <h4><a href="tel:000-0000-0000">+000 0000 0000</a></h4>
                                </div>
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
export default Contact;