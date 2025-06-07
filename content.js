// No More Shorts - Content Script
// Removes YouTube Shorts from the YouTube interface

(function() {
    'use strict';

    const blockShortsPage = () => {
        // If we're on a shorts page, redirect away or block it
        if (location.pathname.startsWith('/shorts/')) {
            // Stop any playing videos immediately
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.pause();
                video.muted = true;
                video.currentTime = 0;
                video.src = '';
            });
            
            // Hide the entire page content
            document.body.style.display = 'none';
            
            // Redirect to homepage after a brief moment
            setTimeout(() => {
                window.location.href = 'https://www.youtube.com/';
            }, 100);
            
            return true;
        }
        return false;
    };

    const hideShorts = () => {
        // First check if we're on a shorts page and block it
        if (blockShortsPage()) {
            return 0;
        }

        // Selectors for various YouTube Shorts elements
        const shortsSelectors = [
            // Shorts shelf on homepage
            '[aria-label*="Shorts"]',
            '[title*="Shorts"]',
            'ytd-rich-shelf-renderer[is-shorts]',
            'ytd-reel-shelf-renderer',
            
            // Individual short videos
            'ytd-video-renderer[is-short]',
            'ytd-grid-video-renderer[is-short]',
            'ytd-compact-video-renderer[is-short]',
            
            // Shorts in search results
            'ytd-reel-video-renderer',
            
            // Shorts shelf container
            'div[id*="shorts"]',
            'ytd-rich-section-renderer:has(ytd-reel-shelf-renderer)',
            
            // Mobile shorts
            '.ytm-shorts-lockup-view-model',
            '.shorts-video-cell',
            
            // Additional patterns
            '[href*="/shorts/"]',
            'a[href*="/shorts/"]'
        ];

        let hiddenCount = 0;

        // Also mute any videos that might be shorts
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            const container = video.closest('[href*="/shorts/"], ytd-reel-video-renderer, ytd-reel-shelf-renderer');
            if (container) {
                video.pause();
                video.muted = true;
            }
        });

        shortsSelectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    if (element && !element.hasAttribute('data-shorts-hidden')) {
                        // Find the closest container that should be hidden
                        let container = element;
                        
                        // For some elements, we need to hide the parent container
                        if (element.tagName === 'A' && element.href.includes('/shorts/')) {
                            container = element.closest('ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer, ytd-rich-item-renderer') || element;
                        }
                        
                        container.style.display = 'none';
                        container.setAttribute('data-shorts-hidden', 'true');
                        hiddenCount++;
                    }
                });
            } catch (e) {
                console.warn('No More Shorts: Error with selector', selector, e);
            }
        });

        return hiddenCount;
    };

    // Initial cleanup
    hideShorts();

    // Create a MutationObserver to watch for new content being added
    const observer = new MutationObserver((mutations) => {
        let shouldCheck = false;
        
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldCheck = true;
            }
        });
        
        if (shouldCheck) {
            // Debounce the hiding function
            clearTimeout(window.shortsHideTimeout);
            window.shortsHideTimeout = setTimeout(hideShorts, 100);
        }
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also run on page navigation (YouTube is a SPA)
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(hideShorts, 500);
        }
    }).observe(document, { subtree: true, childList: true });

    console.log('No More Shorts extension loaded and monitoring for YouTube Shorts');
})();