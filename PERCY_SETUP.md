# Percy Visual Regression Testing Setup

This project uses [Percy](https://percy.io/) for automated visual regression testing to catch visual bugs before they reach production.

## 🎯 What is Percy?

Percy takes snapshots of your site and compares them across builds to detect visual changes. It helps you:

- 👁️ **Catch visual bugs** before they reach production
- 🎨 **Track design consistency** across changes
- 🔄 **Review visual changes** in pull requests
- 📱 **Test responsive designs** across multiple viewports

## 🚀 Setup Instructions

### 1. Get Your Percy Token

1. Sign up at [percy.io](https://percy.io/)
2. Create a new project for your blog
3. Copy your `PERCY_TOKEN` from the project settings

### 2. Add Secret to GitHub

1. Go to your GitHub repository settings
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Name: `PERCY_TOKEN`
5. Value: Paste your Percy token
6. Click **Add secret**

### 3. Install Dependencies

```bash
npm install
```

This will install `@percy/cli` which is already added to `package.json`.

## 📸 Running Percy Locally

### Quick Test
```bash
# Build and snapshot your site
npm run percy:local
```

### Manual Steps
```bash
# 1. Build your site first
npm run build

# 2. Run Percy snapshot
npm run percy
```

**Note:** You'll need to set your `PERCY_TOKEN` environment variable:

```bash
export PERCY_TOKEN=your_token_here
npm run percy:local
```

## 🔧 Configuration

Percy is configured via [.percy.yml](.percy.yml):

### Snapshots Captured

- **Homepage** (`/`) - 4 viewports (375px, 768px, 1280px, 1920px)
- **Blog List** (`/blog/`) - 3 viewports
- **Who I Am** (`/whoiam/`) - 3 viewports
- **Talks** (`/talks/`) - 3 viewports
- **Uses** (`/uses/`) - 3 viewports

### Viewports

- **375px** - Mobile
- **768px** - Tablet
- **1280px** - Desktop
- **1920px** - Wide Desktop

### Ignored Elements

Elements with these attributes will be ignored in visual diffs:

- `.date-dynamic` - Dynamic date elements
- `[data-percy-ignore]` - Custom ignore attribute

## 🔄 GitHub Actions Workflow

Percy runs automatically on:

- ✅ Every push to `main`
- ✅ Every pull request to `main`

The workflow ([.github/workflows/percy.yml](.github/workflows/percy.yml)):

1. Checks out your code
2. Sets up Node.js 20
3. Installs dependencies
4. Builds your site
5. Takes Percy snapshots
6. Uploads artifacts if build fails

## 📊 Reviewing Visual Changes

### In Pull Requests

1. When you open a PR, Percy will automatically run
2. You'll see a status check labeled "Percy"
3. Click the **Details** link to review visual changes
4. Approve or reject changes in the Percy dashboard

### Visual Diff Review

Percy shows you:

- 🔴 **Removed** - Elements that were removed
- 🟢 **Added** - New elements
- 🟡 **Changed** - Modified elements
- Side-by-side comparison
- Highlight mode to see exact pixel differences

## 🛠️ Adding Snapshots

To snapshot a new page, edit [.percy.yml](.percy.yml):

```yaml
static:
  snapshots:
    - name: New Page Name
      url: /path-to-page/index.html
      widths: [375, 768, 1280]
      minHeight: 1024
```

## 🎨 Ignoring Dynamic Content

For elements that change frequently (dates, random content), add the `data-percy-ignore` attribute:

```html
<div data-percy-ignore>
  Current time: {new Date().toLocaleString()}
</div>
```

Or add a CSS class:

```html
<div class="date-dynamic">
  Published: {pubDate}
</div>
```

## 📝 Best Practices

1. **Review every visual change** - Don't auto-approve without checking
2. **Keep snapshots focused** - Snapshot key pages, not every page
3. **Use consistent data** - Avoid random or time-based content
4. **Test responsive designs** - Use multiple viewport widths
5. **Ignore dynamic elements** - Use `data-percy-ignore` for timestamps, etc.

## 🔍 Troubleshooting

### Percy snapshots are taking too long

- Reduce the number of viewports in `.percy.yml`
- Snapshot fewer pages
- Use `network-idle-timeout` to reduce wait time

### False positives (changes detected when nothing changed)

- Check for dynamic content (dates, random IDs)
- Add `data-percy-ignore` to changing elements
- Ensure fonts are loading consistently

### Percy token not working

- Verify token is correct in GitHub Secrets
- Check token hasn't expired
- Ensure project is active in Percy dashboard

## 📚 Resources

- [Percy Documentation](https://www.browserstack.com/docs/percy)
- [Percy Configuration](https://www.browserstack.com/docs/percy/take-percy-snapshots/configure)
- [GitHub Actions Integration](https://www.browserstack.com/docs/percy/integrate/github-actions)
- [Visual Testing Best Practices](https://www.browserstack.com/docs/percy/best-practices)

## 🎯 Next Steps

1. ✅ Set up Percy account
2. ✅ Add `PERCY_TOKEN` to GitHub Secrets
3. ✅ Run `npm install` to install dependencies
4. ✅ Test locally with `npm run percy:local`
5. ✅ Push changes and watch Percy run in GitHub Actions
6. ✅ Review your first visual diff in the Percy dashboard!

---

**Happy Visual Testing!** 👁️✨
