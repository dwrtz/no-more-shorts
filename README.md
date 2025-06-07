# No More Shorts

A Chrome extension that removes YouTube Shorts from the YouTube interface. No more brainrot!

## Features

- Removes YouTube Shorts shelf from the homepage
- Hides individual short videos from search results
- Blocks shorts suggestions across the platform
- Works on both desktop and mobile YouTube layouts
- Automatically monitors for new content (YouTube's dynamic loading)

## Installation Instructions

### Load as Unpacked Extension

1. **Download or clone this repository** to your computer
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by clicking the toggle in the top-right corner
4. **Click "Load unpacked"** button
5. **Select the folder** containing this extension (the folder with `manifest.json`)
6. The extension should now appear in your extensions list and be active

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