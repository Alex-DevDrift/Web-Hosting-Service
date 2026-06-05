export default function Footer() {
  return (
    <>
<footer>
  {/* Footer Start*/}
  <div className="footer-area">
    <div className="container">
      <div className="footer-top footer-padding">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                {/* logo */}
                <div className="footer-logo">
                  <a href="/"><img src="/assets/img/logo/logo2_footer.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>All packages</h4>
                <ul>
                  <li><a href="#">Package-1</a></li>
                  <li><a href="#">Package-2</a></li>
                  <li><a href="#">Package-3</a></li>
                  <li><a href="#">Custome</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Quick Link</h4>
                <ul>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/blog">News &amp; Articles</a></li>
                  <li><a href="#">Privacy Policy</a></li>     
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>+1 514 648 256</h4>
                <ul>
                  <li><a href="mailto:youremail@gmail.com">youremail@gmail.com</a></li>
                </ul>
                <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-xl-9 col-lg-9 ">
            <div className="footer-copy-right">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright ©2026 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
            {/* Footer Social */}
            <div className="footer-social f-right">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i style={{fontStyle: 'normal', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>X</i></a>
              <a href="#"><i className="fas fa-globe" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End*/}
</footer>

    </>
  );
}