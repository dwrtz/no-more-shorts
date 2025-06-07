# No More Shorts

A Chrome extension that removes YouTube Shorts from the YouTube interface. No more brainrot!

## Features

- Removes YouTube Shorts shelf from the homepage
- Hides individual short videos from search results
- Blocks shorts suggestions across the platform
- Works on both desktop and mobile YouTube layouts
- Automatically monitors for new content (YouTube's dynamic loading)

## Installation Instructions

### Method 1: Load as Unpacked Extension (Recommended)

1. **Download or clone this repository** to your computer
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by clicking the toggle in the top-right corner
4. **Click "Load unpacked"** button
5. **Select the folder** containing this extension (the folder with `manifest.json`)
6. The extension should now appear in your extensions list and be active

### Method 2: Create Icons (Optional)

The extension includes placeholder icon files. To get proper icons:

1. Create 16x16, 48x48, and 128x128 pixel PNG images
2. Replace the placeholder `icon16.png`, `icon48.png`, and `icon128.png` files
3. Suggested design: A red prohibition symbol (circle with line through it) over a phone/video icon
4. Reload the extension in `chrome://extensions/` after replacing icons

## Usage

Once installed, the extension automatically works on YouTube:

- Visit `youtube.com` and you should no longer see YouTube Shorts
- The extension runs silently in the background
- No configuration needed - it just works!

## How It Works

The extension uses:

- **Content scripts** that run on YouTube pages
- **CSS rules** to hide shorts-related elements
- **MutationObserver** to monitor for new content being loaded
- **Multiple selectors** to catch different types of shorts elements

## Troubleshooting

**Shorts still showing?**
- Try refreshing the YouTube page
- Check that the extension is enabled in `chrome://extensions/`
- YouTube occasionally changes their HTML structure; the extension may need updates

**Extension not working?**
- Make sure Developer Mode is enabled
- Check the browser console (F12) for any error messages
- Try reloading the extension

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: None required (extension only modifies page display)
- **Files**:
  - `manifest.json` - Extension configuration
  - `content.js` - Main logic for detecting and hiding shorts
  - `styles.css` - Additional CSS rules for hiding elements
  - Icon files (placeholders included)

## Privacy

This extension:
- Runs only on YouTube pages
- Does not collect any data
- Does not send information anywhere
- Only modifies what you see on the page

## Contributing

Feel free to submit issues or improvements! YouTube occasionally changes their HTML structure, so the selectors may need periodic updates.

## License

Free to use and modify as needed.

---

*Enjoy your shorts-free YouTube experience!* 🎉