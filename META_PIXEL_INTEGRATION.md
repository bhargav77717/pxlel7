# Meta Pixel Integration - LOT7 Play Store

## ✅ Implementation Complete

Meta Pixel (Facebook Pixel) has been successfully integrated into the LOT7 Play Store landing page.

### Pixel Details
- **Pixel ID:** `1921927635105787`
- **Location:** Installed in `<head>` section of `/app/frontend/public/index.html`
- **Status:** Active and tracking

---

## 📊 Events Being Tracked

### 1. PageView Event
**Trigger:** Automatically when page loads
**Purpose:** Track all visitors to the landing page

```javascript
fbq('track', 'PageView');
```

**Data Collected:**
- Total page views
- Unique visitors
- Traffic sources
- Device types (mobile, desktop, tablet)

### 2. Lead Event
**Trigger:** When user clicks "Instant Install 10 secs" button
**Purpose:** Track conversion intent - users interested in registration

```javascript
fbq('track', 'Lead', {
  content_name: 'Install Button Click',
  content_category: 'Registration'
});
```

**Data Collected:**
- Number of install button clicks
- Click-through rate
- User behavior before clicking
- Conversion funnel data

---

## 🔍 How to Verify Pixel is Working

### Method 1: Facebook Events Manager (Real-time)

1. **Open Events Manager:**
   - Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
   - Select your Pixel ID: `1921927635105787`

2. **Test Events:**
   - Click "Test Events" in the left menu
   - Enter your website URL
   - Open your website in a new tab
   - You should see events appear in real-time:
     - ✅ PageView (on page load)
     - ✅ Lead (when clicking install button)

### Method 2: Facebook Pixel Helper (Browser Extension)

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) for Chrome
2. Visit your website
3. Click the extension icon
4. You should see:
   - Pixel ID: 1921927635105787
   - PageView event fired
   - No errors

### Method 3: Browser Console

1. Open your website
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Type: `fbq`
5. Should return a function (means pixel loaded)
6. Check Network tab for requests to `facebook.com/tr`

---

## 📈 What You Can Track in Facebook Ads Manager

With this pixel installed, you can:

### Audience Building
- ✅ Create custom audiences of people who visited the page
- ✅ Create lookalike audiences for targeting similar users
- ✅ Exclude people who already clicked the install button

### Conversion Tracking
- ✅ Track how many ad viewers visit the page (PageView)
- ✅ Track how many visitors click install button (Lead)
- ✅ Calculate conversion rate from ad → visit → button click
- ✅ Measure cost per lead

### Optimization
- ✅ Optimize Facebook ads for "Lead" conversions
- ✅ A/B test different ad creatives based on conversion data
- ✅ Retarget users who viewed but didn't click

### Reporting
- ✅ See detailed conversion funnel
- ✅ Track user journey from ad to registration
- ✅ Analyze which demographics convert best

---

## 🎯 Setting Up Facebook Ads Campaigns

### Campaign Setup for Lead Generation

1. **Campaign Objective:** "Leads" or "Traffic"
2. **Optimization Event:** 
   - For page visits: PageView
   - For button clicks: Lead (recommended)
3. **Conversion Window:** 7-day click, 1-day view
4. **Budget:** Start with daily budget based on your goals

### Ad Set Configuration

1. **Audience:**
   - Location: India (or your target market)
   - Age: 18+ (matching app rating)
   - Interests: Online gambling, casino games, lottery, sports betting
   - Custom Audiences: Exclude people who already converted

2. **Placements:**
   - Facebook Feed
   - Instagram Feed
   - Facebook Stories
   - Audience Network (optional)

3. **Optimization:**
   - Optimization for: Lead
   - Bid Strategy: Lowest cost or Cost per result goal

### Ad Creative Tips

1. **Highlight the ₹580 welcome bonus** (your animated banner)
2. **Show actual app screenshots** (slot games, winnings)
3. **Use social proof** (4.8★ rating, 215K reviews, 1M+ downloads)
4. **Clear call-to-action:** "Get ₹580 Bonus - Install Now"
5. **Trust indicators:** Licensed, verified, secure

---

## 📊 Monitoring Performance

### Key Metrics to Track

| Metric | What It Means | Good Target |
|--------|---------------|-------------|
| **PageView** | Total page visits | Track growth |
| **Lead** | Install button clicks | 10-20% of PageView |
| **CTR** | Click-through rate | 2-5% |
| **Cost Per Lead** | Cost per button click | Depends on budget |
| **Conversion Rate** | Clicks ÷ PageView | 10-20% |

### Facebook Events Manager Dashboard

Go to: **Events Manager → Your Pixel → Overview**

You'll see:
- Total events (PageView + Lead)
- Event trends (daily, weekly, monthly)
- Top sources (Facebook ads, organic, etc.)
- Device breakdown (mobile vs desktop)

---

## 🔧 Troubleshooting

### Pixel Not Showing Events

1. **Check Browser Console:**
   - Look for errors related to `fbq` or `facebook.com`
   - Ensure no ad blockers are active

2. **Verify Pixel Code:**
   - Open `/app/frontend/public/index.html`
   - Confirm pixel ID is `1921927635105787`
   - Check code is in `<head>` section

3. **Clear Cache:**
   - Clear browser cache and reload
   - Try incognito/private browsing mode

4. **Check Facebook Events Manager:**
   - Pixel status should be "Active"
   - Last activity should show recent timestamp

### Events Not Recording

1. **Test with Pixel Helper:**
   - Install Facebook Pixel Helper extension
   - Check for errors or warnings

2. **Network Request:**
   - Open Developer Tools → Network tab
   - Filter for "facebook"
   - You should see requests to `connect.facebook.net` and `facebook.com/tr`

3. **JavaScript Errors:**
   - Check console for any JS errors that might block pixel

---

## 📝 Files Modified

- ✅ `/app/frontend/public/index.html` - Added Meta Pixel base code in `<head>`
- ✅ `/app/frontend/src/App.js` - Added Lead event tracking on button click

---

## 🚀 Next Steps

1. **Verify Pixel Activity:**
   - Visit your live site
   - Check Events Manager for activity
   - Test the install button

2. **Create Custom Conversions:**
   - In Events Manager, create conversion for "Lead" event
   - Use URL rule: Contains "register?invitationCode=3167818365044"

3. **Build Audiences:**
   - Create custom audience of PageView visitors (last 30 days)
   - Create custom audience of Lead converters (last 30 days)
   - Create lookalike audience from converters

4. **Launch Facebook Ads:**
   - Create campaign optimized for "Lead" conversion
   - Target relevant interests (gaming, gambling, lottery)
   - Use your LOT7 screenshots and bonus banner in ads

5. **Monitor & Optimize:**
   - Check daily performance in Events Manager
   - Adjust ad targeting based on best performers
   - Scale winning campaigns

---

## 📞 Support

### Facebook Pixel Issues
- [Facebook Pixel Help Center](https://www.facebook.com/business/help/742478679120153)
- [Facebook Pixel Troubleshooting](https://www.facebook.com/business/help/1192945684136359)

### LOT7 Implementation
- Review code in `/app/frontend/public/index.html`
- Check button handler in `/app/frontend/src/App.js`

---

**Status:** ✅ Active
**Last Updated:** February 15, 2026
**Pixel ID:** 1921927635105787
