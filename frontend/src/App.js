import { useEffect, useState } from 'react';
import '@/App.css';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [buttonText, setButtonText] = useState('Instant Install 10 secs');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered successfully:', registration.scope);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Capture the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      console.log('beforeinstallprompt event captured');
    };

    // Detect if app is already installed
    const handleAppInstalled = () => {
      console.log('LOT7 was installed');
      setButtonText('Installed');
      setButtonDisabled(true);
      setDeferredPrompt(null);
    };

    // Check if running in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setButtonText('Open');
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    // Redirect to Lottery7 registration page
    window.location.href = 'https://www.uuulottery7.com/#/register?invitationCode=3167818365044';
  };

  return (
    <div className="play-store-container">
      {/* App Header */}
      <div className="app-header">
        <img 
          src="https://customer-assets.emergentagent.com/job_lot7-mobile-store/artifacts/9cs2voqw_IMG_20260214_221630_606.jpg" 
          alt="LOT7 App Icon" 
          className="app-icon"
        />
        <div className="app-info">
          <h1 className="app-title">LOT7</h1>
          <div className="app-developer">Lottery7 Gaming Ltd</div>
          <div className="verified-badge">
            <svg className="verified-icon" viewBox="0 0 24 24" fill="#01875f">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
            Verified by Play Protect
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-value">
            4.8 <span className="star">★</span>
          </div>
          <div className="stat-label">215K reviews</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">1M+</div>
          <div className="stat-label">Downloads</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            18+
          </div>
          <div className="stat-label">Rated for 18+</div>
        </div>
      </div>

      {/* Welcome Bonus Banner */}
      <div className="bonus-banner">
        <div className="bonus-content">
          <div className="bonus-icon">🎁</div>
          <div className="bonus-text">
            <div className="bonus-title">EXCLUSIVE WELCOME OFFER</div>
            <div className="bonus-amount">UP TO ₹580 BONUS</div>
            <div className="bonus-subtitle">For New Players Only!</div>
          </div>
          <div className="bonus-badge">
            <span className="bonus-badge-text">LIMITED</span>
          </div>
        </div>
      </div>

      {/* Install Button */}
      <div className="install-section">
        <button 
          onClick={handleInstallClick}
          className="install-button"
          data-testid="install-button"
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>
        <div className="install-note">This app is available for your device</div>
      </div>

      {/* Screenshots */}
      <div className="screenshots-container">
        <h2 className="section-title">Screenshots</h2>
        <div className="screenshots-scroll">
          <img 
            src="https://customer-assets.emergentagent.com/job_lot7-mobile-store/artifacts/nky3arsg_IMG_20260214_235444_041.jpg" 
            alt="LOT7 Slot Machine Games" 
            className="screenshot"
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_lot7-mobile-store/artifacts/r7qzvd7q_IMG_20260214_235447_506.jpg" 
            alt="LOT7 Lottery Winning" 
            className="screenshot"
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_lot7-mobile-store/artifacts/4mzeeg1v_IMG_20260214_235448_733.jpg" 
            alt="LOT7 Game Dashboard" 
            className="screenshot"
          />
        </div>
      </div>

      {/* What's New Section */}
      <div className="whats-new-section">
        <h2 className="section-title">What's new</h2>
        <div className="update-badge">Version 2.5.1</div>
        <ul className="update-list">
          <li>🎮 New slot machine games added with higher payouts</li>
          <li>⚡ Performance improvements for faster game loading</li>
          <li>🎁 Enhanced bonus reward system</li>
          <li>🔧 Bug fixes and stability improvements</li>
          <li>💳 Improved payment processing speed</li>
        </ul>
      </div>

      {/* Ratings Breakdown */}
      <div className="ratings-section">
        <h2 className="section-title">Ratings and reviews</h2>
        <div className="ratings-container">
          <div className="rating-overview">
            <div className="rating-large">4.8</div>
            <div className="rating-stars-large">★★★★★</div>
            <div className="rating-count-text">215K reviews</div>
          </div>
          <div className="rating-bars">
            <div className="rating-bar-item">
              <span className="bar-label">5</span>
              <div className="bar-track">
                <div className="bar-fill" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="rating-bar-item">
              <span className="bar-label">4</span>
              <div className="bar-track">
                <div className="bar-fill" style={{width: '10%'}}></div>
              </div>
            </div>
            <div className="rating-bar-item">
              <span className="bar-label">3</span>
              <div className="bar-track">
                <div className="bar-fill" style={{width: '3%'}}></div>
              </div>
            </div>
            <div className="rating-bar-item">
              <span className="bar-label">2</span>
              <div className="bar-track">
                <div className="bar-fill" style={{width: '1%'}}></div>
              </div>
            </div>
            <div className="rating-bar-item">
              <span className="bar-label">1</span>
              <div className="bar-track">
                <div className="bar-fill" style={{width: '1%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Reviews */}
      <div className="reviews-section">
        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-avatar">R</div>
            <div className="reviewer-info">
              <div className="reviewer-name">Rajesh Kumar</div>
              <div className="review-stars">★★★★★</div>
            </div>
          </div>
          <div className="review-text">
            Amazing gaming experience! The slot games are very exciting and the bonuses are generous. Withdrawal process is super fast. Highly recommended! 🎰
          </div>
          <div className="review-date">February 10, 2026</div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-avatar">P</div>
            <div className="reviewer-info">
              <div className="reviewer-name">Priya Sharma</div>
              <div className="review-stars">★★★★★</div>
            </div>
          </div>
          <div className="review-text">
            Best lottery app I've used! Great variety of games including cricket betting and live casino. Customer support is excellent. 💯
          </div>
          <div className="review-date">February 8, 2026</div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-avatar">A</div>
            <div className="reviewer-info">
              <div className="reviewer-name">Amit Patel</div>
              <div className="review-stars">★★★★★</div>
            </div>
          </div>
          <div className="review-text">
            Won ₹45,000 last week! The app is smooth, secure and has many payment options. Welcome bonus was a great start. 🎉
          </div>
          <div className="review-date">February 5, 2026</div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">About this app</h2>
        <div className="about-text">
          Lottery7 game is one of the world's most renowned online gambling operator offering a thrilling and entertaining range of games, including Poker, live casino, Chess, Slot games, Fishing, Lottery, and Sports betting. It is authorized and regulated by the government of Curacao and operates under license number matla issued to 886/JAZ. It has passed all compliance checks and holds legal authorization to conduct all gaming operations involving opportunities and betting.
        </div>
      </div>

      {/* Data Safety Section */}
      <div className="data-safety-section">
        <h2 className="section-title">Data safety</h2>
        <div className="safety-intro">
          Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age.
        </div>
        <div className="safety-items">
          <div className="safety-item">
            <div className="safety-icon">🔒</div>
            <div className="safety-text">
              <div className="safety-label">Data encryption in transit</div>
              <div className="safety-desc">Your data is transferred securely</div>
            </div>
          </div>
          <div className="safety-item">
            <div className="safety-icon">🗑️</div>
            <div className="safety-text">
              <div className="safety-label">You can request data deletion</div>
              <div className="safety-desc">Contact developer for data removal</div>
            </div>
          </div>
          <div className="safety-item">
            <div className="safety-icon">✓</div>
            <div className="safety-text">
              <div className="safety-label">Committed to Google Play policies</div>
              <div className="safety-desc">Follows Google's content guidelines</div>
            </div>
          </div>
        </div>
      </div>

      {/* App Info Grid */}
      <div className="info-grid">
        <div className="info-item">
          <div className="info-label">Updated on</div>
          <div className="info-value">Feb 14, 2026</div>
        </div>
        <div className="info-item">
          <div className="info-label">Size</div>
          <div className="info-value">42M</div>
        </div>
        <div className="info-item">
          <div className="info-label">Installs</div>
          <div className="info-value">1,000,000+</div>
        </div>
        <div className="info-item">
          <div className="info-label">Current Version</div>
          <div className="info-value">2.5.1</div>
        </div>
        <div className="info-item">
          <div className="info-label">Requires Android</div>
          <div className="info-value">5.0 and up</div>
        </div>
        <div className="info-item">
          <div className="info-label">Content Rating</div>
          <div className="info-value">Rated for 18+ • Simulated Gambling</div>
        </div>
        <div className="info-item">
          <div className="info-label">In-app purchases</div>
          <div className="info-value">₹100 - ₹50,000 per item</div>
        </div>
        <div className="info-item">
          <div className="info-label">Offered By</div>
          <div className="info-value">Lottery7 Gaming Ltd</div>
        </div>
      </div>

      {/* Developer Contact */}
      <div className="developer-section">
        <h2 className="section-title">Developer contact</h2>
        <div className="developer-contacts">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span className="contact-text">contact@lottery7.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <span className="contact-text">www.uuulottery7.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span className="contact-text">Curacao, Licensed Gaming Operator</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="app-footer">
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <span className="footer-divider">•</span>
          <a href="#" className="footer-link">Terms of Service</a>
          <span className="footer-divider">•</span>
          <a href="#" className="footer-link">Support</a>
        </div>
        <div className="footer-text">
          © 2026 Lottery7 Gaming Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
