// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Utility Functions
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function textToHex(text) {
    return text
        .split('')
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase())
        .join('')
        .match(/.{1,2}/g)
        .join(' ');
}

// Data
const data = {
    age: {
      new: [
        "a sparkling new machine",
        "the freshest byte on the block",
        "barely out of the box",
        "new and naive, but eager to learn",
        "shiny and full of potential",
        "still smells like factory",
        "a cutting-edge charmer",
        "just booted into existence",
        "a newborn in the digital world",
        "still updating BIOS"
      ],
      mid: [
        "in the prime of their processing",
        "seasoned and stable",
        "reliable and efficient",
        "knows their way around the kernel",
        "past the teething phase",
        "mature but not outdated",
        "no stranger to patches",
        "firmware fully formed",
        "knows what it's doing",
        "has seen a few updates"
      ],
      old: [
        "a classic piece of silicon",
        "vintage and proud",
        "running strong despite the dust",
        "still rocking spinning disks",
        "knows floppy disks by heart",
        "might creak a little when booting",
        "battle-tested and wise",
        "lives in compatibility mode",
        "a living legend",
        "was there before cloud storage"
      ],
      ancient: [
        "a classic piece of silicon",
        "vintage and proud",
        "running strong despite the dust",
        "still rocking spinning disks",
        "knows floppy disks by heart",
        "might creak a little when booting",
        "battle-tested and wise",
        "lives in compatibility mode",
        "a living legend",
        "was there before cloud storage"
      ]
    },
    os: {
      windows: [
        "fluent in DirectX and drama",
        "says 'It's not a bug, it's a feature!'",
        "enjoys long updates and short blue screens",
        "compatible with chaos",
        "can run Minesweeper like a pro",
        "lives for task manager drama",
        "loves Solitaire and stability (sometimes)",
        "comes with baggage and bloatware",
        "still haunted by Clippy",
        "ready to crash your party"
      ],
      mac: [
        "stylish and sophisticated",
        "knows their way around a creative suite",
        "minimalist outside, maximalist inside",
        "smooth as a Retina display",
        "thinks different—because they are",
        "great at garage band solos",
        "prefers clean lines and cleaner code",
        "talks in gestures and smooth animations",
        "has a taste for artisanal apps",
        "designed in California, loved everywhere"
      ],
      linux: [
        "open-source and open-hearted",
        "a terminal wizard",
        "custom-built and proud",
        "enjoys compiling kernels for fun",
        "runs on passion and sudo",
        "isn’t afraid of the command line",
        "hacks for sport and freedom",
        "a penguin in the streets, root in the sheets",
        "lives life one distro at a time",
        "reboots only when they feel like it"
      ]
    },
    purpose: {
      gaming: [
        "craves high framerates and late-night raids",
        "lives for RGB and respawns",
        "competitive and caffeinated",
        "knows all the cheat codes (but won’t admit it)",
        "never skips a patch note",
        "built for battle and boss fights",
        "fast, furious, and full of flair",
        "comes with a side of rage quits",
        "up all night, every night",
        "thinks lag is a personal insult"
      ],
      surfing: [
        "lives for spreadsheets and syntax",
        "efficient and always on time",
        "loves a clean desktop",
        "has their resume saved in triplicate",
        "gets along with printers (usually)",
        "all about deadlines and dialogue boxes",
        "grinds from 9 to 5 and beyond",
        "knows every shortcut in Excel",
        "runs meetings and macros",
        "professionally caffeinated"
      ],
      business: [
        "streams like a dream",
        "never skips the intro",
        "lives for playlists and pixels",
        "binge-ready and buffer-free",
        "always connected and content-curated",
        "a soft spot for romcoms and RAM",
        "built for bass and binge sessions",
        "knows your algorithm better than you",
        "can quote every line from your favorite show",
        "addicted to autoplay"
      ]
    },
    likes_and_dislikes:{
    generic_likes: [
      "long boot sequences",
      "high-speed connections",
      "smooth updates",
      "fast processors",
      "low latency",
      "high bandwidth",
      "good graphics",
      "stable connections",
      "reliable power supply",
      "great peripherals"
    ],
    generic_dislikes: [
      "unexpected shutdowns",
      "slow internet",
      "crashes",
      "buffering",
      "low battery warnings",
      "dust bunnies",
      "outdated drivers",
      "bad cables",
      "poor ventilation",
      "unwanted pop-ups"
    ],
    gaming_device_likes: [
      "high framerates",
      "RGB lighting",
      "fast load times",
      "competitive gaming",
      "multiplayer madness",
      "epic loot drops",
      "game night marathons",
      "LAN parties",
      "gaming snacks",
      "voice chat shenanigans"
    ],
    gaming_device_dislikes: [
      "lag spikes",
      "cheaters",
      "low FPS",
      "bad matchmaking",
      "toxic players",
      "game crashes",
      "slow downloads",
      "unskippable cutscenes",
      "pay-to-win mechanics",
      "broken servers"
    ],
    surfing_the_web_likes: [
      "fast browsing",
      "clean interfaces",
      "easy navigation",
      "bookmarking",
      "ad-blockers",
      "social media scrolling",
      "online shopping",
      "streaming videos",
      "cloud storage",
      "web apps"
    ],
    surfing_the_web_dislikes: [
      "pop-up ads",
      "slow loading times",
      "broken links",
      "spam emails",
      "data caps",
      "browser crashes",
      "unresponsive sites",
      "bad Wi-Fi signals",
      "phishing attempts",
      "annoying captchas"
    ],
    business_analyst_likes: [
      "data visualization",
      "pivot tables",
      "business intelligence",
      "data mining",
      "dashboards",
      "SQL queries",
      "data-driven decisions",
      "team collaboration",
      "project management tools",
      "analytics"
    ],
    business_analyst_dislikes: [
      "data silos",
      "poor data quality",
      "inefficient processes",
      "lack of collaboration",
      "manual reporting",
      "data entry errors",
      "outdated software",
      "unstructured data",
      "poor communication",
      "ineffective meetings"
    ]
  },
  os_descriptors:{
    mac_descriptors: [
      "sleek and stylish",
      "creative and innovative",
      "minimalist and efficient",
      "user-friendly and intuitive",
      "high-performance and reliable",
      "versatile and adaptable",
      "powerful and capable",
      "secure and private",
      "premium and luxurious",
      "artistic and expressive"
    ],
    windows_descriptors: [
      "versatile and adaptable",
      "user-friendly and familiar",
      "powerful and capable",
      "compatible with a wide range of software",
      "customizable and flexible",
      "efficient and productive",
      "reliable and stable",
      "secure and protected",
      "affordable and accessible",
      "widely used and supported"
    ],
    linux_descriptors: [
      "open-source and community-driven",
      "customizable and flexible",
      "secure and private",
      "lightweight and efficient",
      "powerful and capable",
      "versatile and adaptable",
      "developer-friendly and powerful",
      "stable and reliable",
      "free and open to all",
      "innovative and cutting-edge"
    ]
  },
  quotes:{
    mac_quotes: [
      "Think different.",
      "It just works.",
      "Designed by Apple in California.",
      "The power of Mac.",
      "Creativity unleashed.",
      "Your ideas, our technology.",
      "Innovation at its finest.",
      "Simplicity is the ultimate sophistication.",
      "The best computer for the rest of us.",
      "A Mac is not just a computer; it's a lifestyle."
    ],
    windows_quotes: [
      "Empowering every person and every organization on the planet to achieve more.",
      "Your potential, our passion.",
      "Where do you want to go today?",
      "The future is yours to create.",
      "Windows: The operating system that works for you.",
      "Unlock your creativity with Windows.",
      "Windows: The platform for innovation.",
      "Your world, your way with Windows.",
      "Windows: Built for the way you work and play.",
      "Windows: The operating system that adapts to you."
    ],
    linux_quotes: [
      "Linux is only free if your time is worthless.",
      "In open source we trust.",
      "Linux: Because rebooting is for adding new hardware.",
      "The future is open source.",
      "Linux: The operating system that runs the world.",
      "Freedom, flexibility, and choice with Linux.",
      "Linux: The power of community-driven development.",
      "Join the revolution with Linux.",
      "Linux: The operating system that respects your freedom.",
      "Linux: Where innovation meets collaboration."
    ]
  },
  introductions:{
    gaming_device_intro: [
      "Hello, fellow gamer!",
      "Greetings, pixel warrior!",
      "Hey there, gaming enthusiast!",
      "Salutations, digital gladiator!",
      "Hi, fellow joystick jockey!",
      "What's up, gaming aficionado?",
      "Hello, console commander!",
      "Greetings, virtual adventurer!",
      "Hey there, high-score hunter!",
      "Salutations, gaming guru!"
    ],
    surfing_the_web_intro: [
      "Hello, web wanderer!",
      "Greetings, internet explorer!",
      "Hey there, digital nomad!",
      "Salutations, online adventurer!",
      "Hi, fellow browser buddy!",
      "What's up, web surfer?",
      "Hello, data diver!",
      "Greetings, cloud chaser!",
      "Hey there, online explorer!",
      "Salutations, digital detective!"
    ],
    business_analyst_intro: [
      "Hello, data detective!",
      "Greetings, analytical thinker!",
      "Hey there, business strategist!",
      "Salutations, data-driven decision maker!",
      "Hi, fellow number cruncher!",
      "What's up, insight seeker?",
      "Hello, data storyteller!",
      "Greetings, analytical wizard!",
      "Hey there, business analyst extraordinaire!",
      "Salutations, data-driven innovator!"
    ]
  }
};

// Generate Profile
function generateProfile() {
    const age = document.getElementById("age").value;
    const os = document.getElementById("os").value;
    const purpose = document.getElementById("purpose").value;

    const ageDesc = getRandom(data.age[age]);
    const purposeDesc = getRandom(data.purpose[purpose]);
    const genericLike = getRandom(data.likes_and_dislikes.generic_likes);
    const genericDislike = getRandom(data.likes_and_dislikes.generic_dislikes);

    let specificLikes, specificDislikes, specificIntro, osDesc, osDescriptor, osQuote;

    if (purpose === "gaming") {
        specificLikes = getRandom(data.likes_and_dislikes.gaming_device_likes);
        specificDislikes = getRandom(data.likes_and_dislikes.gaming_device_dislikes);
        specificIntro = getRandom(data.introductions.gaming_device_intro);
    } else if (purpose === "surfing") {
        specificLikes = getRandom(data.likes_and_dislikes.surfing_the_web_likes);
        specificDislikes = getRandom(data.likes_and_dislikes.surfing_the_web_dislikes);
        specificIntro = getRandom(data.introductions.surfing_the_web_intro);
    } else if (purpose === "business") {
        specificLikes = getRandom(data.likes_and_dislikes.business_analyst_likes);
        specificDislikes = getRandom(data.likes_and_dislikes.business_analyst_dislikes);
        specificIntro = getRandom(data.introductions.business_analyst_intro);
    }

    if (os === "mac") {
        osDescriptor = getRandom(data.os_descriptors.mac_descriptors);
        osQuote = getRandom(data.quotes.mac_quotes);
        osDesc = "macOS";
    } else if (os === "windows") {
        osDescriptor = getRandom(data.os_descriptors.windows_descriptors);
        osQuote = getRandom(data.quotes.windows_quotes);
        osDesc = "Windows";
    } else if (os === "linux") {
        osDescriptor = getRandom(data.os_descriptors.linux_descriptors);
        osQuote = getRandom(data.quotes.linux_quotes);
        osDesc = "Linux";
    }

    const profileText = `
      <h2>Your Computer's Dating Profile:</h2>
      <p>${specificIntro} I’m a ${osDescriptor} PC running on ${osDesc}, looking for my special player two!</p>
      <p>Whether you’re into ${purposeDesc} or just love ${specificLikes}, I’m built to serve your demands efficiently 😉.</p>
      <p>I love ${genericLike} and ${specificLikes}, but I just can’t stand ${genericDislike} or ${specificDislikes}.</p>
      <p>Here’s a quote that defines me: "${textToHex(osQuote)}"</p>
    `;

    document.getElementById("profile").innerHTML = profileText;
}