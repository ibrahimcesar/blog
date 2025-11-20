# Editorial Components

A collection of reusable editorial components for enhancing blog posts with rich, accessible content.

## Components

### Lead

An introductory paragraph with larger, prominent text to draw readers in.

**Location**: `src/components/editorial/Lead.astro`

**Props**: None

**Usage**:
```astro
---
import Lead from "~/components/editorial/Lead.astro";
---

<Lead>
  Web3, NFTs, cryptocurrencies, Bitcoin, Ethereum, blockchains, DAOs —
  this post explores the trade-offs of these emerging technologies.
</Lead>
```

**Features**:
- Larger, more prominent text (1.375rem)
- Improved readability with optimal line-height
- Styled support for emphasis, strong, and links
- Dark mode support
- Responsive scaling for mobile devices

---

### StyledList

Beautifully styled lists with various visual treatments for different content needs.

**Location**: `src/components/editorial/StyledList.astro`

**Props**:
- `type` ("check" | "arrow" | "number" | "highlight" | "card", optional, default: "check") - Visual style of the list
- `size` ("sm" | "md" | "lg", optional, default: "md") - Size of list items

**Usage**:
```astro
---
import StyledList from "~/components/editorial/StyledList.astro";
---

<StyledList type="check">
  <li>Performance optimizations applied</li>
  <li>Security patches implemented</li>
  <li>Tests passing successfully</li>
</StyledList>

<StyledList type="number" size="lg">
  <li><strong>Install dependencies:</strong> Run <code>npm install</code></li>
  <li><strong>Configure environment:</strong> Set your API keys</li>
  <li><strong>Deploy:</strong> Push to production</li>
</StyledList>

<StyledList type="card">
  <li><strong>Serverless:</strong> No servers to manage, automatic scaling</li>
  <li><strong>Cost-effective:</strong> Pay only for what you use</li>
  <li><strong>Fast:</strong> Global CDN distribution</li>
</StyledList>
```

**Features**:
- Five distinct visual styles (check, arrow, number, highlight, card)
- Three size options for different content needs
- Hover effects on card style
- Support for nested formatting (strong, em, code)
- Full dark mode support
- Responsive design

---

### PullQuote

A visually prominent quote pulled from the article text to emphasize key points.

**Location**: `src/components/editorial/PullQuote.astro`

**Props**:
- `cite` (string, optional) - Attribution for the quote
- `align` ("left" | "right" | "center", optional, default: "center") - Alignment of the quote

**Usage**:
```astro
---
import PullQuote from "~/components/editorial/PullQuote.astro";
---

<PullQuote cite="Aaron Swartz">
  Information is power. But like all power, there are those who want to keep it for themselves.
</PullQuote>

<PullQuote align="right" cite="Alan Kay">
  The best way to predict the future is to invent it.
</PullQuote>
```

**Features**:
- Large decorative quotation mark
- Responsive design (floating on desktop, full-width on mobile)
- Dark mode support
- Optional attribution

---

### InfoBox

A highlighted box for important information, tips, warnings, or notes.

**Location**: `src/components/editorial/InfoBox.astro`

**Props**:
- `title` (string, optional) - Title for the info box
- `type` ("info" | "tip" | "warning" | "note", optional, default: "info") - Type of information

**Usage**:
```astro
---
import InfoBox from "~/components/editorial/InfoBox.astro";
---

<InfoBox title="Did you know?" type="tip">
  AWS Lambda functions can run for up to 15 minutes!
</InfoBox>

<InfoBox type="warning" title="Important">
  Always enable MFA on your AWS root account.
</InfoBox>

<InfoBox type="note">
  This feature is available in all AWS regions.
</InfoBox>
```

**Features**:
- Four distinct types with different colors and icons
- Colored left border for easy scanning
- Dark mode support
- Responsive design

---

### Alert

An attention-grabbing alert for critical information that readers must notice.

**Location**: `src/components/editorial/Alert.astro`

**Props**:
- `type` ("success" | "error" | "warning" | "info", optional, default: "info") - Type of alert
- `title` (string, optional) - Title for the alert
- `dismissible` (boolean, optional, default: false) - Whether the alert can be dismissed

**Usage**:
```astro
---
import Alert from "~/components/editorial/Alert.astro";
---

<Alert type="warning" title="Security Notice">
  Never store AWS credentials in your code!
</Alert>

<Alert type="success" title="Deployment Complete">
  Your application has been successfully deployed to production.
</Alert>

<Alert type="error" dismissible>
  This API endpoint has been deprecated and will be removed in version 3.0.
</Alert>
```

**Features**:
- Four alert types with distinct visual styles
- Optional dismissible functionality
- Icon indicators for quick recognition
- Full ARIA support for accessibility
- Dark mode support

---

### DiveDeep

An expandable section for detailed technical information or advanced topics that don't clutter the main content.

**Location**: `src/components/editorial/DiveDeep.astro`

**Props**:
- `title` (string, required) - Title of the deep dive section
- `defaultOpen` (boolean, optional, default: false) - Whether the section starts expanded

**Usage**:
```astro
---
import DiveDeep from "~/components/editorial/DiveDeep.astro";
---

<DiveDeep title="Understanding Lambda Cold Starts">
  Cold starts occur when AWS has to provision a new execution environment for your Lambda function.

  This happens when:
  - Your function hasn't been invoked recently
  - You're scaling up and need more concurrent executions
  - AWS updates the underlying infrastructure

  ### Mitigation Strategies
  - Use provisioned concurrency for critical paths
  - Minimize package size and dependencies
  - Keep functions warm with scheduled invocations
</DiveDeep>

<DiveDeep title="Advanced TypeScript Patterns" defaultOpen>
  Content here starts expanded...
</DiveDeep>
```

**Features**:
- Smooth expand/collapse animation
- Animated chevron indicator
- Supports nested markdown/HTML
- Gradient background with themed styling
- Dark mode support
- Semantic HTML using `<details>` element

---

### YouTube

A lightweight, performant YouTube embed using react-lite-youtube-embed. Loads significantly faster than standard YouTube iframes by deferring the player until user interaction.

**Location**: `src/components/editorial/YouTube.astro`

**Props**:
- `videoId` (string, required) - YouTube video ID
- `title` (string, optional, recommended) - Video title for accessibility
- `aspectHeight` (number, optional, default: 9) - Aspect ratio height
- `poster` (string, optional, default: "hqdefault") - Poster quality: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault"
- `noCookie` (boolean, optional, default: true) - Use youtube-nocookie.com domain
- `params` (string, optional) - Additional YouTube URL parameters
- `playlistCoverId` (string, optional) - Cover video ID for playlists
- `announce` (string, optional, default: "Watch") - Custom screen reader announcement

**Usage**:
```astro
---
import YouTube from "~/components/editorial/YouTube.astro";
---

<YouTube videoId="dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up" />

<YouTube
  videoId="6avJHaC3C2U"
  title="The Art of Code by Dylan Beattie"
  poster="maxresdefault"
/>
```

**Features**:
- Significantly faster loading than native YouTube embeds
- Only loads the full player when user clicks to play
- Uses lightweight thumbnail preview initially
- Privacy-focused with youtube-nocookie.com by default
- Fully accessible with proper ARIA labels
- Responsive design that adapts to container width
- Dark mode support
- Reduced data usage for users who don't play the video
- Better Core Web Vitals scores

**Performance Benefits**:
- Reduces initial page load by ~500KB per video
- Improves Largest Contentful Paint (LCP)
- Improves Total Blocking Time (TBT)
- Defers non-critical JavaScript until interaction

---

## Additional Component Suggestions

Here are more component ideas you might want to implement:

### 1. **CodeComparison**
Side-by-side code comparison for showing before/after or different approaches.
```astro
<CodeComparison>
  <Fragment slot="before">
    // Old approach
  </Fragment>
  <Fragment slot="after">
    // New approach
  </Fragment>
</CodeComparison>
```

### 2. **Timeline**
Display chronological events or steps in a process.
```astro
<Timeline>
  <TimelineItem date="2020">First event</TimelineItem>
  <TimelineItem date="2021">Second event</TimelineItem>
</Timeline>
```

### 3. **KeyTakeaways**
A summary box highlighting the main points of the article.
```astro
<KeyTakeaways>
  - Point 1
  - Point 2
  - Point 3
</KeyTakeaways>
```

### 4. **TechStack**
Visual display of technologies used in a project.
```astro
<TechStack>
  <Tech icon="react" name="React" />
  <Tech icon="typescript" name="TypeScript" />
</TechStack>
```

### 5. **Tabs**
Switchable content tabs for showing different examples or languages.
```astro
<Tabs>
  <Tab label="JavaScript">JS code</Tab>
  <Tab label="TypeScript">TS code</Tab>
</Tabs>
```

### 6. **Callout**
Similar to InfoBox but more prominent and customizable.
```astro
<Callout emoji="🚀" color="blue">
  Pro tip: Use CDK for infrastructure as code!
</Callout>
```

### 7. **Stats / Metrics**
Display numerical data or statistics prominently.
```astro
<Stats>
  <Stat value="99.99%" label="Uptime" />
  <Stat value="< 100ms" label="Latency" />
</Stats>
```

### 8. **Definition**
Highlight and define technical terms inline.
```astro
<Definition term="Idempotent">
  An operation that can be applied multiple times without changing the result beyond the initial application.
</Definition>
```

### 9. **Checklist**
Interactive or static checklist for tutorials.
```astro
<Checklist>
  - [ ] Install dependencies
  - [ ] Configure environment
  - [x] Deploy to production
</Checklist>
```

### 10. **ResourceLinks**
Curated list of external resources with metadata.
```astro
<ResourceLinks>
  <Resource
    title="AWS CDK Documentation"
    url="https://docs.aws.amazon.com/cdk/"
    type="docs"
  />
</ResourceLinks>
```

## Best Practices

1. **Accessibility**: All components include proper ARIA attributes and semantic HTML
2. **Dark Mode**: Every component has dark mode support using `prefers-color-scheme`
3. **Responsive**: Components adapt to mobile, tablet, and desktop screens
4. **Performance**: Minimal JavaScript, CSS-only animations where possible
5. **Consistency**: Unified color palette and spacing across all components

## Color Palette

The components use a consistent color scheme:

- **Info/Blue**: `#3b82f6` (light) / `#60a5fa` (dark)
- **Success/Green**: `#10b981` (light) / `#34d399` (dark)
- **Warning/Yellow**: `#f59e0b` (light) / `#fbbf24` (dark)
- **Error/Red**: `#ef4444` (light) / `#f87171` (dark)
- **Note/Purple**: `#6366f1` (light) / `#818cf8` (dark)
- **Accent/Pink**: `#c9208a` (berry-medium from brand colors)

## Usage in MDX

These components can be used directly in your MDX blog posts:

```mdx
---
title: "My Amazing Post"
---

import PullQuote from "~/components/editorial/PullQuote.astro";
import Alert from "~/components/editorial/Alert.astro";
import DiveDeep from "~/components/editorial/DiveDeep.astro";
import YouTube from "~/components/editorial/YouTube.astro";

## Introduction

Here's my introduction...

<Alert type="info" title="Before you begin">
  Make sure you have Node.js 18+ installed.
</Alert>

## Main Content

<PullQuote cite="Someone Important">
  This is a really important quote from the article.
</PullQuote>

<YouTube videoId="dQw4w9WgXcQ" title="Example Video" />

<DiveDeep title="Advanced Details">
  Here's some advanced information that interested readers can expand...
</DiveDeep>
```

## Contributing

When creating new editorial components:

1. Place them in `src/components/editorial/`
2. Include JSDoc comments with usage examples
3. Add dark mode support
4. Ensure responsive design
5. Use semantic HTML
6. Include ARIA attributes
7. Document in this README
