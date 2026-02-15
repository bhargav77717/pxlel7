# Meta Pixel React Integration - Complete Guide

## ✅ Implementation Summary

Meta Pixel has been properly integrated into your React application using modern React patterns and best practices.

---

## 📁 Files Created/Modified

### 1. **`/app/frontend/src/hooks/useMetaPixel.js`** (NEW)
Custom React hook that manages Meta Pixel lifecycle:
- ✅ Loads Facebook Pixel script dynamically
- ✅ Initializes pixel with ID: `1752255885574202`
- ✅ Tracks PageView automatically on mount
- ✅ Provides helper functions for custom events
- ✅ Includes error checking (`typeof window.fbq`)
- ✅ Console logging for debugging

### 2. **`/app/frontend/src/App.js`** (MODIFIED)
Main component updated to use the hook:
- ✅ Imports `useMetaPixel` hook
- ✅ Imports `trackEvent` helper
- ✅ Calls `useMetaPixel()` to initialize
- ✅ Tracks "Lead" event on install button click
- ✅ Includes 300ms delay before redirect (ensures tracking completes)

### 3. **`/app/frontend/public/index.html`** (MODIFIED)
Added noscript fallback:
- ✅ Noscript image tag for bots/crawlers
- ✅ Pixel ID: 1752255885574202
- ✅ Tracks PageView for non-JS environments

---

## 🎯 How It Works

### Initialization Flow

```javascript
1. React app mounts
   ↓
2. useMetaPixel() hook runs
   ↓
3. Check if window.fbq exists
   ↓
4. If not, inject Facebook Pixel script
   ↓
5. Initialize with fbq('init', '1752255885574202')
   ↓
6. Track PageView: fbq('track', 'PageView')
```

### Event Tracking Flow

```javascript
User clicks "Install" button
   ↓
handleInstallClick() function runs
   ↓
trackEvent('Lead', { ...params })
   ↓
Check if window.fbq exists
   ↓
fbq('track', 'Lead', params)
   ↓
Wait 300ms (ensure tracking completes)
   ↓
Redirect to registration page
```

---

## 📊 Events Being Tracked

### 1. **PageView** (Automatic)
- **When:** Page loads
- **How:** useMetaPixel hook
- **Code:** `fbq('track', 'PageView')`

### 2. **Lead** (On Button Click)
- **When:** User clicks "Instant Install 10 secs" button
- **How:** trackEvent() function
- **Code:**
```javascript
fbq('track', 'Lead', {
  content_name: 'Install Button Click',
  content_category: 'Registration',
  value: 580,
  currency: 'INR'
});
```

---

## 🔧 Usage Examples

### Track PageView (Already Automatic)
```javascript
// Handled automatically by useMetaPixel() hook
// No manual tracking needed
```

### Track Custom Event
```javascript
import { trackEvent } from '@/hooks/useMetaPixel';

// Track a custom event
trackEvent('Purchase', {
  value: 1000,
  currency: 'INR',
  content_name: 'Premium Package'
});
```

### Track Custom Named Event
```javascript
import { trackCustomEvent } from '@/hooks/useMetaPixel';

// Track a custom named event
trackCustomEvent('GameStarted', {
  game_type: 'slot_machine',
  game_name: 'Lucky 7'
});
```

---

## ✅ Error Handling

The implementation includes multiple safety checks:

### 1. **Window Undefined Check**
```javascript
if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
  // Safe to use fbq
}
```

### 2. **Script Already Loaded Check**
```javascript
if (typeof window !== 'undefined' && !window.fbq) {
  // Load script only if not already loaded
}
```

### 3. **Delayed Initialization**
```javascript
// If fbq not ready immediately, retry after 1 second
setTimeout(() => {
  if (typeof window.fbq === 'function') {
    window.fbq('init', PIXEL_ID);
  }
}, 1000);
```

### 4. **Console Warnings**
```javascript
console.warn('Meta Pixel not loaded - cannot track event');
```

---

## 🧪 Testing & Verification

### Method 1: Browser Console
```javascript
// Open browser console (F12)
typeof window.fbq
// Should return: "function"

// Test manual tracking
window.fbq('track', 'PageView')
// Should log in console and appear in Events Manager
```

### Method 2: Facebook Events Manager
1. Go to [Events Manager](https://business.facebook.com/events_manager2)
2. Select Pixel ID: **1752255885574202**
3. Click "Test Events"
4. Enter your website URL
5. Open your site in new tab
6. Watch for events in real-time:
   - ✅ PageView (on page load)
   - ✅ Lead (on button click)

### Method 3: Facebook Pixel Helper
1. Install [Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your website
3. Click extension icon
4. Should show:
   - ✅ Pixel ID: 1752255885574202
   - ✅ PageView event fired
   - ✅ No errors

### Method 4: Network Tab
1. Open DevTools (F12) → Network tab
2. Filter by "facebook"
3. Look for requests to:
   - `connect.facebook.net/en_US/fbevents.js`
   - `facebook.com/tr?id=1752255885574202`

---

## 🚀 Deployment

### Push to GitHub
```bash
git add .
git commit -m "Integrate Meta Pixel via React Hook with proper error handling"
git push origin main
```

### Vercel Auto-Deploy
- Vercel will automatically detect the push
- Build takes 2-3 minutes
- Check Vercel dashboard for "Ready" status

### Verify on Production
1. Visit your Vercel URL: `https://pxlelot7.vercel.app`
2. Open console: `typeof window.fbq` should be `"function"`
3. Check Events Manager for activity

---

## 📈 Facebook Ads Setup

### Create Conversion Event
1. Go to Events Manager
2. Click "Custom Conversions"
3. Create new conversion:
   - **Event:** Lead
   - **URL contains:** `/register?invitationCode=3167818365044`
   - **Name:** LOT7 Registration Click

### Optimize Campaigns
1. **Campaign Objective:** Conversions
2. **Optimization Event:** Lead
3. **Conversion Window:** 7-day click, 1-day view

### Audience Building
1. **Custom Audience:** Website visitors (last 30 days)
2. **Custom Audience:** People who triggered Lead event
3. **Lookalike Audience:** 1% of Lead converters

---

## 🔍 Troubleshooting

### Issue: "Pixel not detected"
**Solutions:**
1. Clear browser cache and hard refresh (Ctrl+Shift+R)
2. Disable ad blockers (they block Facebook scripts)
3. Test in Incognito mode
4. Check console for errors
5. Verify code is deployed to production

### Issue: Events not showing
**Solutions:**
1. Wait 5-10 minutes (events may be delayed)
2. Check if ad blocker is active
3. Verify Pixel ID is correct (1752255885574202)
4. Check Network tab for blocked requests
5. Look for console warnings

### Issue: "fbq is not a function"
**Solutions:**
1. The hook includes retry logic - wait 1 second
2. Check if script loaded: `document.querySelector('script[src*="fbevents"]')`
3. Clear cache and reload

---

## 📊 Expected Console Output

When working correctly, you should see:

```javascript
Meta Pixel script loaded
Meta Pixel initialized and PageView tracked: 1752255885574202
Service Worker registered successfully: /sw.js
Meta Pixel event tracked: Lead { content_name: 'Install Button Click', ... }
```

---

## 🎯 Best Practices

✅ **DO:**
- Keep Pixel ID in a constant
- Use error checking before calling `window.fbq`
- Add tracking delays before redirects (300ms)
- Test in incognito mode
- Monitor Events Manager regularly

❌ **DON'T:**
- Don't track PageView multiple times unnecessarily
- Don't assume `window.fbq` exists
- Don't forget the noscript fallback
- Don't block redirect while waiting for tracking

---

## 📝 Code Structure

```
frontend/
├── src/
│   ├── App.js                 # Uses useMetaPixel hook
│   └── hooks/
│       └── useMetaPixel.js    # Pixel management hook
└── public/
    └── index.html             # Noscript fallback
```

---

## 🔗 Resources

- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Events Manager](https://business.facebook.com/events_manager2)
- [Pixel Helper Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

---

**Status:** ✅ Fully Implemented & Working
**Pixel ID:** 1752255885574202
**Last Updated:** February 15, 2026
