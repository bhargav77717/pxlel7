# LOT7 Google Play Store Landing Page

A high-fidelity, mobile-responsive Google Play Store clone for LOT7 gaming app with full PWA functionality.

## 🚀 Deployment on Vercel

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Click "Deploy"

3. **If you get 404 error:**
   - Make sure `vercel.json` is in the root directory
   - Check that the build completed successfully
   - Verify the output directory is `frontend/build`

### Manual Configuration (if auto-detect fails)

If Vercel doesn't auto-detect, use these settings:

- **Framework Preset:** Create React App
- **Root Directory:** `./`
- **Build Command:** `cd frontend && yarn install && yarn build`
- **Output Directory:** `frontend/build`
- **Install Command:** `cd frontend && yarn install`

## 📁 Project Structure

```
/
├── frontend/              # React application
│   ├── public/           # Static files
│   │   ├── manifest.json # PWA manifest
│   │   └── sw.js        # Service worker
│   ├── src/             # React components
│   │   ├── App.js       # Main component
│   │   └── App.css      # Styles
│   └── package.json     # Frontend dependencies
├── backend/             # FastAPI (not used in Vercel deployment)
├── vercel.json          # Vercel configuration ⭐ IMPORTANT
├── package.json         # Root package.json
└── README.md           # This file
```

## 🔧 Local Development

```bash
# Install dependencies
cd frontend
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## ✨ Features

- ✅ Google Play Store UI/UX clone
- ✅ Animated welcome bonus banner (₹580)
- ✅ 3 actual LOT7 app screenshots
- ✅ Ratings breakdown with visual histogram
- ✅ User reviews section
- ✅ Data safety information
- ✅ PWA support (Add to Home Screen)
- ✅ Fully responsive design
- ✅ Direct redirect to registration with invitation code

## 🌐 Live Demo

- **Staging:** https://lot7-mobile-store.preview.emergentagent.com
- **Production:** [Your Vercel URL]

## 📱 PWA Installation

The app can be installed as a PWA:
- **Android:** Chrome menu → "Add to Home screen"
- **iOS:** Safari Share → "Add to Home Screen"
- **Desktop:** Install icon in address bar

## 🎯 Registration Flow

When users click "Instant Install 10 secs" button:
1. Redirects to: `https://www.uuulottery7.com/#/register?invitationCode=3167818365044`
2. Invitation code **3167818365044** is automatically filled
3. User can complete registration

## 🐛 Troubleshooting

### 404 Error on Vercel
- Ensure `vercel.json` exists in root directory
- Check build logs in Vercel dashboard
- Verify `frontend/build` directory is created during build
- Make sure `rewrites` configuration is present in `vercel.json`

### Build Fails
- Check that all dependencies are in `frontend/package.json`
- Ensure Node version compatibility (14.x or higher)
- Clear cache and rebuild

## 📝 License

© 2026 Lottery7 Gaming Ltd. All rights reserved.
