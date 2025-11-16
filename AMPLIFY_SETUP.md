# AWS Amplify Setup Instructions

This guide walks you through applying the optimized configuration to your AWS Amplify deployment.

## Prerequisites

- AWS Account with Amplify app already created
- AWS CLI installed (optional, for CLI method)
- Access to Amplify Console

## Step 1: Verify Current Setup

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select your app
3. Verify these settings:
   - **Repository:** Connected to GitHub `ibrahimcesar/blog`
   - **Branch:** `main` is set as production
   - **Build settings:** Using `amplify.yml`

## Step 2: Apply Custom Headers (Console Method)

### Via Amplify Console (Recommended)

1. **Navigate to Headers:**
   - Open your Amplify app
   - Go to **App settings** → **Rewrites and redirects**
   - Scroll to **Custom headers** section
   - Click **Edit**

2. **Add Headers Configuration:**

   Copy and paste this JSON configuration:

   ```json
   [
     {
       "pattern": "/_astro/**",
       "headers": [
         {
           "key": "Cache-Control",
           "value": "public, max-age=31536000, immutable"
         },
         {
           "key": "X-Content-Type-Options",
           "value": "nosniff"
         }
       ]
     },
     {
       "pattern": "/assets/**",
       "headers": [
         {
           "key": "Cache-Control",
           "value": "public, max-age=31536000, immutable"
         },
         {
           "key": "X-Content-Type-Options",
           "value": "nosniff"
         }
       ]
     },
     {
       "pattern": "/pagefind/**",
       "headers": [
         {
           "key": "Cache-Control",
           "value": "public, max-age=86400, must-revalidate"
         }
       ]
     },
     {
       "pattern": "**.html",
       "headers": [
         {
           "key": "Cache-Control",
           "value": "public, max-age=0, must-revalidate"
         },
         {
           "key": "X-Frame-Options",
           "value": "DENY"
         },
         {
           "key": "X-Content-Type-Options",
           "value": "nosniff"
         },
         {
           "key": "Referrer-Policy",
           "value": "strict-origin-when-cross-origin"
         },
         {
           "key": "Permissions-Policy",
           "value": "camera=(), microphone=(), geolocation=()"
         }
       ]
     },
     {
       "pattern": "/rss.xml",
       "headers": [
         {
           "key": "Cache-Control",
           "value": "public, max-age=3600"
         },
         {
           "key": "Content-Type",
           "value": "application/xml; charset=utf-8"
         }
       ]
     },
     {
       "pattern": "/sitemap*.xml",
       "headers": [
         {
           "key": "Cache-Control",
           "value": "public, max-age=3600"
         },
         {
           "key": "Content-Type",
           "value": "application/xml; charset=utf-8"
         }
       ]
     },
     {
       "pattern": "**/*",
       "headers": [
         {
           "key": "X-Content-Type-Options",
           "value": "nosniff"
         },
         {
           "key": "Referrer-Policy",
           "value": "strict-origin-when-cross-origin"
         }
       ]
     }
   ]
   ```

3. **Save Configuration:**
   - Click **Save**
   - Amplify will apply headers on next deployment

## Step 3: Enable Branch Previews

1. **Configure Preview Settings:**
   - Go to **App settings** → **Branch settings**
   - Enable **Pull request previews**
   - Select branches to enable previews for:
     - ✅ All `feature/*` branches
     - ✅ Automatically enable previews for PRs

2. **Configure Branch Protection (Optional but Recommended):**
   - Go to **App settings** → **Branch settings**
   - Click on `main` branch
   - Enable **Require PR reviews before merging**

## Step 4: Set Up Build Notifications

1. **Configure Notifications:**
   - Go to **App settings** → **Notifications**
   - Click **Add notification**
   - Choose notification method:
     - **Email:** Enter your email
     - **SNS Topic:** Select existing topic or create new

2. **Select Events to Monitor:**
   - ✅ Branch deployment succeeded
   - ✅ Branch deployment failed
   - ✅ Build succeeded
   - ✅ Build failed

3. **Save Notification Rules**

## Step 5: Optimize Build Performance

The `amplify.yml` file in your repo already includes optimizations. Verify it's being used:

1. **Check Build Settings:**
   - Go to **App settings** → **Build settings**
   - Verify **Build specification** is set to: `amplify.yml`
   - If not, select it from dropdown

2. **Verify Build Image (Optional):**
   - Default: `Amazon Linux:2023` (recommended)
   - For Node.js issues, can switch to specific Node version

## Step 6: Configure Custom Domain (If Not Done)

1. **Add Domain:**
   - Go to **App settings** → **Domain management**
   - Click **Add domain**
   - Enter: `ibrahimcesar.cloud`
   - Follow DNS verification steps

2. **Configure SSL:**
   - Amplify automatically provisions SSL certificate
   - Wait for certificate validation (~15 minutes)

3. **Set Up Redirects:**
   - Add redirect rules in **Rewrites and redirects**:

   ```json
   [
     {
       "source": "https://www.ibrahimcesar.cloud",
       "target": "https://ibrahimcesar.cloud",
       "status": "301",
       "condition": null
     }
   ]
   ```

## Step 7: Test the Setup

### Test Build

1. **Trigger Test Deployment:**
   ```bash
   git checkout -b test/amplify-optimization
   echo "# Test" >> AMPLIFY_SETUP.md
   git add AMPLIFY_SETUP.md
   git commit -m "Test Amplify optimization"
   git push -u origin test/amplify-optimization
   ```

2. **Verify in Amplify Console:**
   - New branch should appear
   - Preview URL created
   - Build should complete successfully

3. **Check Headers:**
   ```bash
   # Test cache headers on preview URL
   curl -I https://test-amplify-optimization.d1234abcd.amplifyapp.com/_astro/some-file.js

   # Should see:
   # Cache-Control: public, max-age=31536000, immutable
   ```

### Test Preview Deployment

1. **Create Pull Request:**
   ```bash
   gh pr create --base main --head test/amplify-optimization \
     --title "Test Amplify optimization" \
     --body "Testing new Amplify configuration"
   ```

2. **Verify:**
   - PR should show Amplify deployment status
   - Preview URL appears in PR
   - Build logs show cached dependencies

### Clean Up Test

```bash
gh pr close --delete-branch
git checkout main
```

## Step 8: Monitor First Production Build

1. **Merge Optimization to Production:**
   ```bash
   git checkout main
   git pull
   # amplify.yml changes are already there
   git push
   ```

2. **Watch Build:**
   - Go to Amplify Console
   - Watch build logs in real-time
   - Verify caching is working (faster subsequent builds)

3. **Verify Headers in Production:**
   ```bash
   # Check production headers
   curl -I https://ibrahimcesar.cloud/_astro/some-file.js
   curl -I https://ibrahimcesar.cloud/blog/index.html
   ```

## Verification Checklist

After setup, verify:

- [ ] Custom headers are applied (check with `curl -I`)
- [ ] Build caching is working (builds complete in ~1 minute)
- [ ] Preview deployments work for feature branches
- [ ] PR deployments create preview URLs
- [ ] Build notifications are being sent
- [ ] Production deployment works on `main` push
- [ ] SSL certificate is active
- [ ] Custom domain resolves correctly

## Performance Expectations

After optimization:

| Metric | Before | After |
|--------|--------|-------|
| Build time (cold) | 2-3 min | 2-3 min |
| Build time (warm) | 2-3 min | 45-60 sec |
| Cache hit rate | 0% | 50-70% |
| Time to deployment | 3-4 min | 2-3 min |

## Troubleshooting

### Headers Not Applied

**Symptom:** `curl -I` doesn't show custom headers

**Solution:**
1. Verify headers JSON is valid
2. Trigger new deployment (headers apply on new builds only)
3. Clear CloudFront cache if needed

### Build Caching Not Working

**Symptom:** Every build takes 2-3 minutes

**Solution:**
1. Check `amplify.yml` cache paths are correct
2. Verify cache isn't disabled in build settings
3. Wait for 2-3 builds (cache needs to warm up)

### Preview Deployments Not Creating

**Symptom:** Feature branch pushes don't create previews

**Solution:**
1. Enable PR previews in branch settings
2. Verify branch pattern matches (`feature/*`)
3. Check IAM permissions for Amplify

## Additional Resources

- **Amplify Documentation:** https://docs.amplify.aws/
- **Custom Headers Guide:** https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html
- **Build Specification:** https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html

## Support

If you encounter issues:
1. Check Amplify build logs
2. Review AWS Support Center
3. Contact AWS Support (if on support plan)

---

**Setup Date:** November 2024
**Last Verified:** November 2024
