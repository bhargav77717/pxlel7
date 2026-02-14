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
          <div className="stat-label">4.8M reviews</div>
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

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">About this app</h2>
        <div className="about-text">
          Lottery7 game is one of the world's most renowned online gambling operator offering a thrilling and entertaining range of games, including Poker, live casino, Chess, Slot games, Fishing, Lottery, and Sports betting. It is authorized and regulated by the government of Curacao and operates under license number matla issued to 886/JAZ. It has passed all compliance checks and holds legal authorization to conduct all gaming operations involving opportunities and betting.
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
          <div className="info-label">Offered By</div>
          <div className="info-value">Lottery7 Gaming Ltd</div>
        </div>
        <div className="info-item">
          <div className="info-label">Developer</div>
          <div className="info-value">contact@lottery7.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
