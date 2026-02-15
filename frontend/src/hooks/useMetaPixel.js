import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PIXEL_ID = '1752255885574202';

/**
 * Custom hook to initialize and manage Meta Pixel
 * Tracks PageView on every route change
 */
export const useMetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Meta Pixel if not already loaded
    if (typeof window !== 'undefined' && !window.fbq) {
      (function(f,b,e,v,n,t,s) {
        if(f.fbq) return;
        n=f.fbq=function(){
          n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
        };
        if(!f._fbq) f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      
      // Initialize with Pixel ID
      if (typeof window.fbq === 'function') {
        window.fbq('init', PIXEL_ID);
        console.log('Meta Pixel initialized:', PIXEL_ID);
      }
    }
  }, []); // Only run once on mount

  // Track PageView on every route change
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      console.log('Meta Pixel PageView tracked:', location.pathname);
    }
  }, [location]); // Run whenever route changes

  return null;
};

/**
 * Track custom events
 * @param {string} eventName - Name of the event (e.g., 'Lead', 'Purchase')
 * @param {object} params - Optional parameters for the event
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
    console.log('Meta Pixel event tracked:', eventName, params);
  } else {
    console.warn('Meta Pixel not loaded - cannot track event:', eventName);
  }
};

/**
 * Track custom conversion event
 * @param {string} eventName - Custom event name
 * @param {object} params - Event parameters
 */
export const trackCustomEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
    console.log('Meta Pixel custom event tracked:', eventName, params);
  } else {
    console.warn('Meta Pixel not loaded - cannot track custom event:', eventName);
  }
};

export default useMetaPixel;
