# Security

## NPM Audit Status

### Current Vulnerabilities

As of the latest audit, there are **11 known vulnerabilities** in development dependencies:
- 8 high severity
- 3 critical severity

**Important:** All vulnerabilities are in `subfont` and its dependencies. These are **build-time only** tools that do not affect production security.

### Risk Assessment

✅ **Low Risk for Production**

The vulnerabilities are contained in:
- `subfont`: Font optimization tool (dev dependency)
- `puppeteer-core`: Headless browser for font extraction
- `assetgraph`: Asset processing
- `form-data`, `html-minifier`, `lodash.template`, `tar-fs`, `ws`: Deep dependencies

**Why this is low risk:**
1. These tools **only run during build** on your local machine or CI/CD
2. They are **not included** in the production build output
3. The production site is **100% static HTML/CSS/JS**
4. No server-side code or npm packages are deployed

### Mitigation Strategy

**Option 1: Use Build Without Font Optimization (Current Default)**
```bash
npm run build
```
This skips `subfont` entirely, avoiding all vulnerabilities. Fonts will still work but won't be optimized.

**Option 2: Use Font Optimization (Optional)**
```bash
npm run build:fonts
```
Only use this if you need font optimization and understand the build-time security implications.

**Option 3: Remove Subfont Entirely**
```bash
npm uninstall subfont
```
If font optimization isn't critical, remove the package to eliminate all vulnerabilities.

### Dependency Updates

We automatically apply security fixes where available:
```bash
npm audit fix
```

The remaining vulnerabilities have **no fix available** because:
- They are in abandoned or old packages
- Subfont hasn't updated its dependencies
- Alternative tools don't exist with the same functionality

### Production Build Security

The production `dist/` folder contains:
- ✅ Static HTML
- ✅ Optimized CSS
- ✅ Client-side JavaScript
- ✅ Images and fonts
- ✅ Pagefind search index

**No vulnerable code is deployed to production.**

### CI/CD Recommendations

For AWS Amplify or other CI/CD platforms:

**Safer build (recommended):**
```bash
npm run build
```

**With font optimization (optional):**
```bash
npm run build:fonts
```

### Monitoring

Run audit regularly:
```bash
npm audit
```

Check for updates:
```bash
npm outdated
```

### Alternative Font Optimization

If you want to remove subfont entirely, consider:
- **Manual font subsetting** with tools like `glyphhanger`
- **Google Fonts** with manual subsetting
- **Fontsource** packages for specific fonts
- Accept slightly larger font files without optimization

### Contact

For security concerns, please open an issue at: https://github.com/ibrahimcesar/blog/issues
