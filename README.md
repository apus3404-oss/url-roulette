# 🎰 URL ROULETTE

Discover the weird & wonderful web with a single click. URL Roulette takes you to random interesting websites from a curated collection of 87+ sites.

## ✨ Features

- **Curated Collection**: 87+ hand-picked interesting websites
- **Category Filtering**: Art, Science, Weird, Games, Tools, Learn
- **Statistics Tracking**: Track sites discovered and total spins
- **Keyboard Shortcuts**: Fast navigation with keyboard
- **Responsive Design**: Works on desktop and mobile
- **Local Storage**: Your stats persist between sessions
- **Neo-Brutalist Design**: Bold, geometric, high-contrast aesthetic

## 🎮 How to Use

1. Open `index.html` in your browser
2. Click the big **SPIN** button
3. Discover a random interesting website
4. Click **VISIT SITE** to go there, or **SKIP** for another

## ⌨️ Keyboard Shortcuts

- `Space` or `Enter` - Spin the roulette
- `S` - Skip to next site
- `V` - Visit current site
- `1-7` - Quick category selection
- `Esc` - Close result card

## 🎨 Design Philosophy

URL Roulette uses a **neo-brutalist arcade** aesthetic:
- Bold geometric shapes
- High contrast colors (neon green, hot pink, yellow)
- Mechanical animations
- Grain texture overlay
- Custom typography (Archivo Black + Manrope)

## 🚀 Deployment

### Local
Simply open `index.html` in any modern browser. No build process needed!

### Online
Deploy to any static hosting service:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the folder
- **GitHub Pages**: Push to `gh-pages` branch
- **Surge**: `surge .`

## 📁 Project Structure

```
url-roulette/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # Interactive functionality
├── data.js         # Website collection database
└── README.md       # This file
```

## 🎯 Categories

- **ART**: Interactive art, music creation, visual experiences
- **SCIENCE**: Space, ocean, weather, educational visualizations
- **WEIRD**: Quirky, absurd, entertaining oddities
- **GAMES**: Browser games, puzzles, challenges
- **TOOLS**: Useful utilities, productivity apps
- **LEARN**: Educational resources, courses, tutorials

## 🔧 Customization

### Adding New Sites

Edit `data.js` and add new entries:

```javascript
{
    title: "Your Site Name",
    url: "https://example.com/",
    description: "Brief description of what makes it interesting.",
    category: "weird" // art, science, weird, games, tools, learn
}
```

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
    --color-bg: #0a0a0a;
    --color-primary: #00ff88;
    --color-secondary: #ff0055;
    --color-accent: #ffdd00;
}
```

## 🎪 Easter Eggs

- Click the SPIN button 10 times rapidly for a surprise
- Check the browser console for ASCII art
- Keyboard shortcuts for power users

## 🌟 Contributing

Want to add more interesting websites? 

1. Fork the repository
2. Add sites to `data.js`
3. Make sure they're:
   - Safe for work
   - Actually interesting/unique
   - Still online and working
4. Submit a pull request

## 📊 Stats

- **212+ curated websites** (massive collection!)
- **6 categories** (Games, Art, Science, Weird, Tools, Learn)
- **65 games** (biggest category!)
- **0 dependencies** (vanilla JavaScript)
- **100% client-side** (no backend needed)
- **Sound effects** (Web Audio API)
- **Confetti animations** (celebration on every spin)
- **Smooth animations** (60fps butter-smooth)

## 🎨 Design Credits

- Typography: Archivo Black (display), Manrope (body)
- Color Palette: Custom neo-brutalist scheme
- Animations: CSS-only, no libraries
- Icons: Custom SVG

## 📝 License

MIT License - feel free to use, modify, and share!

## 🚀 Future Ideas

- [ ] Community submissions
- [ ] Voting system for sites
- [ ] Share your discovery on social media
- [ ] Daily featured site
- [ ] Achievement system
- [ ] Dark/light theme toggle
- [ ] More categories
- [ ] API for random site

## 💡 Inspiration

Inspired by StumbleUpon, The Useless Web, and the desire to rediscover the weird and wonderful corners of the internet.

---

**Made with ❤️ and a lot of coffee**

Star on GitHub if you discover something cool! ⭐
