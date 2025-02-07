import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <>
      <section className="footer-demo">
        <h1 className="footer-title">
          Let Nextcent do the work so you don't have to!
        </h1>
        <button className="demo-button">
          <span>Get a Demo</span>
          <img src="/Images/arrow_right_white.png" alt="Arrow right" />
        </button>
      </section>

      <footer className="footer">
        <div className="company-info">
          <div className="logo">
            <img src="/Images/icon_footer.png" alt="Nexcent" />
            <span>Nexcent</span>
          </div>
          <div className="copyright">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          <div className="social-links">
            <div className="social-icon">
              <img src="/Images/instagram.png" alt="Instagram" />
            </div>
            <div className="social-icon">
              <img src="/Images/dribble.png" alt="Dribble" />
            </div>
            <div className="social-icon">
              <img src="/Images/twitter.png" alt="Twitter" />
            </div>
            <div className="social-icon">
              <img src="/Images/youtube.png" alt="YouTube" />
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div className="col">
            <h4>Support</h4>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="col">
            <h4>Stay up to date</h4>
            <div className="email-input">
              <input type="email" placeholder="Your email address" />
              <button className="send-button">
                <img src="/Images/send.png" alt="Send" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;