// State management
let currentCategory = 'all';
let currentSite = null;
let visitedSites = new Set();
let totalSpins = 0;
let soundEnabled = true;

// Sound effects (using Web Audio API)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency, duration, type = 'sine') {
    if (!soundEnabled) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function playSpinSound() {
    // Ascending notes for spin
    playSound(400, 0.1);
    setTimeout(() => playSound(500, 0.1), 100);
    setTimeout(() => playSound(600, 0.1), 200);
    setTimeout(() => playSound(800, 0.2), 300);
}

function playClickSound() {
    playSound(600, 0.05, 'square');
}

function playSuccessSound() {
    playSound(800, 0.1);
    setTimeout(() => playSound(1000, 0.15), 100);
}

// DOM elements
const spinButton = document.getElementById('spinButton');
const resultContainer = document.getElementById('resultContainer');
const resultCategory = document.getElementById('resultCategory');
const resultTitle = document.getElementById('resultTitle');
const resultDescription = document.getElementById('resultDescription');
const visitButton = document.getElementById('visitButton');
const skipButton = document.getElementById('skipButton');
const shareButton = document.getElementById('shareButton');
const categoryPills = document.querySelectorAll('.category-pill');
const sitesDiscoveredEl = document.getElementById('sitesDiscovered');
const spinsCountEl = document.getElementById('spinsCount');
const totalSitesEl = document.getElementById('totalSites');

// Initialize
function init() {
    loadStats();
    updateTotalSites();
    setupEventListeners();
}

// Load stats from localStorage
function loadStats() {
    const savedVisited = localStorage.getItem('visitedSites');
    const savedSpins = localStorage.getItem('totalSpins');

    if (savedVisited) {
        visitedSites = new Set(JSON.parse(savedVisited));
    }

    if (savedSpins) {
        totalSpins = parseInt(savedSpins, 10);
    }

    updateStatsDisplay();
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('visitedSites', JSON.stringify([...visitedSites]));
    localStorage.setItem('totalSpins', totalSpins.toString());
}

// Update stats display
function updateStatsDisplay() {
    sitesDiscoveredEl.textContent = visitedSites.size;
    spinsCountEl.textContent = totalSpins;
}

// Update total sites count
function updateTotalSites() {
    totalSitesEl.textContent = websites.length;
}

// Setup event listeners
function setupEventListeners() {
    spinButton.addEventListener('click', handleSpin);
    skipButton.addEventListener('click', handleSkip);
    shareButton.addEventListener('click', handleShare);

    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => handleCategoryChange(pill));
    });
}

// Handle share button
async function handleShare() {
    playClickSound();

    if (!currentSite) return;

    const shareData = {
        title: `${currentSite.title} - URL Roulette`,
        text: `Check out this cool site I discovered: ${currentSite.title} - ${currentSite.description}`,
        url: currentSite.url
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            await navigator.clipboard.writeText(`${currentSite.title}\n${currentSite.description}\n${currentSite.url}`);
            showToast('Link copied to clipboard!');
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Share failed:', err);
        }
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Handle category change
function handleCategoryChange(pill) {
    playClickSound();

    // Update active state
    categoryPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    // Update current category
    currentCategory = pill.dataset.category;

    // Hide result if visible
    resultContainer.classList.remove('visible');
}

// Get filtered websites based on current category
function getFilteredWebsites() {
    if (currentCategory === 'all') {
        return websites;
    }
    return websites.filter(site => site.category === currentCategory);
}

// Get random site from filtered list
function getRandomSite() {
    const filtered = getFilteredWebsites();

    if (filtered.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

// Handle spin button click
function handleSpin() {
    // Prevent multiple clicks during animation
    if (spinButton.classList.contains('spinning')) {
        return;
    }

    // Get random site
    const site = getRandomSite();

    if (!site) {
        alert('No sites available in this category!');
        return;
    }

    // Play spin sound
    playSpinSound();

    // Update stats
    totalSpins++;
    visitedSites.add(site.url);
    updateStatsDisplay();
    saveStats();

    // Store current site
    currentSite = site;

    // Add spinning animation
    spinButton.classList.add('spinning');

    // Create confetti effect
    createConfetti();

    // Hide result during spin
    resultContainer.classList.remove('visible');

    // Show result after animation
    setTimeout(() => {
        displayResult(site);
        spinButton.classList.remove('spinning');
        playSuccessSound();
    }, 1200);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#00ff88', '#ff0055', '#ffdd00'];
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
        document.body.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Display result
function displayResult(site) {
    // Update result content
    resultCategory.textContent = site.category.toUpperCase();
    resultTitle.textContent = site.title;
    resultDescription.textContent = site.description;
    visitButton.href = site.url;

    // Show result with animation
    setTimeout(() => {
        resultContainer.classList.add('visible');
    }, 100);
}

// Handle skip button
function handleSkip() {
    playClickSound();
    handleSpin();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space or Enter to spin
    if (e.code === 'Space' || e.code === 'Enter') {
        if (!resultContainer.classList.contains('visible')) {
            e.preventDefault();
            handleSpin();
        }
    }

    // Escape to hide result
    if (e.code === 'Escape') {
        resultContainer.classList.remove('visible');
    }

    // S to skip (when result is visible)
    if (e.code === 'KeyS' && resultContainer.classList.contains('visible')) {
        e.preventDefault();
        handleSkip();
    }

    // V to visit (when result is visible)
    if (e.code === 'KeyV' && resultContainer.classList.contains('visible')) {
        e.preventDefault();
        window.open(currentSite.url, '_blank');
    }

    // Number keys for categories (1-7)
    if (e.code >= 'Digit1' && e.code <= 'Digit7') {
        const index = parseInt(e.code.replace('Digit', '')) - 1;
        const pills = Array.from(categoryPills);
        if (pills[index]) {
            handleCategoryChange(pills[index]);
        }
    }
});

// Track visit button clicks for analytics
visitButton.addEventListener('click', () => {
    // Could send analytics here
    console.log('Visiting:', currentSite.url);
});

// Add some fun Easter eggs
let clickCount = 0;
let clickTimer = null;

spinButton.addEventListener('click', () => {
    clickCount++;

    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
        clickCount = 0;
    }, 2000);

    // Easter egg: 10 rapid clicks
    if (clickCount === 10) {
        document.body.style.animation = 'rainbow 2s linear';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        clickCount = 0;
    }
});

// Rainbow animation for Easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Keyboard hint dismissal
const keyboardHint = document.getElementById('keyboardHint');
if (keyboardHint) {
    // Auto-hide after 10 seconds
    setTimeout(() => {
        keyboardHint.classList.add('hidden');
    }, 10000);

    // Click to dismiss
    keyboardHint.addEventListener('click', () => {
        keyboardHint.classList.add('hidden');
    });

    // Dismiss on first keyboard interaction
    let firstKeyPress = true;
    document.addEventListener('keydown', () => {
        if (firstKeyPress && keyboardHint) {
            setTimeout(() => {
                keyboardHint.classList.add('hidden');
            }, 500);
            firstKeyPress = false;
        }
    }, { once: true });
}

// Add some console art for fun
console.log(`
%c
██╗   ██╗██████╗ ██╗         ██████╗  ██████╗ ██╗   ██╗██╗     ███████╗████████╗████████╗███████╗
██║   ██║██╔══██╗██║         ██╔══██╗██╔═══██╗██║   ██║██║     ██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝
██║   ██║██████╔╝██║         ██████╔╝██║   ██║██║   ██║██║     █████╗     ██║      ██║   █████╗
██║   ██║██╔══██╗██║         ██╔══██╗██║   ██║██║   ██║██║     ██╔══╝     ██║      ██║   ██╔══╝
╚██████╔╝██║  ██║███████╗    ██║  ██║╚██████╔╝╚██████╔╝███████╗███████╗   ██║      ██║   ███████╗
 ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝      ╚═╝   ╚══════╝

%cDiscover the weird & wonderful web 🎰
%cKeyboard shortcuts:
  Space/Enter - Spin
  S - Skip
  V - Visit
  1-7 - Select category
  Esc - Close result

Made with ❤️ by a human (and Claude)
`,
'color: #00ff88; font-weight: bold;',
'color: #ff0055; font-size: 14px;',
'color: #888; font-size: 12px;'
);
