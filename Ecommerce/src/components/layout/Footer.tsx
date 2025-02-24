
import '../../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="container">
          {/* Column 1 */}
          <div className="company-info">
            <img src="/image 3.png" alt="Safeer" className="footer-logo" />
            <p className="company-description">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To .
            </p>
            
            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="/twitter.svg" alt="Twitter" /></a>
                <a href="#"><img src="/linkedin.svg" alt="LinkedIn" /></a>
                <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="support-section">
            <h3>WE'RE ALWAYS HERE TO HELP</h3>
            <div className="support-items">
              <div className="support-item">
                <img src="/lifebuoy.svg" alt="help" />
                <div>
                  <h4>Help Center</h4>
                  <p>Help.Safeer.Com</p>
                </div>
              </div>

              <div className="support-item">
                <img src="/sms.svg" alt="email" />
                <div>
                  <h4>Support Email</h4>
                  <p>Care@Safeer.Com</p>
                </div>
              </div>

              <div className="support-item">
                <img src="/headphone.svg" alt="phone" />
                <div>
                  <h4>Call Center</h4>
                  <p>+962 70 010 010 (JO)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="download-section">
            <div className="app-download">
              <h3>Downloads Our App</h3>
              <div className="qr-section">
                <img src="/image 4.png" alt="QR Code" className="qr-code" />
                <div className="app-buttons">
  <a href="#" className="app-button">
    <img src="/Apple logo.svg" alt="App Store" />
    <span data-small-text="Download on the" data-large-text="App Store"></span>
  </a>
  <a href="#" className="app-button">
    <img src="/Google Play logo.svg" alt="Google Play" />
    <span data-small-text="GET IT ON" data-large-text="Google Play"></span>
  </a>
  <a href="#" className="app-button">
    <img src="/Galaxy Store icon.svg" alt="Galaxy Store" />
    <span data-small-text="Available on" data-large-text="Galaxy Store"></span>
  </a>
</div>
              </div>
            </div>

            <div className="payment-methods">
              <h4>Payment Methods</h4>
              <div className="payment-icons">
                <img src="/Visa.png" alt="Visa" />
                <img src="/Mastercard.png" alt="Mastercard" />
                <img src="/PayPal.png" alt="PayPal" />
                <img src="/Skrill.png" alt="Skrill" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="container">
          <p>© Safeer - All Rights Reserved</p>
          <div className="footer-links">
            <a href="#">About US</a>
            <a href="#">Warranty Policy</a>
            <a href="#">Sell With Us</a>
            <a href="#">Terms Of Sale</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer