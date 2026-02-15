# Vercel Deployment Guide - Fix 404 Error

## The Problem
You're seeing: `404: NOT_FOUND` after deploying to Vercel.

## The Solution

### Step 1: Add Configuration Files

Make sure these files exist in your repository root:

#### 1. `/vercel.json`
```json
{
  "buildCommand": "cd frontend && yarn install && yarn build",
  "outputDirectory": "frontend/build",
  "devCommand": "cd frontend && yarn start",
  "installCommand": "cd frontend && yarn install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/service-worker.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "/manifest.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        }
      ]
    },
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/javascript"
        },
        {
          "key": "Service-Worker-Allowed",
          "value": "/"
        }
      ]
    }
  ]
}
```

#### 2. `/package.json` (root)
```json
{
  "name": "lot7-play-store",
  "version": "1.0.0",
  "scripts": {
    "build": "cd frontend && yarn install && yarn build",
    "start": "cd frontend && yarn start"
  }
}
```

### Step 2: Push Changes to GitHub

```bash
# Add the new files
git add vercel.json package.json .gitignore README.md

# Commit
git commit -m "Add Vercel configuration to fix 404 error"

# Push to your main branch
git push origin main
```

### Step 3: Redeploy on Vercel

**Option A: Automatic Redeploy**
- Vercel will automatically redeploy when you push to GitHub

**Option B: Manual Redeploy**
1. Go to your Vercel dashboard
2. Select your project
3. Click "Deployments" tab
4. Click "Redeploy" on the latest deployment
5. Select "Use existing Build Cache" or "Rebuild"

### Step 4: Verify Build Settings (if still failing)

Go to your project settings on Vercel:

1. **Settings → General:**
   - Root Directory: `./` (leave empty or use `./`)
   
2. **Settings → Build & Development Settings:**
   - Framework Preset: `Other` or `Create React App`
   - Build Command: `cd frontend && yarn install && yarn build`
   - Output Directory: `frontend/build`
   - Install Command: `cd frontend && yarn install`

3. **Click "Save"**

4. Go back to "Deployments" and redeploy

## Common Issues & Fixes

### Issue 1: "Build output directory not found"
**Solution:** Make sure the build command includes `cd frontend` since your React app is in a subdirectory.

### Issue 2: "Package.json not found"
**Solution:** Ensure there's a `package.json` in the root directory (even if minimal).

### Issue 3: "Dependencies installation failed"
**Solution:** Check that `frontend/package.json` exists and all dependencies are properly listed.

### Issue 4: "Routes return 404"
**Solution:** The `rewrites` section in `vercel.json` should redirect all routes to `index.html` for React routing to work.

## Verification Checklist

After deployment, verify:
- ✅ Home page loads (/)
- ✅ Install button works
- ✅ Screenshots display
- ✅ Bonus banner shows
- ✅ Page is responsive
- ✅ No console errors

## Expected Build Output

Your Vercel build log should show:
```
> cd frontend && yarn install && yarn build
✓ Dependencies installed
✓ Creating optimized production build
✓ Compiled successfully
✓ Build complete
✓ Output directory: frontend/build
```

## Still Having Issues?

1. **Check Build Logs:**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click on the failed deployment
   - Check the "Build Logs" tab for errors

2. **Test Locally:**
   ```bash
   cd frontend
   yarn build
   npx serve -s build
   ```
   If it works locally, the issue is in the Vercel configuration.

3. **Environment:**
   - Node version: 18.x or higher
   - Yarn version: 1.22.x or higher

## Contact Support

If you're still seeing 404 errors after following this guide:
1. Share your Vercel build logs
2. Verify all files are committed to Git
3. Check the deployment URL structure

---

**After fixing, your site should be live at:**
`https://your-project-name.vercel.app`
