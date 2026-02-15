# Meta Pixel Not Detected - Troubleshooting Guide

## Issue: "A pixel wasn't detected on this website"

This error appears in Facebook Events Manager when Meta can't find the pixel code on your website.

---

## ✅ SOLUTION - Step by Step

### Step 1: Make Sure Code is Deployed to Production

The pixel code is in your repo, but **you need to push it to GitHub and deploy to Vercel**:

```bash
# 1. Commit the pixel code
git add frontend/public/index.html frontend/src/App.js
git commit -m "Fix Meta Pixel integration"
git push origin main

# 2. Vercel will auto-deploy (wait 2-3 minutes)
```

### Step 2: Verify Pixel on Your Live Site

**Test URL:** Visit your actual Vercel production URL (not localhost!)

Example: `https://your-project-name.vercel.app`

**Quick Test:**
1. Open your production site
2. Press F12 (open Developer Tools)
3. Go to Console tab
4. Type: `window.fbq`
5. Should return: `function` (not undefined)

If it returns `undefined`, the pixel isn't loading.

### Step 3: Check for Ad Blockers

**IMPORTANT:** Ad blockers prevent Facebook Pixel from loading!

**Disable these before testing:**
- uBlock Origin
- AdBlock Plus
- Privacy Badger
- Brave Shields
- Any browser privacy extensions

**How to test:**
1. Open your site in **Incognito/Private mode**
2. Or use a different browser without extensions
3. Check if `window.fbq` exists

### Step 4: Use the Test Page

We created a test page specifically for this: 

**Local test:**
```
http://localhost:3000/pixel-test.html
```

**Production test:**
```
https://your-vercel-url.vercel.app/pixel-test.html
```

This page will tell you if:
- ✅ Pixel is loaded
- ✅ fbq function exists
- ✅ Script is in DOM
- ❌ What's blocking it

### Step 5: Test in Facebook Events Manager

1. **Go to:** [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. **Select Pixel:** 1921927635105787
3. **Click:** "Test Events" (left menu)
4. **Enter:** Your PRODUCTION URL (Vercel URL, not localhost!)
5. **Open:** Your site in a new tab
6. **Watch:** Events should appear in Events Manager in real-time

**Expected Events:**
- PageView (immediately on page load)
- Lead (when clicking install button)

---

## 🔍 Common Issues & Solutions

### Issue 1: Testing on Localhost
❌ **Problem:** You're testing `http://localhost:3000`
✅ **Solution:** Meta can't access localhost. Use your **production Vercel URL**

### Issue 2: Ad Blocker Enabled
❌ **Problem:** Browser extensions block Facebook scripts
✅ **Solution:** 
- Disable ALL ad blockers
- Test in Incognito/Private mode
- Try different browser (Chrome, Firefox, Safari)

### Issue 3: Code Not Deployed
❌ **Problem:** Changes are in your local repo but not pushed/deployed
✅ **Solution:**
```bash
git status  # Check what's not committed
git add .
git commit -m "Add Meta Pixel"
git push origin main
# Wait for Vercel to deploy (2-3 minutes)
```

### Issue 4: Wrong URL in Events Manager
❌ **Problem:** Entered wrong URL for testing
✅ **Solution:** Make sure you're using the EXACT production URL from Vercel

Example correct URLs:
- `https://lot7-app.vercel.app` ✅
- `https://lot7-app-git-main.vercel.app` ✅

Example wrong URLs:
- `http://localhost:3000` ❌
- `https://lot7-mobile-store.preview.emergentagent.com` (staging, not production) ⚠️

### Issue 5: Script Loading Error
❌ **Problem:** Network error or CSP blocking Facebook scripts
✅ **Solution:** Check browser console (F12) for errors:
- Look for red errors mentioning "facebook"
- Check Network tab for failed requests to `connect.facebook.net`

### Issue 6: Cache Issues
❌ **Problem:** Old version of site is cached
✅ **Solution:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Test in Incognito mode

---

## 🧪 Manual Verification Steps

### Test 1: Check Page Source
1. Go to your production site
2. Right-click → "View Page Source"
3. Press Ctrl+F and search for: `1921927635105787`
4. Should find it in the pixel code

**Expected:** ✅ Pixel ID found in source
**If not found:** ❌ Code not deployed

### Test 2: Check Network Requests
1. Open Developer Tools (F12)
2. Go to "Network" tab
3. Reload page
4. Filter by "facebook"
5. Look for requests to:
   - `connect.facebook.net/en_US/fbevents.js`
   - `facebook.com/tr?id=1921927635105787`

**Expected:** ✅ Both requests with status 200
**If blocked:** ❌ Ad blocker is active

### Test 3: Console Check
1. Open Developer Tools (F12)
2. Go to "Console" tab
3. Type: `typeof window.fbq`
4. Press Enter

**Expected:** `"function"` ✅
**If undefined:** ❌ Pixel not loaded

### Test 4: Fire Test Event
1. Open Console
2. Type: `window.fbq('track', 'PageView')`
3. Press Enter
4. Check Events Manager for event

**Expected:** Event appears in Events Manager ✅

---

## 📋 Pre-Deployment Checklist

Before testing in Facebook Events Manager:

- [ ] Pixel code is in `/app/frontend/public/index.html`
- [ ] Pixel code is also in `/app/frontend/src/App.js`
- [ ] Code is committed: `git status` shows clean
- [ ] Code is pushed: `git push` completed
- [ ] Vercel deployment finished (check Vercel dashboard)
- [ ] Production URL is live and accessible
- [ ] Ad blockers are disabled
- [ ] Testing in Incognito/Private mode
- [ ] Using correct production URL in Events Manager

---

## 🎯 Step-by-Step Testing Procedure

Follow this exact sequence:

1. **Deploy to Production**
   ```bash
   git add .
   git commit -m "Meta Pixel integration"
   git push origin main
   ```
   ⏱️ Wait 2-3 minutes for deployment

2. **Verify Deployment**
   - Go to Vercel dashboard
   - Check deployment status: ✅ Ready
   - Copy production URL

3. **Test Pixel Loading**
   - Open production URL in Incognito mode
   - Press F12 → Console
   - Type: `window.fbq`
   - Result should be: `function`

4. **Test in Facebook**
   - Open [Events Manager](https://business.facebook.com/events_manager2)
   - Select Pixel: 1921927635105787
   - Click "Test Events"
   - Enter your production URL
   - Open site in new tab
   - Watch for events in Events Manager

5. **Verify Events**
   - PageView should appear immediately ✅
   - Click install button
   - Lead event should appear ✅

---

## 🆘 Still Not Working?

### Quick Diagnostic

Run this in your browser console on the production site:

```javascript
// Run this diagnostic script
console.log('=== META PIXEL DIAGNOSTIC ===');
console.log('Pixel function exists:', typeof window.fbq);
console.log('Facebook script in DOM:', 
  Array.from(document.getElementsByTagName('script'))
    .some(s => s.src.includes('facebook.net/en_US/fbevents.js'))
);
console.log('Pixel ID in source:', document.documentElement.innerHTML.includes('1921927635105787'));
console.log('Current URL:', window.location.href);
console.log('Ad Blocker test: If this is blocked, you have an ad blocker');
console.log('Test event:', window.fbq ? window.fbq('track', 'PageView') : 'fbq not found');
```

### Share These Details

If still having issues, share:
1. Production URL
2. Browser and version
3. Output of diagnostic script above
4. Screenshot of browser console
5. Screenshot of Network tab filtered by "facebook"

---

## 📞 Facebook Support

If pixel still not detected:

1. [Facebook Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. [Facebook Pixel Troubleshooting](https://www.facebook.com/business/help/1192945684136359)
3. [Events Manager Support](https://www.facebook.com/business/help/742478679120153)

---

## ✅ Success Confirmation

You'll know it's working when:

- ✅ `window.fbq` returns `function` in console
- ✅ Facebook Pixel Helper shows green checkmark
- ✅ Events appear in "Test Events" in real-time
- ✅ Network requests to Facebook domains succeed
- ✅ No errors in browser console

---

**Remember:** Always test on your PRODUCTION Vercel URL, not localhost!
