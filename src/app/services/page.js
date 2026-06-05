export default function ServicesPage() {
  return (
    <>
<main>
  {/* Hero Start*/}
  <div className="slider-area slider-bg ">
    <div className="single-slider d-flex align-items-center slider-height2 ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center pt-50">
              <h2>Services</h2>
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
  </div>
  {/*Hero End */}
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
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services-wrapper mb-50">
            <div className="single-services">
              <div className="services-icon">
                <span className="flaticon-servers" />
              </div>
              <div className="services-cap">
                <h3><a href="/services">Shared Hosting</a></h3>
                <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                <a href="/services" className="get-btn"><i className="ti-arrow-right" /> get started</a>
              </div>
            </div>
            <div className="services-shape">
              <span>.04</span>
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
              <span>.05</span>
              <img src="/assets/img/gallery/shape-services.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services-wrapper mb-50">
            <div className="single-services">
              <div className="services-icon">
                <span className="flaticon-server" />
              </div>
              <div className="services-cap">
                <h3><a href="/services">Cloud Hosting</a></h3>
                <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                <a href="/services" className="get-btn"><i className="ti-arrow-right" /> get started</a>
              </div>
            </div>
            <div className="services-shape">
              <span>.06</span>
              <img src="/assets/img/gallery/shape-services.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services Area End */}
</main>

    </>
  );
}