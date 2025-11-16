# Deployment Guide

This document describes the deployment strategy and workflow for the blog using AWS Amplify.

## Overview

The blog is deployed using **AWS Amplify** with Git-based continuous deployment. Every push to specific branches triggers an automatic build and deployment.

## Branch Strategy

```
main (production)
├── feature/content-collections-migration (development)
├── feature/new-feature-1 (feature branch)
└── feature/new-feature-2 (feature branch)
```

### Branch Configuration

| Branch | Environment | Auto-Deploy | Preview URL |
|--------|-------------|-------------|-------------|
| `main` | Production | ✅ Yes | `ibrahimcesar.cloud` |
| `feature/*` | Preview | ✅ Yes | `feature-*.amplifyapp.com` |
| Other branches | Manual | ❌ No | N/A |

## Deployment Workflow

### 1. Feature Development

```bash
# Create feature branch from main
git checkout main
git pull
git checkout -b feature/my-new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to create preview deployment
git push -u origin feature/my-new-feature
```

**Result:** Amplify automatically creates a preview deployment at:
`https://feature-my-new-feature.d1234abcd.amplifyapp.com`

### 2. Pull Request Review

```bash
# Create PR from feature branch to main
gh pr create --base main --head feature/my-new-feature
```

**Amplify Actions:**
- ✅ Builds the PR branch
- ✅ Creates preview URL
- ✅ Adds deployment status to PR
- ✅ Runs build checks

### 3. Production Deployment

```bash
# Merge PR to main (via GitHub UI or CLI)
gh pr merge --squash

# Automatic deployment triggers
# No manual intervention needed
```

**Result:** Production site updates at `https://ibrahimcesar.cloud`

## Build Process

### Build Configuration

The build is configured in [`amplify.yml`](./amplify.yml):

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci                # Install dependencies
    build:
      commands:
        - npm run build         # Build Astro + Pagefind
  artifacts:
    baseDirectory: /dist       # Output directory
    files:
      - "**/*"                  # All built files
  cache:
    paths:
      - node_modules/**/*       # Cache dependencies
      - .astro/**/*             # Cache Astro build
      - dist/_astro/**/*        # Cache built assets
```

### Build Steps

1. **Install Dependencies** (`npm ci`)
   - Clean install from package-lock.json
   - Faster and more reliable than `npm install`

2. **Build Site** (`npm run build`)
   - Astro builds static site → `dist/`
   - Pagefind generates search index → `dist/pagefind/`

3. **Deploy to CloudFront**
   - Amplify uploads `dist/` to S3
   - CloudFront CDN distributes globally
   - Cache invalidation happens automatically

### Build Time

- **Cold build** (no cache): ~2-3 minutes
- **Warm build** (with cache): ~45-60 seconds

## Caching Strategy

### Browser Caching

Headers configured in [`amplify-headers.yml`](./amplify-headers.yml):

| Resource Type | Cache Duration | Strategy |
|--------------|----------------|----------|
| HTML files (`*.html`) | No cache | Always fresh |
| Static assets (`/_astro/**`) | 1 year | Immutable (content-hashed) |
| Images (`/assets/**`) | 1 year | Immutable |
| Search index (`/pagefind/**`) | 1 day | Revalidate daily |
| RSS/Sitemap | 1 hour | Fresh content |

### Build Caching

Amplify caches between builds:
- ✅ `node_modules/` - Dependency cache
- ✅ `.astro/` - Astro build cache
- ✅ `dist/_astro/` - Built asset cache

**Impact:** 50-60% faster builds

## Custom Headers Setup

Apply headers in Amplify Console:

1. Go to **App settings** → **Rewrites and redirects**
2. Click **Edit** → **Custom headers**
3. Use configuration from `amplify-headers.yml`
4. Save and deploy

Or use the AWS CLI:

```bash
aws amplify update-app \
  --app-id <your-app-id> \
  --custom-headers file://amplify-headers.yml
```

## Environment Variables

No environment variables are currently required for build. All configuration is in code.

If you need to add environment variables:

1. Go to **App settings** → **Environment variables**
2. Add key-value pairs
3. Redeploy to apply

## Monitoring & Notifications

### Build Notifications

Set up in Amplify Console:

1. Go to **App settings** → **Notifications**
2. Add email or SNS topic
3. Select events:
   - ✅ Build succeeded
   - ✅ Build failed
   - ✅ Deployment succeeded
   - ✅ Deployment failed

### Build Logs

View build logs in Amplify Console:
- **App** → **Branch** → **Build details**
- Real-time logs during build
- Historical logs available for 30 days

## Performance Optimization

### Current Optimizations

- ✅ Static site generation (no server rendering)
- ✅ Content-hashed assets (cache busting)
- ✅ CloudFront CDN (global distribution)
- ✅ Gzip/Brotli compression (automatic)
- ✅ Build caching (faster deployments)
- ✅ Pagefind search (client-side, no API)

### Performance Metrics

Expected performance (Lighthouse scores):
- **Performance:** 95-100
- **Accessibility:** 95-100
- **Best Practices:** 95-100
- **SEO:** 95-100

## Rollback Strategy

### Automatic Rollback

Amplify doesn't have automatic rollback. If a build fails, the previous version remains live.

### Manual Rollback

If you need to revert to a previous version:

```bash
# Option 1: Git revert
git revert <bad-commit-hash>
git push origin main

# Option 2: Cherry-pick from previous commit
git checkout main
git reset --hard <good-commit-hash>
git push --force origin main  # Use with caution!

# Option 3: Redeploy old commit via Amplify Console
# Go to App → main branch → Redeploy → Select previous successful build
```

## Troubleshooting

### Build Fails

1. **Check build logs** in Amplify Console
2. **Common issues:**
   - Dependency installation failed → Check `package.json`
   - Build script failed → Test locally: `npm run build`
   - Out of memory → Contact AWS support for larger instance

### Deployment Succeeds but Site Not Updated

1. **Clear CloudFront cache:**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id <your-distribution-id> \
     --paths "/*"
   ```

2. **Check browser cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Clear browser cache

### Preview URL Not Working

1. **Verify branch is configured** in Amplify Console
2. **Check PR preview settings** in App settings
3. **Wait 2-3 minutes** for first deployment

## Best Practices

### ✅ Do

- Create feature branches for all changes
- Test builds locally before pushing: `npm run build`
- Use meaningful commit messages
- Keep `main` branch stable (only merge tested code)
- Monitor build notifications
- Review Amplify build logs regularly

### ❌ Don't

- Don't push directly to `main` (use PRs)
- Don't commit `dist/` or `node_modules/`
- Don't force-push to `main` (breaks history)
- Don't ignore build failures
- Don't skip PR reviews

## Repository as Single Source of Truth

Everything is in Git:
- ✅ Source code
- ✅ Content (markdown files)
- ✅ Configuration (`amplify.yml`, `astro.config.mjs`)
- ✅ Dependencies (`package.json`, `package-lock.json`)

**No manual changes** in Amplify Console. All changes via Git.

## Costs

### Current Pricing (as of 2024)

**AWS Amplify Free Tier:**
- 1,000 build minutes/month
- 15 GB data transfer/month
- 5 GB storage

**Typical Monthly Usage:**
- ~30 builds × 2 min = 60 build minutes
- ~10 GB data transfer
- ~500 MB storage

**Expected Cost:** $0/month (within free tier)

## Support & Resources

- **AWS Amplify Docs:** https://docs.amplify.aws/
- **Astro Docs:** https://docs.astro.build/
- **GitHub Repo:** https://github.com/ibrahimcesar/blog
- **Production Site:** https://ibrahimcesar.cloud

## Quick Reference Commands

```bash
# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Create new post
npm run new:post

# Format code
npm run pretty

# Create feature branch
git checkout -b feature/my-feature

# Push and create preview
git push -u origin feature/my-feature

# Create PR
gh pr create --base main

# Merge to production
gh pr merge --squash
```

---

**Last Updated:** November 2024
**Maintained by:** Ibrahim Cesar
