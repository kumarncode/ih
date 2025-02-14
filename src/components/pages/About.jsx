import data from './dummy.json';
const About = () => {
  console.log(data.about[0].experience)
    return(
      <>
       <section id="about" className="about about-timeline-style">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-wrap">
                        <div className="section-title-box">
                            <h2 className="section-title">{data.about[0].heading1} <strong>{data.about[0].heading1}</strong></h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="profile-image"> <img src={data.about[0].imgUrl} alt={data.about[0].heading1+ " " +data.about[0].heading2} /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-text">
{data.about[0].details.map((item,index)=><p key={index}>{item.detail}</p>)}
                                <div className="button-holder"> <a className="btn btn-shutter-out-horizontal" href="#">Download Resume</a> <a className="btn btn-shutter-out-horizontal" href="#contact">Hire Me</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="nav-tab-menu">
                        <ul className="nav nav-tabs" id="mgsAboutTab" role="tablist">
                            <li className="nav-item" role="presentation"> <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true"> <i className="fa-solid fa-paper-plane"></i> <span className="tab-title text-bold">Experience</span> </button></li>
                            <li
                                className="nav-item" role="presentation"> <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false"> <i className="fa-solid fa-graduation-cap"></i> <span className="tab-title text-bold">Education</span> </button></li>
                                <li
                                    className="nav-item" role="presentation"> <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false"> <i className="fa-solid fa-trophy"></i> <span className="tab-title text-bold">Award</span> </button></li>
                                    <li
                                        className="nav-item" role="presentation"> <button className="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false"> <i className="fa-solid fa-gem"></i> <span className="tab-title text-bold">Skills</span> </button></li>
                        </ul>
                    </div>
                    <div className="tab-content" id="mgsAboutTabContent">
                        <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                            <div className="icon-holder experience"> <i className="fa-solid fa-paper-plane"></i> <span className="tab-content-title text-bold">Experience</span></div>
                            <ul className="timeline">
                                {data.about[0].experience.map((item, index)=>
                                  <li key={item.id} className={index%2===0?"timeline-left":"timeline-right"}>
<div className="timeline-badge"> <i className="fa-solid fa-calendar"></i>
                                        <p className={index%2===0?"date":"date-inverted"}>{item.duration}</p>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="experience-content">
                                            <h4>{item.cname}</h4>
                                            <h5>{item.designation}</h5>
                                            <p>{item.cabout}</p>
                                        </div>
                                    </div>
                                  </li>
                                )}
                                
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                            <div className="icon-holder education"> <i className="fa-solid fa-graduation-cap"></i> <span className="tab-content-title text-bold">Education</span></div>
                            <ul className="timeline">
                            {data.about[0].education.map((item, index)=>
                                  <li key={item.id} className={index%2===0?"timeline-left":"timeline-right"}>
<div className="timeline-badge"> <i className="fa-solid fa-calendar"></i>
                                        <p className={index%2===0?"date":"date-inverted"}>{item.duration}</p>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="experience-content">
                                            <h4>{item.cname}</h4>
                                            <h5>{item.course}</h5>
                                            <p>{item.cabout}</p>
                                        </div>
                                    </div>
                                  </li>
                                )}
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                            <div className="icon-holder education"> <i className="fa-solid fa-trophy"></i> <span className="tab-content-title text-bold">Award</span></div>
                            <ul className="timeline">
                            {data.about[0].awards.map((item, index)=>
                                  <li key={item.id} className={index%2===0?"timeline-left":"timeline-right"}>
<div className="timeline-badge"> <i className="fa-solid fa-calendar"></i>
                                        <p className={index%2===0?"date":"date-inverted"}>{item.duration}</p>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="experience-content">
                                            <h4>{item.aname}</h4>
                                            <h5>{item.afrom}</h5>
                                            <p>{item.cabout}</p>
                                        </div>
                                    </div>
                                  </li>
                                )}
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                            <div className="progressbar-wrap">
                                <div className="row">
                                {data.about[0].skills.map((item, index)=>
                                <div className="col-sm-3" key={index}>
                                        <div className="progressbar" data-animate="false">
                                            <div className="circle" data-percent={item.percentage} data-color="#04b962">
                                                <div></div>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </div>)}
                                   
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
  export default About;