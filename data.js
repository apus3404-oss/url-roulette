// Curated collection of interesting websites
const websites = [
    // ART
    {
        title: "Silk - Interactive Generative Art",
        url: "http://weavesilk.com/",
        description: "Create beautiful flowing art with symmetrical brush strokes. Mesmerizing and meditative.",
        category: "art"
    },
    {
        title: "The Useless Web",
        url: "https://theuselessweb.com/",
        description: "Takes you to random useless but entertaining websites. Meta-roulette!",
        category: "weird"
    },
    {
        title: "Radio Garden",
        url: "http://radio.garden/",
        description: "Listen to live radio stations from anywhere in the world by spinning a 3D globe.",
        category: "art"
    },
    {
        title: "Patatap",
        url: "https://patatap.com/",
        description: "Portable animation and sound kit. Press keys to create visual music.",
        category: "art"
    },
    {
        title: "Incredibox",
        url: "https://www.incredibox.com/",
        description: "Create your own music with a beatboxing crew. Surprisingly addictive.",
        category: "games"
    },

    // SCIENCE
    {
        title: "Scale of the Universe",
        url: "https://scaleofuniverse.com/",
        description: "Zoom from quantum foam to the observable universe. Mind-blowing perspective.",
        category: "science"
    },
    {
        title: "Celestia - Space Simulation",
        url: "https://celestia.space/",
        description: "Free real-time 3D visualization of space. Explore the universe from your browser.",
        category: "science"
    },
    {
        title: "The Deep Sea",
        url: "https://neal.fun/deep-sea/",
        description: "Scroll down to explore ocean depths and discover creatures at each level.",
        category: "science"
    },
    {
        title: "A Soft Murmur",
        url: "https://asoftmurmur.com/",
        description: "Ambient sounds mixer for relaxation and focus. Rain, thunder, waves, and more.",
        category: "tools"
    },
    {
        title: "Hacker Typer",
        url: "https://hackertyper.net/",
        description: "Pretend you're a hacker. Smash your keyboard and watch code appear.",
        category: "weird"
    },

    // WEIRD
    {
        title: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "Move your cursor anywhere. A photo of someone pointing at it appears.",
        category: "weird"
    },
    {
        title: "Is It Christmas?",
        url: "https://isitchristmas.com/",
        description: "Answers the most important question. Supports multiple languages.",
        category: "weird"
    },
    {
        title: "Koalas to the Max",
        url: "http://www.koalastothemax.com/",
        description: "Move your mouse to reveal a hidden image through interactive circles.",
        category: "weird"
    },
    {
        title: "Bees Bees Bees",
        url: "http://www.omfgdogs.com/",
        description: "Actually it's dogs. Lots of spinning dogs. With music. You've been warned.",
        category: "weird"
    },
    {
        title: "Staggering Beauty",
        url: "http://www.staggeringbeauty.com/",
        description: "Wiggle the worm. But not too much. Epilepsy warning!",
        category: "weird"
    },

    // GAMES
    {
        title: "Quick, Draw!",
        url: "https://quickdraw.withgoogle.com/",
        description: "Can a neural network guess your doodles? Google's AI drawing game.",
        category: "games"
    },
    {
        title: "Geoguessr",
        url: "https://www.geoguessr.com/",
        description: "Guess where you are in the world from Google Street View. Addictive!",
        category: "games"
    },
    {
        title: "Little Alchemy 2",
        url: "https://littlealchemy2.com/",
        description: "Combine elements to create new ones. Start with fire, water, earth, and air.",
        category: "games"
    },
    {
        title: "The Wiki Game",
        url: "https://www.thewikigame.com/",
        description: "Race to get from one Wikipedia article to another using only links.",
        category: "games"
    },
    {
        title: "Slither.io",
        url: "http://slither.io/",
        description: "Classic snake game but multiplayer. Eat dots, grow longer, don't crash.",
        category: "games"
    },

    // TOOLS
    {
        title: "Remove Image Background",
        url: "https://www.remove.bg/",
        description: "AI-powered background removal. Upload image, get transparent PNG instantly.",
        category: "tools"
    },
    {
        title: "Photopea",
        url: "https://www.photopea.com/",
        description: "Free online photo editor. Like Photoshop but in your browser.",
        category: "tools"
    },
    {
        title: "Excalidraw",
        url: "https://excalidraw.com/",
        description: "Virtual whiteboard for sketching hand-drawn diagrams. Collaborative.",
        category: "tools"
    },
    {
        title: "This Person Does Not Exist",
        url: "https://thispersondoesnotexist.com/",
        description: "AI-generated faces. Every refresh shows a person who never existed.",
        category: "weird"
    },
    {
        title: "Calm",
        url: "https://www.calm.com/breathe",
        description: "Simple breathing exercise. Follow the circle to calm down.",
        category: "tools"
    },

    // LEARN
    {
        title: "Duolingo",
        url: "https://www.duolingo.com/",
        description: "Learn languages for free. Gamified lessons that actually work.",
        category: "learn"
    },
    {
        title: "Khan Academy",
        url: "https://www.khanacademy.org/",
        description: "Free courses on math, science, history, and more. World-class education.",
        category: "learn"
    },
    {
        title: "Typing Club",
        url: "https://www.typingclub.com/",
        description: "Learn touch typing with interactive lessons. Track your progress.",
        category: "learn"
    },
    {
        title: "Brilliant",
        url: "https://brilliant.org/",
        description: "Learn by doing. Interactive courses in math, science, and computer science.",
        category: "learn"
    },
    {
        title: "How Stuff Works",
        url: "https://www.howstuffworks.com/",
        description: "Explains how everything works. From engines to black holes.",
        category: "learn"
    },

    // MORE ART
    {
        title: "Zoomquilt",
        url: "https://zoomquilt.org/",
        description: "Infinite zoom into a collaborative painting. Trippy and beautiful.",
        category: "art"
    },
    {
        title: "The Infinite Jukebox",
        url: "https://eternal.abimon.org/",
        description: "Upload a song and it plays forever by finding similar beats to loop.",
        category: "art"
    },
    {
        title: "Generative Artistry",
        url: "https://generativeartistry.com/",
        description: "Learn to create generative art with code. Interactive tutorials.",
        category: "learn"
    },
    {
        title: "Windows 93",
        url: "https://www.windows93.net/",
        description: "Fictional operating system. Explore weird apps, games, and glitches.",
        category: "weird"
    },
    {
        title: "Falling Falling",
        url: "https://falling-falling.com/",
        description: "Infinite falling through a surreal world. Relaxing and strange.",
        category: "art"
    },

    // MORE SCIENCE
    {
        title: "If the Moon Were Only 1 Pixel",
        url: "https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html",
        description: "A tediously accurate scale model of the solar system. Scroll to understand space.",
        category: "science"
    },
    {
        title: "The Size of Space",
        url: "https://neal.fun/size-of-space/",
        description: "Compare sizes of planets, stars, and galaxies. Scroll to zoom out.",
        category: "science"
    },
    {
        title: "Earth Nullschool",
        url: "https://earth.nullschool.net/",
        description: "Real-time visualization of global weather conditions. Beautiful and informative.",
        category: "science"
    },
    {
        title: "Radiooooo",
        url: "https://radiooooo.com/",
        description: "Musical time machine. Pick a country and decade to hear music from that era.",
        category: "art"
    },
    {
        title: "The Pudding",
        url: "https://pudding.cool/",
        description: "Visual essays on culture. Data journalism that's actually fun to read.",
        category: "learn"
    },

    // MORE WEIRD
    {
        title: "Eel Slap",
        url: "http://eelslap.com/",
        description: "Slap someone with an eel. Move your mouse left and right. That's it.",
        category: "weird"
    },
    {
        title: "Patience is a Virtue",
        url: "http://www.patience-is-a-virtue.org/",
        description: "Wait. Just wait. How long can you resist clicking?",
        category: "weird"
    },
    {
        title: "Endless Horse",
        url: "http://endless.horse/",
        description: "A horse. That never ends. Keep scrolling. It just keeps going.",
        category: "weird"
    },
    {
        title: "Pointer.gg",
        url: "https://pointer.gg/",
        description: "Test your mouse accuracy with various challenges and games.",
        category: "games"
    },
    {
        title: "Checkbox Race",
        url: "https://checkboxrace.com/",
        description: "Check all the boxes as fast as you can. Surprisingly competitive.",
        category: "games"
    },

    // MORE TOOLS
    {
        title: "Temp Mail",
        url: "https://temp-mail.org/",
        description: "Disposable email address. Perfect for signing up without spam.",
        category: "tools"
    },
    {
        title: "10 Minute Mail",
        url: "https://10minutemail.com/",
        description: "Temporary email that self-destructs after 10 minutes.",
        category: "tools"
    },
    {
        title: "Hemingway Editor",
        url: "https://hemingwayapp.com/",
        description: "Makes your writing bold and clear. Highlights complex sentences.",
        category: "tools"
    },
    {
        title: "Coolors",
        url: "https://coolors.co/",
        description: "Generate perfect color palettes. Press spacebar to get new schemes.",
        category: "tools"
    },
    {
        title: "Regex101",
        url: "https://regex101.com/",
        description: "Test and debug regular expressions. Explains what each part does.",
        category: "tools"
    },

    // MORE GAMES
    {
        title: "Wordle",
        url: "https://www.nytimes.com/games/wordle/",
        description: "Guess the five-letter word in six tries. The daily word game phenomenon.",
        category: "games"
    },
    {
        title: "2048",
        url: "https://play2048.co/",
        description: "Slide tiles to combine numbers. Simple concept, hard to master.",
        category: "games"
    },
    {
        title: "Agar.io",
        url: "https://agar.io/",
        description: "Eat smaller cells, avoid bigger ones. Multiplayer cell-eating game.",
        category: "games"
    },
    {
        title: "Townscaper",
        url: "https://oskarstalberg.com/Townscaper/",
        description: "Build tiny towns with simple clicks. No goals, just creative building.",
        category: "games"
    },
    {
        title: "The Password Game",
        url: "https://neal.fun/password-game/",
        description: "Create a password that meets increasingly absurd requirements. Hilarious.",
        category: "games"
    },

    // MORE LEARN
    {
        title: "Crash Course",
        url: "https://www.youtube.com/user/crashcourse",
        description: "Educational YouTube channel covering science, history, and more.",
        category: "learn"
    },
    {
        title: "Codecademy",
        url: "https://www.codecademy.com/",
        description: "Learn to code interactively. Free courses in multiple languages.",
        category: "learn"
    },
    {
        title: "TED-Ed",
        url: "https://ed.ted.com/",
        description: "Short animated lessons on fascinating topics. Educational and entertaining.",
        category: "learn"
    },
    {
        title: "Coursera",
        url: "https://www.coursera.org/",
        description: "Online courses from top universities. Many free to audit.",
        category: "learn"
    },
    {
        title: "Memrise",
        url: "https://www.memrise.com/",
        description: "Learn languages with spaced repetition and memes. Actually works.",
        category: "learn"
    },

    // BONUS WEIRD
    {
        title: "Cat Bounce",
        url: "https://cat-bounce.com/",
        description: "Bouncing cats. Drag them around. That's the whole site.",
        category: "weird"
    },
    {
        title: "Ascii World",
        url: "https://www.asciiworld.com/",
        description: "Explore a 3D world made entirely of ASCII characters.",
        category: "weird"
    },
    {
        title: "Zoom Earth",
        url: "https://zoom.earth/",
        description: "Real-time satellite images of Earth. Track storms and weather.",
        category: "science"
    },
    {
        title: "Every Noise at Once",
        url: "https://everynoise.com/",
        description: "Scatter plot of every music genre. Click to hear samples.",
        category: "art"
    },
    {
        title: "The True Size Of",
        url: "https://www.thetruesize.com/",
        description: "Drag countries around to compare their actual sizes. Map projections lie!",
        category: "science"
    },

    // FINAL ADDITIONS
    {
        title: "Noclip",
        url: "https://noclip.website/",
        description: "Explore video game maps in your browser. Free-camera mode for classic games.",
        category: "games"
    },
    {
        title: "Shadertoy",
        url: "https://www.shadertoy.com/",
        description: "Mind-blowing shader art. Real-time graphics programming showcase.",
        category: "art"
    },
    {
        title: "Hacker News",
        url: "https://news.ycombinator.com/",
        description: "Tech news and discussion. Where developers hang out.",
        category: "learn"
    },
    {
        title: "Product Hunt",
        url: "https://www.producthunt.com/",
        description: "Discover new products and startups every day. Tech community showcase.",
        category: "learn"
    },
    {
        title: "Wayback Machine",
        url: "https://web.archive.org/",
        description: "Browse old versions of websites. Internet time machine.",
        category: "tools"
    },
    {
        title: "Ninite",
        url: "https://ninite.com/",
        description: "Install multiple programs at once. No toolbars, no clicking next.",
        category: "tools"
    },
    {
        title: "Have I Been Pwned",
        url: "https://haveibeenpwned.com/",
        description: "Check if your email was in a data breach. Important security tool.",
        category: "tools"
    },

    // MASSIVE GAMES EXPANSION
    {
        title: "Krunker.io",
        url: "https://krunker.io/",
        description: "Fast-paced browser FPS. No download needed, just pure shooting action.",
        category: "games"
    },
    {
        title: "Shell Shockers",
        url: "https://shellshock.io/",
        description: "Multiplayer FPS where you're an egg with guns. Surprisingly fun!",
        category: "games"
    },
    {
        title: "Skribbl.io",
        url: "https://skribbl.io/",
        description: "Multiplayer drawing and guessing game. Like Pictionary online.",
        category: "games"
    },
    {
        title: "Among Us Online",
        url: "https://www.crazygames.com/game/among-us-online",
        description: "Play Among Us in your browser. Find the impostor!",
        category: "games"
    },
    {
        title: "Tetris",
        url: "https://tetris.com/play-tetris",
        description: "The classic Tetris. Official version, free to play.",
        category: "games"
    },
    {
        title: "Cookie Clicker",
        url: "https://orteil.dashnet.org/cookieclicker/",
        description: "Click cookies. Buy upgrades. Lose hours of your life. Addictive idle game.",
        category: "games"
    },
    {
        title: "Dinosaur Game",
        url: "https://chromedino.com/",
        description: "Chrome's offline dinosaur game, but always available. Jump over cacti!",
        category: "games"
    },
    {
        title: "Pac-Man",
        url: "https://www.google.com/logos/2010/pacman10-i.html",
        description: "Google's playable Pac-Man doodle. Classic arcade action.",
        category: "games"
    },
    {
        title: "Snake Game",
        url: "https://playsnake.org/",
        description: "Classic snake game. Eat apples, grow longer, don't hit yourself.",
        category: "games"
    },
    {
        title: "Minesweeper",
        url: "https://minesweeperonline.com/",
        description: "Classic Minesweeper. Flag the mines, clear the board.",
        category: "games"
    },
    {
        title: "Solitaire",
        url: "https://www.solitr.com/",
        description: "Classic Klondike Solitaire. Clean interface, smooth gameplay.",
        category: "games"
    },
    {
        title: "Chess.com",
        url: "https://www.chess.com/play/computer",
        description: "Play chess against AI or real players. Multiple difficulty levels.",
        category: "games"
    },
    {
        title: "Lichess",
        url: "https://lichess.org/",
        description: "Free, open-source chess. No ads, no premium. Just pure chess.",
        category: "games"
    },
    {
        title: "Sudoku",
        url: "https://sudoku.com/",
        description: "Daily Sudoku puzzles. Multiple difficulty levels.",
        category: "games"
    },
    {
        title: "Crossword Puzzle",
        url: "https://www.washingtonpost.com/crossword-puzzles/daily/",
        description: "Daily crossword puzzles. Challenge your vocabulary.",
        category: "games"
    },
    {
        title: "Curveball",
        url: "https://www.curveball-game.com/",
        description: "3D Pong with a twist. Addictive and challenging.",
        category: "games"
    },
    {
        title: "Line Rider",
        url: "https://www.linerider.com/",
        description: "Draw tracks and watch a sledder ride them. Creative physics sandbox.",
        category: "games"
    },
    {
        title: "QWOP",
        url: "http://www.foddy.net/Athletics.html",
        description: "Control a runner's thighs and calves. Hilariously difficult.",
        category: "games"
    },
    {
        title: "Getting Over It",
        url: "https://www.crazygames.com/game/getting-over-it",
        description: "Climb a mountain with a hammer. Rage-inducing difficulty.",
        category: "games"
    },
    {
        title: "Happy Wheels",
        url: "https://www.totaljerkface.com/happy_wheels.tjf",
        description: "Ragdoll physics racing game. Brutal and hilarious.",
        category: "games"
    },
    {
        title: "Run 3",
        url: "https://www.coolmathgames.com/0-run-3",
        description: "Run through space tunnels. Addictive endless runner.",
        category: "games"
    },
    {
        title: "Fireboy and Watergirl",
        url: "https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-forest-temple",
        description: "Co-op puzzle platformer. Control two characters simultaneously.",
        category: "games"
    },
    {
        title: "Bloons TD",
        url: "https://www.crazygames.com/game/bloons-tower-defense",
        description: "Tower defense with monkeys popping balloons. Strategic and fun.",
        category: "games"
    },
    {
        title: "Kingdom Rush",
        url: "https://www.crazygames.com/game/kingdom-rush",
        description: "Fantasy tower defense. Build towers, upgrade heroes, defend the kingdom.",
        category: "games"
    },
    {
        title: "Stick War",
        url: "https://www.crazygames.com/game/stick-war",
        description: "Strategy game with stick figures. Build army, conquer territories.",
        category: "games"
    },
    {
        title: "Tank Trouble",
        url: "https://tanktrouble.com/",
        description: "Multiplayer tank battle in a maze. Simple but competitive.",
        category: "games"
    },
    {
        title: "Bonk.io",
        url: "https://bonk.io/",
        description: "Physics-based multiplayer game. Push opponents off platforms.",
        category: "games"
    },
    {
        title: "Surviv.io",
        url: "https://surviv.io/",
        description: "2D battle royale. Last player standing wins.",
        category: "games"
    },
    {
        title: "Zombs Royale",
        url: "https://zombsroyale.io/",
        description: "100 player 2D battle royale. Fast-paced and fun.",
        category: "games"
    },
    {
        title: "Paper.io 2",
        url: "https://paper-io.com/",
        description: "Capture territory by drawing lines. Don't let others cut you!",
        category: "games"
    },
    {
        title: "Hole.io",
        url: "https://hole-io.com/",
        description: "Control a black hole, eat everything. Grow bigger than opponents.",
        category: "games"
    },
    {
        title: "Wings.io",
        url: "https://wings.io/",
        description: "Multiplayer airplane dogfight. Shoot down enemies, upgrade your plane.",
        category: "games"
    },
    {
        title: "Narwhale.io",
        url: "https://narwhale.io/",
        description: "Underwater battle as a narwhal. Stab opponents with your horn.",
        category: "games"
    },
    {
        title: "Splix.io",
        url: "https://splix.io/",
        description: "Capture territory with your colored trail. Strategic multiplayer.",
        category: "games"
    },
    {
        title: "Diep.io",
        url: "https://diep.io/",
        description: "Tank shooter. Upgrade your tank, destroy shapes and players.",
        category: "games"
    },
    {
        title: "Mope.io",
        url: "https://mope.io/",
        description: "Evolve from mouse to dragon. Eat food, avoid predators.",
        category: "games"
    },
    {
        title: "Starve.io",
        url: "https://starve.io/",
        description: "Survival game. Gather resources, craft items, survive the cold.",
        category: "games"
    },
    {
        title: "Zombs.io",
        url: "https://zombs.io/",
        description: "Build base, defend against zombies. Multiplayer survival.",
        category: "games"
    },
    {
        title: "Brutal.io",
        url: "https://brutal.io/",
        description: "Swing a flail to destroy opponents. Physics-based combat.",
        category: "games"
    },
    {
        title: "Defly.io",
        url: "https://defly.io/",
        description: "Capture territory while flying a helicopter. Unique gameplay.",
        category: "games"
    },

    // MORE ART & CREATIVE
    {
        title: "Typatone",
        url: "https://typatone.com/",
        description: "Every letter you type creates a musical note. Write music with words.",
        category: "art"
    },
    {
        title: "Blob Opera",
        url: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw",
        description: "Control singing blobs with machine learning. Create your own opera.",
        category: "art"
    },
    {
        title: "Chrome Music Lab",
        url: "https://musiclab.chromeexperiments.com/",
        description: "Interactive music experiments. Learn music theory through play.",
        category: "art"
    },
    {
        title: "Silk - Interactive Generative Art 2",
        url: "http://weavesilk.com/",
        description: "Create mesmerizing symmetrical art. Relaxing and beautiful.",
        category: "art"
    },
    {
        title: "Thisissand",
        url: "https://thisissand.com/",
        description: "Create sand art with different colors. Zen-like creativity.",
        category: "art"
    },
    {
        title: "Fluid Simulation",
        url: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
        description: "Play with colorful fluid physics. Mesmerizing and interactive.",
        category: "art"
    },
    {
        title: "Incredibox",
        url: "https://www.incredibox.com/",
        description: "Create music by dragging sounds onto beatboxers. Addictive!",
        category: "art"
    },
    {
        title: "Strobe Illusion",
        url: "https://strobe.cool/",
        description: "Optical illusions with strobing patterns. Trippy visuals.",
        category: "art"
    },
    {
        title: "Optical Illusions",
        url: "https://www.moillusions.com/",
        description: "Collection of mind-bending optical illusions. Question reality.",
        category: "art"
    },
    {
        title: "Mondrian Generator",
        url: "https://www.mondrian-generator.com/",
        description: "Generate Mondrian-style abstract art. Infinite variations.",
        category: "art"
    },

    // MORE SCIENCE
    {
        title: "Stars Chrome Experiment",
        url: "https://stars.chromeexperiments.com/",
        description: "Explore 100,000 nearby stars. Beautiful space visualization.",
        category: "science"
    },
    {
        title: "Solar System Scope",
        url: "https://www.solarsystemscope.com/",
        description: "3D model of the solar system. Explore planets and moons.",
        category: "science"
    },
    {
        title: "Human Benchmark",
        url: "https://humanbenchmark.com/",
        description: "Test your reaction time, memory, and cognitive abilities.",
        category: "science"
    },
    {
        title: "Flight Radar 24",
        url: "https://www.flightradar24.com/",
        description: "Track real-time flights around the world. See every plane in the sky.",
        category: "science"
    },
    {
        title: "Marine Traffic",
        url: "https://www.marinetraffic.com/",
        description: "Track ships in real-time. See global maritime traffic.",
        category: "science"
    },
    {
        title: "Earthquake Track",
        url: "https://earthquaketrack.com/",
        description: "Real-time earthquake monitoring. See recent seismic activity.",
        category: "science"
    },
    {
        title: "Wind Map",
        url: "http://hint.fm/wind/",
        description: "Live wind patterns across the US. Beautiful data visualization.",
        category: "science"
    },
    {
        title: "Light Pollution Map",
        url: "https://www.lightpollutionmap.info/",
        description: "See light pollution around the world. Find dark sky locations.",
        category: "science"
    },
    {
        title: "Radio Aporee",
        url: "https://aporee.org/maps/",
        description: "Global sound map. Listen to field recordings from around the world.",
        category: "science"
    },
    {
        title: "Protein Folding Game",
        url: "https://fold.it/",
        description: "Solve protein folding puzzles. Contribute to real science research.",
        category: "science"
    },

    // MORE WEIRD
    {
        title: "Zombo.com",
        url: "https://zombo.com/",
        description: "The only limit is yourself. Welcome to Zombocom. That's it.",
        category: "weird"
    },
    {
        title: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "Move cursor, see photo of someone pointing at it. Oddly satisfying.",
        category: "weird"
    },
    {
        title: "The Restart Page",
        url: "http://www.therestartpage.com/",
        description: "Restart screens from different operating systems. Nostalgic.",
        category: "weird"
    },
    {
        title: "Ascii Fluid",
        url: "https://asciicker.com/x13/",
        description: "Fluid simulation made of ASCII characters. Weird and cool.",
        category: "weird"
    },
    {
        title: "Pointer.gg",
        url: "https://pointer.gg/",
        description: "Test your mouse accuracy. Various clicking challenges.",
        category: "weird"
    },
    {
        title: "Find the Invisible Cow",
        url: "https://findtheinvisiblecow.com/",
        description: "Move your mouse to find the invisible cow. It moos louder when close.",
        category: "weird"
    },
    {
        title: "Optical Illusions",
        url: "https://www.michaelbach.de/ot/",
        description: "Collection of visual phenomena and optical illusions.",
        category: "weird"
    },
    {
        title: "Weave Silk",
        url: "http://weavesilk.com/",
        description: "Create beautiful symmetrical drawings. Relaxing and mesmerizing.",
        category: "weird"
    },
    {
        title: "Falling Sand",
        url: "https://sandspiel.club/",
        description: "Falling sand physics game. Mix elements and watch reactions.",
        category: "weird"
    },
    {
        title: "Checkbox Olympic",
        url: "https://checkboxolympics.com/",
        description: "Olympic games but with checkboxes. Surprisingly competitive.",
        category: "weird"
    },

    // MORE TOOLS
    {
        title: "TinyWow",
        url: "https://tinywow.com/",
        description: "Free online tools for PDF, images, videos. No signup required.",
        category: "tools"
    },
    {
        title: "Remove.bg",
        url: "https://www.remove.bg/",
        description: "Remove image backgrounds instantly. AI-powered and accurate.",
        category: "tools"
    },
    {
        title: "Cleanup.pictures",
        url: "https://cleanup.pictures/",
        description: "Remove objects from photos. AI-powered inpainting tool.",
        category: "tools"
    },
    {
        title: "Unscreen",
        url: "https://www.unscreen.com/",
        description: "Remove video backgrounds. No green screen needed.",
        category: "tools"
    },
    {
        title: "Squoosh",
        url: "https://squoosh.app/",
        description: "Compress and optimize images. Compare formats side-by-side.",
        category: "tools"
    },
    {
        title: "PDF24 Tools",
        url: "https://tools.pdf24.org/",
        description: "Free PDF tools. Merge, split, compress, convert PDFs.",
        category: "tools"
    },
    {
        title: "Online Voice Recorder",
        url: "https://online-voice-recorder.com/",
        description: "Record audio directly in browser. Simple and effective.",
        category: "tools"
    },
    {
        title: "Clipchamp",
        url: "https://clipchamp.com/",
        description: "Free online video editor. No download required.",
        category: "tools"
    },
    {
        title: "Canva",
        url: "https://www.canva.com/",
        description: "Design graphics, presentations, posters. Drag-and-drop editor.",
        category: "tools"
    },
    {
        title: "Figma",
        url: "https://www.figma.com/",
        description: "Collaborative design tool. Create UI/UX designs in browser.",
        category: "tools"
    },

    // MORE LEARN
    {
        title: "Brilliant",
        url: "https://brilliant.org/",
        description: "Learn math and science through problem-solving. Interactive courses.",
        category: "learn"
    },
    {
        title: "Coursera",
        url: "https://www.coursera.org/",
        description: "Online courses from top universities. Many free to audit.",
        category: "learn"
    },
    {
        title: "edX",
        url: "https://www.edx.org/",
        description: "University-level courses online. Free access to course materials.",
        category: "learn"
    },
    {
        title: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu/",
        description: "Free MIT course materials. World-class education for free.",
        category: "learn"
    },
    {
        title: "FreeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "Learn to code for free. Interactive coding challenges.",
        category: "learn"
    },
    {
        title: "The Odin Project",
        url: "https://www.theodinproject.com/",
        description: "Free full-stack web development curriculum. Project-based learning.",
        category: "learn"
    },
    {
        title: "Scrimba",
        url: "https://scrimba.com/",
        description: "Interactive coding screencasts. Learn by doing.",
        category: "learn"
    },
    {
        title: "Exercism",
        url: "https://exercism.org/",
        description: "Code practice and mentorship. 50+ programming languages.",
        category: "learn"
    },
    {
        title: "LeetCode",
        url: "https://leetcode.com/",
        description: "Coding interview practice. Prepare for tech interviews.",
        category: "learn"
    },
    {
        title: "HackerRank",
        url: "https://www.hackerrank.com/",
        description: "Practice coding, prepare for interviews. Multiple languages.",
        category: "learn"
    },

    // EVEN MORE GAMES
    {
        title: "Townscaper",
        url: "https://oskarstalberg.com/Townscaper/",
        description: "Build beautiful tiny towns. No goals, just creative building.",
        category: "games"
    },
    {
        title: "A Dark Room",
        url: "https://adarkroom.doublespeakgames.com/",
        description: "Text-based adventure. Starts simple, becomes epic. Addictive.",
        category: "games"
    },
    {
        title: "Candy Box 2",
        url: "https://candybox2.github.io/",
        description: "ASCII RPG that starts with eating candies. Gets surprisingly deep.",
        category: "games"
    },
    {
        title: "Universal Paperclips",
        url: "https://www.decisionproblem.com/paperclips/",
        description: "Incremental game about making paperclips. Existential and addictive.",
        category: "games"
    },
    {
        title: "The Impossible Quiz",
        url: "https://www.crazygames.com/game/the-impossible-quiz",
        description: "Absurd quiz with trick questions. Frustrating and hilarious.",
        category: "games"
    },
    {
        title: "Helicopter Game",
        url: "https://www.helicopter-game.org/",
        description: "Classic helicopter obstacle game. Simple but addictive.",
        category: "games"
    },
    {
        title: "Slope",
        url: "https://slope-game.github.io/",
        description: "Roll down a slope at increasing speeds. Test your reflexes.",
        category: "games"
    },
    {
        title: "Drift Hunters",
        url: "https://www.crazygames.com/game/drift-hunters",
        description: "3D drifting game. Customize cars, master drifting.",
        category: "games"
    },
    {
        title: "Moto X3M",
        url: "https://www.crazygames.com/game/moto-x3m",
        description: "Bike racing with stunts. Fast-paced and challenging.",
        category: "games"
    },
    {
        title: "Vex 5",
        url: "https://www.crazygames.com/game/vex-5",
        description: "Parkour platformer. Precise controls, challenging levels.",
        category: "games"
    },

    // MORE CREATIVE & ART
    {
        title: "Neal.fun",
        url: "https://neal.fun/",
        description: "Collection of creative interactive experiences. All are amazing.",
        category: "art"
    },
    {
        title: "Draw a Stickman",
        url: "http://www.drawastickman.com/",
        description: "Draw a character and watch it come to life in an adventure.",
        category: "art"
    },
    {
        title: "Quick, Draw!",
        url: "https://quickdraw.withgoogle.com/",
        description: "AI tries to guess your drawings. Fun and impressive.",
        category: "art"
    },
    {
        title: "AutoDraw",
        url: "https://www.autodraw.com/",
        description: "AI helps you draw. Suggests professional drawings from your sketches.",
        category: "art"
    },
    {
        title: "Silk Pavilion",
        url: "http://weavesilk.com/",
        description: "Create flowing symmetrical art. Meditative and beautiful.",
        category: "art"
    },
    {
        title: "Incredibox",
        url: "https://www.incredibox.com/demo/",
        description: "Make music with beatboxers. Drag and drop sounds.",
        category: "art"
    },
    {
        title: "Chrome Music Lab",
        url: "https://musiclab.chromeexperiments.com/Experiments",
        description: "Learn music through interactive experiments.",
        category: "art"
    },
    {
        title: "Patatap",
        url: "https://www.patatap.com/",
        description: "Portable animation and sound kit. Press keys for visuals and sounds.",
        category: "art"
    },

    // MORE SCIENCE & EDUCATIONAL
    {
        title: "Google Earth",
        url: "https://earth.google.com/web/",
        description: "Explore the entire planet. Satellite imagery and 3D terrain.",
        category: "science"
    },
    {
        title: "Stellarium Web",
        url: "https://stellarium-web.org/",
        description: "Online planetarium. See stars, planets, and constellations.",
        category: "science"
    },
    {
        title: "The Scale of the Universe 2",
        url: "https://htwins.net/scale2/",
        description: "Zoom from quantum foam to the universe. Mind-blowing scale.",
        category: "science"
    },
    {
        title: "Periodic Table",
        url: "https://ptable.com/",
        description: "Interactive periodic table. Click elements for detailed info.",
        category: "science"
    },
    {
        title: "PhET Simulations",
        url: "https://phet.colorado.edu/",
        description: "Interactive science and math simulations. Learn by experimenting.",
        category: "science"
    },
    {
        title: "Anatomy Learning",
        url: "https://www.biodigital.com/",
        description: "3D human anatomy. Explore the human body in detail.",
        category: "science"
    },
    {
        title: "Desmos Graphing Calculator",
        url: "https://www.desmos.com/calculator",
        description: "Beautiful online graphing calculator. Visualize math functions.",
        category: "science"
    },
    {
        title: "GeoGebra",
        url: "https://www.geogebra.org/calculator",
        description: "Interactive geometry, algebra, and calculus. Powerful math tool.",
        category: "science"
    },

    // MORE WEIRD & QUIRKY
    {
        title: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "Photos of people pointing at your cursor. Oddly satisfying.",
        category: "weird"
    },
    {
        title: "The Useless Web Index",
        url: "https://theuselesswebindex.com/",
        description: "Directory of useless but entertaining websites.",
        category: "weird"
    },
    {
        title: "Bored Button",
        url: "https://www.boredbutton.com/",
        description: "Click when bored. Takes you to random entertaining sites.",
        category: "weird"
    },
    {
        title: "Random Street View",
        url: "https://randomstreetview.com/",
        description: "Random Google Street View locations. Virtual travel.",
        category: "weird"
    },
    {
        title: "Geoguessr",
        url: "https://www.geoguessr.com/",
        description: "Guess locations from Street View. Addictive geography game.",
        category: "games"
    },
    {
        title: "Window Swap",
        url: "https://www.window-swap.com/",
        description: "Look through someone else's window anywhere in the world.",
        category: "weird"
    },
    {
        title: "Drive & Listen",
        url: "https://driveandlisten.herokuapp.com/",
        description: "Drive through cities while listening to local radio.",
        category: "weird"
    },
    {
        title: "My 90s TV",
        url: "https://www.my90stv.com/",
        description: "Watch 90s TV commercials and shows. Pure nostalgia.",
        category: "weird"
    },

    // MORE USEFUL TOOLS
    {
        title: "Notion",
        url: "https://www.notion.so/",
        description: "All-in-one workspace. Notes, docs, wikis, and databases.",
        category: "tools"
    },
    {
        title: "Miro",
        url: "https://miro.com/",
        description: "Online collaborative whiteboard. Brainstorm and plan together.",
        category: "tools"
    },
    {
        title: "Grammarly",
        url: "https://www.grammarly.com/",
        description: "Writing assistant. Check grammar, spelling, and style.",
        category: "tools"
    },
    {
        title: "DeepL Translator",
        url: "https://www.deepl.com/translator",
        description: "AI-powered translator. More accurate than Google Translate.",
        category: "tools"
    },
    {
        title: "TinyURL",
        url: "https://tinyurl.com/",
        description: "Shorten long URLs. Create custom short links.",
        category: "tools"
    },
    {
        title: "QR Code Generator",
        url: "https://www.qr-code-generator.com/",
        description: "Create QR codes for URLs, text, and more.",
        category: "tools"
    },
    {
        title: "Speedtest",
        url: "https://www.speedtest.net/",
        description: "Test your internet speed. Check download and upload speeds.",
        category: "tools"
    },
    {
        title: "Down Detector",
        url: "https://downdetector.com/",
        description: "Check if websites are down. Real-time outage monitoring.",
        category: "tools"
    },

    // MORE LEARNING RESOURCES
    {
        title: "W3Schools",
        url: "https://www.w3schools.com/",
        description: "Learn web development. Tutorials and references for HTML, CSS, JS.",
        category: "learn"
    },
    {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "Comprehensive web development documentation. The developer's bible.",
        category: "learn"
    },
    {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/",
        description: "Programming Q&A community. Find answers to coding questions.",
        category: "learn"
    },
    {
        title: "GitHub",
        url: "https://github.com/",
        description: "Code hosting and collaboration. Explore open-source projects.",
        category: "learn"
    },
    {
        title: "CodePen",
        url: "https://codepen.io/",
        description: "Social development environment. Share and discover code.",
        category: "learn"
    },
    {
        title: "CSS Tricks",
        url: "https://css-tricks.com/",
        description: "Web design and development articles. Learn CSS techniques.",
        category: "learn"
    },
    {
        title: "JavaScript.info",
        url: "https://javascript.info/",
        description: "Modern JavaScript tutorial. From basics to advanced.",
        category: "learn"
    },
    {
        title: "Regex101",
        url: "https://regex101.com/",
        description: "Test and learn regular expressions. Explains each part.",
        category: "learn"
    }
];