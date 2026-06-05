export default function HomePage() {
  return (
    <>
<main>
  {/* Slider Area Start*/}
  <div className="slider-area slider-bg ">
    <div className="slider-active dot-style">
      <div className="single-slider d-flex align-items-center slider-height ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-9 ">
              <div className="hero__caption">
                <h1 data-animation="fadeInLeft" data-delay=".3s">Hosting digital  technology web  solution! </h1>
                <p data-animation="fadeInLeft" data-delay=".6s">Automated Control Panel with Up to 50% Off  Hosting Starting from $2.50/Month.</p>
                {/* Slider btn */}
                <div className="slider-btns">
                  {/* Hero-btn */}
                  <a data-animation="fadeInLeft" data-delay="1s" href="/services" className="btn radius-btn">get started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero__img d-none d-lg-block f-right">
                <img src="/assets/img/hero/hero_right.png" alt="" data-animation="fadeInRight" data-delay="1s" />
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className="single-slider d-flex align-items-center slider-height ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-9 ">
              <div className="hero__caption">
                <h1 data-animation="fadeInLeft" data-delay=".3s">Hosting digital  technology web  solution! </h1>
                <p data-animation="fadeInLeft" data-delay=".6s">Automated Control Panel with Up to 50% Off  Hosting Starting from $2.50/Month.</p>
                {/* Slider btn */}
                <div className="slider-btns">
                  {/* Hero-btn */}
                  <a data-animation="fadeInLeft" data-delay="1s" href="/services" className="btn radius-btn">get started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero__img d-none d-lg-block f-right">
                <img src="/assets/img/hero/hero_right.png" alt="" data-animation="fadeInRight" data-delay="1.5s" />
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className="single-slider d-flex align-items-center slider-height ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-9 ">
              <div className="hero__caption">
                <h1 data-animation="fadeInLeft" data-delay=".3s">Hosting digital  technology web  solution! </h1>
                <p data-animation="fadeInLeft" data-delay=".6s">Automated Control Panel with Up to 50% Off  Hosting Starting from $2.50/Month.</p>
                {/* Slider btn */}
                <div className="slider-btns">
                  {/* Hero-btn */}
                  <a data-animation="fadeInLeft" data-delay="1s" href="/services" className="btn radius-btn">get started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero__img d-none d-lg-block f-right">
                <img src="/assets/img/hero/hero_right.png" alt="" data-animation="fadeInRight" data-delay="1.5s" />
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
    {/* Slider Shape */}
    <div className="slider-shape d-none d-lg-block">
      <img className="slider-shape1" src="/assets/img/hero/top-left-shape.png" alt="" />
      <img className="slider-shape2" src="/assets/img/hero/right-top-shape.png" alt="" />
      <img className="slider-shape3" src="/assets/img/hero/left-botom-shape.png" alt="" />
    </div>
    {/* slider Social */}
    <div className="slider-social d-none d-md-block">
      <a href="#"><i className="fab fa-facebook-f" /></a>
      <a href="#"><i style={{fontStyle: 'normal', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>X</i></a>
      <a href="#"><i className="fas fa-globe" /></a>

    </div>
  </div>
  {/* Slider Area End */}
  {/*Services Area Start */}
  <div className="services-area section-padding30 fix">
    <div className="container">
      {/* Section Tittle */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle text-center mb-100">
            <span>Our Best Services</span>
            <h2>What we have for you</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services-wrapper mb-50">
            <div className="single-services">
              <div className="services-icon">
                <span className="flaticon-server" />
              </div>
              <div className="services-cap">
                <h3><a href="/services">Shared Hosting</a></h3>
                <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                <a href="/services" className="get-btn"><i className="ti-arrow-right" /> get started</a>
              </div>
            </div>
            <div className="services-shape">
              <span>.01</span>
              <img src="/assets/img/gallery/shape-services.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services-wrapper mb-50">
            <div className="single-services">
              <div className="services-icon">
                <span className="flaticon-green" />
              </div>
              <div className="services-cap">
                <h3><a href="/services">Reseller Hosting</a></h3>
                <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                <a href="/services" className="get-btn"><i className="ti-arrow-right" /> get started</a>
              </div>
            </div>
            <div className="services-shape">
              <span>.02</span>
              <img src="/assets/img/gallery/shape-services.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services-wrapper mb-50">
            <div className="single-services">
              <div className="services-icon">
                <span className="flaticon-servers" />
              </div>
              <div className="services-cap">
                <h3><a href="/services">Cloud Hosting</a></h3>
                <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                <a href="/services" className="get-btn"><i className="ti-arrow-right" /> get started</a>
              </div>
            </div>
            <div className="services-shape">
              <span>.03</span>
              <img src="/assets/img/gallery/shape-services.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services Area End */}
  {/* Search domain Start */}
  <section className="search-domain-area section-bg pt-140 pb-140" data-background="/assets/img/gallery/section_bg02.jpg">
    <div className="container">
      <div className="row align-items-end mb-80">
        <div className="col-xl-4">
          {/* Section Tittle */}
          <div className="section-tittle section-tittle2">
            <span>Get your domain</span>
            <h2>Search domain you want</h2>
          </div>
        </div>
        <div className="col-xl-8">
          {/* Search Box */}
          <form action="#" className="search-box">
            <div className="input-form">
              <input type="text" placeholder="Search your domain name here" />
            </div>
            <div className="select-form">
              <div className="select-itms">
                <select name="select" id="select1">
                  <option value>.com</option>
                  <option value>.bd</option>
                  <option value>.edu</option>
                  <option value>.gov</option>
                  <option value>.us</option>
                  <option value>.uk</option>
                  <option value>.pk</option>
                  <option value>.org</option>
                  <option value>.live</option>
                  <option value>.net</option>
                </select>
              </div>
            </div>
            <div className="search-form">
              <a href="#">search now</a>
            </div>	
          </form>	
          {/* Search Box End*/}
        </div>
      </div>
      {/* Domain List */}
      <div className="row">
        <div className="domain-list">
          <div className="single-domain">
            <span>.com</span>
            <p>$3.99/Year</p>
          </div>
          <div className="single-domain">
            <span>.net</span>
            <p>$2.99/Year</p>
          </div>
          <div className="single-domain">
            <span>.com</span>
            <p>$3.99/Year</p>
          </div>
          <div className="single-domain">
            <span>.co</span>
            <p>$5.99/Year</p>
          </div>
          <div className="single-domain">
            <span>.org</span>
            <p>$2.99/Year</p>
          </div>
          <div className="single-domain">
            <span>.live</span>
            <p>$1.99/Year</p>
          </div>
        </div>
      </div>
      {/* Domain List  End*/}
    </div>
  </section>
  {/* Search domain End */}
  {/*All startups Start */}
  <section className="all-starups-area section-padding2">
    {/* left Contents */}
    <div className="starups">
      <div className="starups-details">
        {/* Section Tittle */}
        <div className="section-tittle section-tittle3">
          <span>Get your domain</span>
          <h2>We are with you every step of the way</h2>
        </div>
        {/* details caption */}
        <div className="details-caption">
          <p>Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut labore egsfgt dolore magna aliqua. Ut encim ad minim veniam, quis nostrud exercitation ulclamco laboris nisi ufgut aliquip edgx ebrha.</p>
          <p>Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut labore egsfgt folorem.</p>
        </div>
        <a href="#" className="btn">get started</a>
      </div>
    </div>
    {/*Right Contents  */}
    <div className="starups-img">
      <img src="/assets/img/gallery/visit_bg.jpg" alt="" />
    </div>
  </section>
  {/*All startups End */}
  {/* work company Start*/}
  <section className="work-company">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          {/* Section Tittle */}
          <div className="section-tittle section-tittle3">
            <span>Get your domain</span>
            <h2>We are with you every step of the way</h2>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="logo-area">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-logo">
                  <img src="/assets/img/gallery/cisco_brand.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-logo">
                  <img src="/assets/img/gallery/cisco_brand2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-logo">
                  <img src="/assets/img/gallery/cisco_brand3.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-logo">
                  <img src="/assets/img/gallery/cisco_brand4.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-logo">
                  <img src="/assets/img/gallery/cisco_brand5.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-logo">
                  <img src="/assets/img/gallery/cisco_brand6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* work company End*/}
  {/* Our pricing Start */}
  <div className="our-pricing-area section-padding30 fix">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="tab-content" id="nav-tabContent">
            {/* First Tab */}
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">  
              <div className="single-pricing mb-30">
                <div className="pricing-caption text-center">
                  <div className="procing-logo">
                    <img src="/assets/img/icon/roket.png" alt="" />
                  </div>
                  <span>$ 05.00</span>
                  <div className="pricing-listing">
                    <ul>
                      <li>Increase traffic 50%</li>
                      <li>Social Media Marketing</li>
                      <li>10 Free Optimization</li>
                      <li>24/7  support</li>
                    </ul>
                  </div>
                  <a href="#" className="btn white-btn">Get the plan</a>
                </div>
                {/* pricing Shape */}
                <div className="pricing-shape">
                  <img className="pricing1" src="/assets/img/gallery/procing-shape1.png" alt="" />
                  <img className="pricing2" src="/assets/img/gallery/procing-shape2.png" alt="" />
                </div>
              </div>
            </div>
            {/* Second Tab */}
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="single-pricing  mb-30">
                <div className="pricing-caption text-center">
                  <div className="procing-logo">
                    <img src="/assets/img/icon/roket.png" alt="" />
                  </div>
                  <span>$ 05.00</span>
                  <div className="pricing-listing">
                    <ul>
                      <li>Increase traffic 50%</li>
                      <li>Social Media Marketing</li>
                      <li>10 Free Optimization</li>
                      <li>24/7  support</li>
                    </ul>
                  </div>
                  <a href="#" className="btn white-btn">Get the plan</a>
                </div>
                {/* pricing Shape */}
                <div className="pricing-shape">
                  <img className="pricing1" src="/assets/img/gallery/procing-shape1.png" alt="" />
                  <img className="pricing2" src="/assets/img/gallery/procing-shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing-caption */}
        <div className="col-lg-6 col-md-6">
          {/* Section Tittle */}
          <div className="section-tittle section-tittle3">
            <span>Our Best Services</span>
            <h2>Our pricing</h2>
            <p className="pt-20 pb-40">Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut labore egsfgt dolore magna aliqua. Ut encim ad minim veniam, quis nostrud exercitation ulclamco laboris nisi ufgut aliquip edgx ebrha.</p>
          </div>
          {/* Tab Button */}
          <div className="pricing-button">                                         
            <nav>                                                                     
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</a>
              </div>
            </nav>
          </div>
          {/* End Tab Button */}
        </div>
      </div>
    </div>
  </div>
  {/* Our pricing End */}
  {/* Testimonial Start */}
  <div className="testimonial-area testimonial-padding">
    <div className="container ">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-7">
          <div className="h1-testimonial-active">
            {/* Single Testimonial */}
            <div className="single-testimonial">
              {/* Testimonial Content */}
              <div className="testimonial-caption ">
                {/* founder */}
                <div className="testimonial-founder d-flex align-items-center mb-30">
                  <div className="founder-img">
                    <img src="/assets/img/testmonial/Homepage_testi.png" alt="" />
                  </div>
                  <div className="founder-text">
                    <span>Jahon Ann</span>
                    <p>CEO, Colorlib</p>
                  </div>
                </div>
                <div className="testimonial-top-cap">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice.</p>
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial">
              {/* Testimonial Content */}
              <div className="testimonial-caption ">
                {/* founder */}
                <div className="testimonial-founder d-flex align-items-center mb-30">
                  <div className="founder-img">
                    <img src="/assets/img/testmonial/Homepage_testi.png" alt="" />
                  </div>
                  <div className="founder-text">
                    <span>Jahon Ann</span>
                    <p>CEO, Colorlib</p>
                  </div>
                </div>
                <div className="testimonial-top-cap">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <div className="testimonial-banner">
            <img src="/assets/img/gallery/testimonail.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    {/* Shape */}
    <img src="/assets/img/testmonial/shape-testimonial.png" className="testimonial-shape d-none d-lg-block" alt="" />
  </div>
  {/* Testimonial End */}
  {/* Support Area Start */}
  <section className="support-area section-bg pt-150 pb-150" data-background="/assets/img/gallery/section_bg03.jpg">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-5">
          <div className="support-caption">
            {/* Section Tittle */}
            <div className="section-tittle section-tittle5">
              <span>Get your domain</span>
              <h2>24/7 Expert Support</h2>
              <p className="support-details">Our expert team is always on hand to help answer your questions, get you started, and grow your presence online. You can call, chat or email us any time!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="support-number">
            {/* Single contact */}
            <div className="single-contact text-center">
              <div className="contact-icon">
                <i className="fas fa-phone-volume" />
              </div>
              <div className="contact-number">
                <span>+1 514 648</span>
              </div>
            </div>
            {/* Single contact */}
            <div className="single-contact text-center">
              <div className="contact-icon">
                <i className="far fa-comment" />
              </div>
              <div className="contact-number">
                <span>Text Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Support Area End */}
  {/* Blog Area Start */}
  <section className="blogs-area section-padding30">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Section Tittle */}
          <div className="section-tittle text-center mb-80">
            <span>Our Blog</span>
            <h2>Our latest news</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blogs mb-100">
            <div className="blog-img">
              <img src="/assets/img/gallery/blog1.png" alt="" />
            </div>
            <div className="blog-cap">
              <span className="color1">23 Dec, 2020</span>
              <h4><a href="#">Addiction When Gambling Becomes</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blogs mb-100">
            <div className="blog-img">
              <img src="/assets/img/gallery/blog2.png" alt="" />
            </div>
            <div className="blog-cap">
              <span className="color1">23 Dec, 2020</span>
              <h4><a href="#">Addiction When Gambling Becomes</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blogs mb-100">
            <div className="blog-img">
              <img src="/assets/img/gallery/blog3.png" alt="" />
            </div>
            <div className="blog-cap">
              <span className="color1">23 Dec, 2020</span>
              <h4><a href="#">Addiction When Gambling Becomes</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Area End */}
</main>

    </>
  );
}