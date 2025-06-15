# Assets Folder

This folder contains static assets for the Ascend Stay website.

## Images

### Logo

- Place your Ascend Stay logo in `src/assets/images/`
- Recommended formats: PNG, SVG, or WebP
- Recommended naming: `logo.png`, `logo.svg`, or `ascend-stay-logo.png`
- For best quality, use SVG format if possible

### Usage Example

To use your logo in components:

```typescript
// Import the logo
import logo from "../assets/images/logo.png";
// or for SVG
import logo from "../assets/images/logo.svg";

// Use in JSX
<img src={logo} alt="Ascend Stay Logo" />;
```

### Recommended Logo Specifications

- **Width:** 200-300px for header use
- **Height:** 50-80px for header use
- **Format:** SVG (scalable) or PNG with transparent background
- **Color:** Should work on light backgrounds (header)

## File Organization

```
src/assets/
├── images/
│   ├── logo.svg (or logo.png)
│   ├── hero-background.jpg
│   └── other-images...
└── icons/
    └── (future icon files)
```
