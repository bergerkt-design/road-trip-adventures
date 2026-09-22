// ==================================================
// 1. APP DATA
// ==================================================
const appData = {
    schemaVersion: 1,

    players: [
        {
            id: "katie",
            name: "Katie",
            default: true
        },
        {
            id: "jj",
            name: "JJ",
            default: true
        },
        {
            id: "delilah",
            name: "Delilah",
            default: true
        }
    ],

    trips: [],

    settings: {}
};
// ==================================================
// 2. STATIC GAME DATA
// ==================================================
const gameLibrary = [
    {
        id: "license-plate-quest",
        name: "License Plate Quest",
        icon: "license-plate",
        description: "Find all 50 states on your road trip.",
        mode: "cooperative",
        instructions: "Find license plates from as many states as you can.",
        multipleSessions: false,
        available: true
    },

    {
        id: "scavenger-hunt",
        name: "Scavenger Hunt",
        icon: "magnifying-glass",
        description: "Find things along the way.",
        mode: "cooperative",
        instructions: "Find the things on your scavenger hunt list.",
        multipleSessions: true,
        available: true
    },

    {
        id: "road-trip-bingo",
        name: "Road Trip Bingo",
        icon: "bingo",
        description: "Spot things along the way and complete a bingo.",
        mode: "cooperative",
        instructions: "Work together to complete a row, column, or diagonal.",
        multipleSessions: true,
        available: true
    }
];
const scavengerHuntItems = [

    // =====================================================
    // EASY
    // =====================================================

    {
        id: "red-car",
        text: "Red car",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "blue-car",
        text: "Blue car",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "truck",
        text: "Pickup truck",
        difficulty: "easy",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "tractor-trailer",
        text: "Tractor-trailer",
        difficulty: "easy",
        categories: ["general", "road-trip"]
    },

    {
        id: "bridge",
        text: "Bridge",
        difficulty: "easy",
        categories: ["general", "nature", "city", "road-trip"]
    },

    {
        id: "church",
        text: "Church",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "flag",
        text: "Flag",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "train",
        text: "Train",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "water-tower",
        text: "Water tower",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "farm",
        text: "Farm",
        difficulty: "easy",
        categories: ["general", "rural", "nature", "road-trip"]
    },

    {
        id: "construction",
        text: "Construction vehicle",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "billboard",
        text: "Interesting billboard",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "roundabout",
        text: "Roundabout",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "motorcycle",
        text: "Motorcycle",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "bus",
        text: "Bus",
        difficulty: "easy",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "yellow-sign",
        text: "Yellow road sign",
        difficulty: "easy",
        categories: ["general", "road-trip"]
    },

    {
        id: "stop-sign",
        text: "Stop sign",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "gas-station",
        text: "Gas station",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "red-barn",
        text: "Red barn",
        difficulty: "easy",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "lake",
        text: "Lake or large body of water",
        difficulty: "easy",
        categories: ["general", "nature", "road-trip"]
    },

    {
        id: "school",
        text: "School",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "park",
        text: "Park",
        difficulty: "easy",
        categories: ["general", "city", "nature", "road-trip"]
    },

    {
        id: "railroad-crossing",
        text: "Railroad crossing",
        difficulty: "easy",
        categories: ["general", "rural", "city", "road-trip"]
    },

    {
        id: "flagpole",
        text: "Flagpole",
        difficulty: "easy",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "evergreen",
        text: "Evergreen tree",
        difficulty: "easy",
        categories: ["general", "nature", "rural", "road-trip"]
    },


    // =====================================================
    // MEDIUM
    // =====================================================

    {
        id: "animal-sign",
        text: "Road sign with an animal on it",
        difficulty: "medium",
        categories: ["general", "nature", "road-trip"]
    },

    {
        id: "unusual-building",
        text: "Building with an unusual shape",
        difficulty: "medium",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "yellow-vehicle",
        text: "Yellow vehicle",
        difficulty: "medium",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "covered-bridge",
        text: "Covered bridge",
        difficulty: "medium",
        categories: ["general", "rural", "nature", "road-trip"]
    },

    {
        id: "wind-turbine",
        text: "Wind turbine",
        difficulty: "medium",
        categories: ["general", "nature", "rural", "road-trip"]
    },

    {
        id: "water-tower-name",
        text: "Water tower with writing on it",
        difficulty: "medium",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "mural",
        text: "Mural",
        difficulty: "medium",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "historic-marker",
        text: "Historic marker",
        difficulty: "medium",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "round-barn",
        text: "Barn that isn't the usual rectangular shape",
        difficulty: "medium",
        categories: ["general", "rural", "nature", "road-trip"]
    },

    {
        id: "animal-pasture",
        text: "Animal pasture",
        difficulty: "medium",
        categories: ["general", "rural", "nature", "road-trip"]
    },

    {
        id: "statue",
        text: "Statue",
        difficulty: "medium",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "old-building",
        text: "Building that looks more than 100 years old",
        difficulty: "medium",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "local-business",
        text: "Local business with a funny or unusual name",
        difficulty: "medium",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "unusual-sign",
        text: "Road sign you've never noticed before",
        difficulty: "medium",
        categories: ["general", "road-trip"]
    },

    {
        id: "scenic-view",
        text: "Place with a scenic view",
        difficulty: "medium",
        categories: ["general", "nature", "rural", "road-trip"]
    },

    {
        id: "farm-stand",
        text: "Farm stand or roadside produce stand",
        difficulty: "medium",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "hay-bales",
        text: "Hay bales",
        difficulty: "medium",
        categories: ["general", "rural", "nature", "road-trip"]
    },

    {
        id: "silo",
        text: "Farm silo",
        difficulty: "medium",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "fountain",
        text: "Fountain",
        difficulty: "medium",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "clock-tower",
        text: "Clock tower",
        difficulty: "medium",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "fire-station",
        text: "Fire station",
        difficulty: "medium",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "library",
        text: "Library",
        difficulty: "medium",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "state-welcome",
        text: "State welcome sign",
        difficulty: "medium",
        categories: ["general", "road-trip"]
    },

    {
        id: "county-line",
        text: "County line sign",
        difficulty: "medium",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "interesting-exit",
        text: "An exit number you find interesting",
        difficulty: "medium",
        categories: ["general", "road-trip"]
    },


    // =====================================================
    // HARD
    // =====================================================

    {
        id: "horse",
        text: "Horse",
        difficulty: "hard",
        categories: ["general", "nature", "rural", "road-trip"]
    },

    {
        id: "yellow-house",
        text: "Yellow house",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "purple-car",
        text: "Purple vehicle",
        difficulty: "hard",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "school-bus-not-school",
        text: "School bus somewhere other than a school",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "five-flags",
        text: "Five flags at the same location",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "same-color-cars",
        text: "Three cars of the same color in a row",
        difficulty: "hard",
        categories: ["general", "city", "road-trip"]
    },

    {
        id: "animal-crossing",
        text: "Animal crossing sign",
        difficulty: "hard",
        categories: ["general", "nature", "road-trip"]
    },

    {
        id: "classic-car",
        text: "Classic car",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "rainbow",
        text: "Rainbow",
        difficulty: "hard",
        categories: ["general", "nature", "road-trip"]
    },

    {
        id: "fire-truck",
        text: "Fire truck",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "castle",
        text: "Building that looks like a castle",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "unusual-license-plate",
        text: "License plate from a country other than the United States or Canada",
        difficulty: "hard",
        categories: ["general", "road-trip"]
    },

    {
        id: "giant-object",
        text: "Giant object used as a roadside attraction",
        difficulty: "hard",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "train-crossing",
        text: "Train crossing while the warning lights are active",
        difficulty: "hard",
        categories: ["general", "road-trip"]
    },

    {
        id: "wildlife",
        text: "Wildlife near the road",
        difficulty: "hard",
        categories: ["general", "nature", "rural", "road-trip"]
    },

    {
        id: "deer",
        text: "Deer",
        difficulty: "hard",
        categories: ["general", "nature", "rural", "road-trip"]
    },

    {
        id: "bird-of-prey",
        text: "Bird of prey",
        difficulty: "hard",
        categories: ["general", "nature", "rural", "road-trip"]
    },

    {
        id: "lighthouse",
        text: "Lighthouse",
        difficulty: "hard",
        categories: ["general", "nature", "road-trip"]
    },

    {
        id: "waterfall",
        text: "Waterfall",
        difficulty: "hard",
        categories: ["general", "nature", "road-trip"]
    },

    {
        id: "unusual-shaped-object",
        text: "Something shaped like an animal",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "business-pun",
        text: "Business with a pun in its name",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "three-flags",
        text: "Three different flags at the same location",
        difficulty: "hard",
        categories: ["general", "city", "rural", "road-trip"]
    },

    {
        id: "unusual-towed-item",
        text: "Vehicle towing something unusual",
        difficulty: "hard",
        categories: ["general", "road-trip"]
    },

    {
        id: "roadside-attraction",
        text: "Roadside attraction",
        difficulty: "hard",
        categories: ["general", "rural", "road-trip"]
    },

    {
        id: "neon-sign",
        text: "Neon sign",
        difficulty: "hard",
        categories: ["general", "city", "road-trip"]
    }

];

const achievementLibrary = [

    // ==========================================
    // LICENSE PLATE QUEST
    // ==========================================

    // COLLECTION

    {
        id: "three-plates",
        gameId: "license-plate-quest",
        name: "Three Plates",
        description: "Find 3 different states on this trip."
    },

    {
        id: "road-tripper",
        gameId: "license-plate-quest",
        name: "Road Tripper",
        description: "Find 10 different states on this trip."
    },

    {
        id: "state-hopper",
        gameId: "license-plate-quest",
        name: "State Hopper",
        description: "Find 5 different states in one day."
    },

    {
        id: "border-crosser",
        gameId: "license-plate-quest",
        name: "Border Crosser",
        description: "Find a plate from a state you haven't collected before."
    },

    {
        id: "far-from-home",
        gameId: "license-plate-quest",
        name: "Far From Home",
        description: "Find a state that isn't adjacent to your starting state."
    },


    // ==========================================
    // REGIONAL
    // ==========================================

    {
        id: "midwest-tour",
        gameId: "license-plate-quest",
        name: "Midwest Tour",
        description: "Find 5 different Midwestern states."
    },

    {
        id: "southern-swing",
        gameId: "license-plate-quest",
        name: "Southern Swing",
        description: "Find 5 different Southern states."
    },

    {
        id: "western-wanderer",
        gameId: "license-plate-quest",
        name: "Western Wanderer",
        description: "Find 5 different Western states."
    },

    {
        id: "northeast-explorer",
        gameId: "license-plate-quest",
        name: "Northeast Explorer",
        description: "Find 5 different Northeastern states."
    },

    {
        id: "great-lakes",
        gameId: "license-plate-quest",
        name: "Great Lakes",
        description: "Find 5 different states bordering the Great Lakes."
    },

    {
        id: "new-englander",
        gameId: "license-plate-quest",
        name: "New Englander",
        description: "Find all 6 New England states."
    },

    {
        id: "gulf-coast",
        gameId: "license-plate-quest",
        name: "Gulf Coast",
        description: "Find 3 different Gulf Coast states."
    },

    {
        id: "pacific-trio",
        gameId: "license-plate-quest",
        name: "Pacific Trio",
        description: "Find California, Oregon, and Washington."
    },

    {
        id: "plains-walker",
        gameId: "license-plate-quest",
        name: "Plains Walker",
        description: "Find 5 different Great Plains states."
    },

    {
        id: "appalachian-adventure",
        gameId: "license-plate-quest",
        name: "Appalachian Adventure",
        description: "Find 5 different Appalachian states."
    },

    {
        id: "mountain-time",
        gameId: "license-plate-quest",
        name: "Mountain Time",
        description: "Find 5 different states that observe Mountain Time."
    },

    // ==========================================
    // COASTS
    // ==========================================

    {
        id: "coast-to-coast",
        gameId: "license-plate-quest",
        name: "Coast to Coast",
        description: "Find at least one state from both coasts."
    },

    {
        id: "twin-coasts",
        gameId: "license-plate-quest",
        name: "Twin Coasts",
        description: "Find an Atlantic Coast state and a Pacific Coast state."
    },

    {
        id: "coastal-collector",
        gameId: "license-plate-quest",
        name: "Coastal Collector",
        description: "Find 5 different states that border an ocean or Gulf."
    },

    // ==========================================
    // BORDERS & ROUTES
    // ==========================================

    {
        id: "neighborly",
        gameId: "license-plate-quest",
        name: "Neighborly",
        description: "Find 3 states that border your starting state."
    },

    {
        id: "border-patrol",
        gameId: "license-plate-quest",
        name: "Border Patrol",
        description: "Find 5 states that share borders with another state you have found."
    },

    {
        id: "chain-reaction",
        gameId: "license-plate-quest",
        name: "Chain Reaction",
        description: "Find 3 states where each borders the next."
    },

    {
        id: "cross-country",
        gameId: "license-plate-quest",
        name: "Cross-Country",
        description: "Find states from 3 different regions."
    },

    // ==========================================
    // SPECIAL GEOGRAPHY
    // ==========================================

    {
        id: "four-corners",
        gameId: "license-plate-quest",
        name: "Four Corners",
        description: "Find Arizona, Colorado, New Mexico, and Utah."
    },

    // ==========================================
    // ALPHABETICAL
    // ==========================================

    {
        id: "a-team",
        gameId: "license-plate-quest",
        name: "A-Team",
        description: "Find Alabama, Alaska, Arizona, and Arkansas."
    },

    {
        id: "m-m-m-m-m",
        gameId: "license-plate-quest",
        name: "M-M-M-M-M",
        description: "Find five different states beginning with M."
    },

    {
        id: "double-trouble",
        gameId: "license-plate-quest",
        name: "Double Trouble",
        description: "Find two states beginning with the same letter."
    },

    {
        id: "triple-letter",
        gameId: "license-plate-quest",
        name: "Triple Letter",
        description: "Find 3 states beginning with the same letter."
    },

    {
        id: "alphabet-soup",
        gameId: "license-plate-quest",
        name: "Alphabet Soup",
        description: "Find states beginning with 10 different letters."
    },

    {
        id: "alphabet-explorer",
        gameId: "license-plate-quest",
        name: "Alphabet Explorer",
        description: "Find states beginning with 15 different letters."
    },

    {
        id: "bookends",
        gameId: "license-plate-quest",
        name: "Bookends",
        description: "Find a state beginning with A and a state beginning with W."
    },

    {
        id: "middle-of-the-alphabet",
        gameId: "license-plate-quest",
        name: "Middle of the Alphabet",
        description: "Find states beginning with M, N, and O."
    },

    // ==========================================
    // TIMING
    // ==========================================

    {
        id: "early-bird",
        gameId: "license-plate-quest",
        name: "Early Bird",
        description: "Find 3 different states before noon."
    },

    {
        id: "first-find",
        gameId: "license-plate-quest",
        name: "First Find",
        description: "Find a new state before 9 AM."
    },

    {
        id: "lunch-break",
        gameId: "license-plate-quest",
        name: "Lunch Break",
        description: "Find a new state between noon and 1 PM."
    },

    {
        id: "night-owl",
        gameId: "license-plate-quest",
        name: "Night Owl",
        description: "Find 3 different states after 6 PM."
    },

    {
        id: "after-hours",
        gameId: "license-plate-quest",
        name: "After Hours",
        description: "Find a new state after 9 PM."
    },

    {
        id: "rapid-fire",
        gameId: "license-plate-quest",
        name: "Rapid Fire",
        description: "Find 3 different states within one hour."
    },

    {
        id: "speed-collector",
        gameId: "license-plate-quest",
        name: "Speed Collector",
        description: "Find 5 different states within two hours."
    },



    // ==========================================
    // SCAVENGER HUNT
    // ==========================================

    {
        id: "three-is-a-charm",
        gameId: "scavenger-hunt",
        name: "Three's a Charm",
        description: "Find 3 items in a scavenger hunt."
    },

    {
        id: "sharp-eyes",
        gameId: "scavenger-hunt",
        name: "Sharp Eyes",
        description: "Find 10 items in a scavenger hunt."
    },

    {
        id: "halfway-there",
        gameId: "scavenger-hunt",
        name: "Halfway There",
        description: "Find half the items in a scavenger hunt."
    },

    {
        id: "hunt-complete",
        gameId: "scavenger-hunt",
        name: "Hunt Complete",
        description: "Complete a scavenger hunt."
    },

    {
        id: "big-game-hunter",
        gameId: "scavenger-hunt",
        name: "Big Game Hunter",
        description: "Complete a 30-item scavenger hunt."
    },

    {
        id: "perfect-hunt",
        gameId: "scavenger-hunt",
        name: "Perfect Hunt",
        description: "Complete a scavenger hunt without unchecking an item."
    },

    {
        id: "category-collector",
        gameId: "scavenger-hunt",
        name: "Category Collector",
        description: "Find an item from every category represented in the hunt."
    },

    {
        id: "second-hunt",
        gameId: "scavenger-hunt",
        name: "Second Hunt",
        description: "Complete two separate scavenger hunts on the same trip."
    },

    {
        id: "hat-trick",
        gameId: "scavenger-hunt",
        name: "Hat Trick",
        description: "Complete three scavenger hunts on one trip."
    },

    {
        id: "scavenger-veteran",
        gameId: "scavenger-hunt",
        name: "Scavenger Veteran",
        description: "Complete five scavenger hunts across any trips."
    }
];

const roadTripBingoItems = [
    "Red car",
    "Blue car",
    "Green car",
    "Yellow vehicle",
    "White pickup",
    "Semi truck",
    "Motorcycle",
    "Bus",
    "Van",
    "RV",
    "Bicycle",
    "Black car",
    "Orange car",
    "Gray car",
    "SUV",
    "School Bus",
    "Camper",
    "Car with Bike Rack",
    "Car with Spoiler",
    "Bumper Sticker",
    "Fire Truck",
    "Tractor",
    "Truck with no Trailer",
    "Police car",
    "Ambulance",
    "Road Work",
    "Classic car",
    "Convertible",
    "Roof rack",
    "Car towing trailer",
    "Car with stripes",

    "Bridge",
    "Train",
    "Railroad crossing",
    "Water tower",
    "Church",
    "School",
    "Fire station",
    "Gas station",
    "Hotel",
    "Diner",
    "Farm",
    "Barn",
    "Silo",
    "Wind turbine",
    "Library",
    "Post ffice",
    "Court house",
    "Hospital",
    "Bakery",
    "Red roof",
    "Building with a clock",
    "Rest stop",
    "Coffee shop",

    "Billboard",
    "Funny sign",
    "Roadside attraction",
    "State welcome sign",
    "County line",
    "Interesting exit",
    "Work zone",
    "Round about",
    "Toll booth",
    "Tunnel",
    "Parking lot",
    "Crosswalk",
    "Mile marker",
    "Airport sign",
    "Detour sign",


    "Lake",
    "River",
    "Pine tree",
    "Animal",
    "Horse",
    "Deer",
    "Bird of prey",
    "Flowering tree",
    "Scenic view",
    "Rock formation",
    "Pond",
    "Stream",
    "Corn field",
    "Orchard",
    "Windmill",
    "Cow",
    "Sheep",
    "Goat",


    "Flag",
    "Three flags together",
    "Mural",
    "Statue",
    "Fountain",
    "Clock tower",
    "Unusual building",
    "Funny business",
    "Animal-shaped object",
    "New sight",
    "Garden",
    "Playground",
    "Picnic table",
    "Waterfall",
    "Stone wall",
    "Unusual mailbox",
    "Giant roadside object",
    "Covered porch",
];

// ==================================================
// 3. STATIC REFERENCE DATA
// ==================================================
const usStates = [
    { id: "AL", name: "Alabama", abbreviation: "AL", capital: "Montgomery", plateImage: "assets/plates/Alabama.avif" },
    { id: "AK", name: "Alaska", abbreviation: "AK", capital: "Juneau", plateImage: "assets/plates/AK.png" },
    { id: "AZ", name: "Arizona", abbreviation: "AZ", capital: "Phoenix", plateImage: "assets/plates/AZ.jpg" },
    { id: "AR", name: "Arkansas", abbreviation: "AR", capital: "Little Rock", plateImage: "assets/plates/AR.jpg" },
    { id: "CA", name: "California", abbreviation: "CA", capital: "Sacramento", plateImage: "assets/plates/CA.gif" },
    { id: "CO", name: "Colorado", abbreviation: "CO", capital: "Denver", plateImage: "assets/plates/CO.jpg" },
    { id: "CT", name: "Connecticut", abbreviation: "CT", capital: "Hartford", plateImage: "assets/plates/CT.jpg" },
    { id: "DE", name: "Delaware", abbreviation: "DE", capital: "Dover", plateImage: "assets/plates/DE.jpg" },
    { id: "FL", name: "Florida", abbreviation: "FL", capital: "Tallahassee", plateImage: "assets/plates/FL.jpg" },
    { id: "GA", name: "Georgia", abbreviation: "GA", capital: "Atlanta", plateImage: "assets/plates/GA.jpg" },
    { id: "HI", name: "Hawaii", abbreviation: "HI", capital: "Honolulu", plateImage: "assets/plates/HI.png" },
    { id: "ID", name: "Idaho", abbreviation: "ID", capital: "Boise", plateImage: "assets/plates/ID.jpg" },
    { id: "IL", name: "Illinois", abbreviation: "IL", capital: "Springfield", plateImage: "assets/plates/IL.gif" },
    { id: "IN", name: "Indiana", abbreviation: "IN", capital: "Indianapolis", plateImage: "assets/plates/IN.jpg" },
    { id: "IA", name: "Iowa", abbreviation: "IA", capital: "Des Moines", plateImage: "assets/plates/IA.jpeg" },
    { id: "KS", name: "Kansas", abbreviation: "KS", capital: "Topeka", plateImage: "assets/plates/KS.png" },
    { id: "KY", name: "Kentucky", abbreviation: "KY", capital: "Frankfort", plateImage: "assets/plates/KY.jpg" },
    { id: "LA", name: "Louisiana", abbreviation: "LA", capital: "Baton Rouge", plateImage: "assets/plates/LA.jpg" },
    { id: "ME", name: "Maine", abbreviation: "ME", capital: "Augusta", plateImage: "assets/plates/ME.png" },
    { id: "MD", name: "Maryland", abbreviation: "MD", capital: "Annapolis", plateImage: "assets/plates/MD.jpg" },
    { id: "MA", name: "Massachusetts", abbreviation: "MA", capital: "Boston", plateImage: "assets/plates/MA.jpg" },
    { id: "MI", name: "Michigan", abbreviation: "MI", capital: "Lansing", plateImage: "assets/plates/MI.png" },
    { id: "MN", name: "Minnesota", abbreviation: "MN", capital: "Saint Paul", plateImage: "assets/plates/MN.jpg" },
    { id: "MS", name: "Mississippi", abbreviation: "MS", capital: "Jackson", plateImage: "assets/plates/MS.png" },
    { id: "MO", name: "Missouri", abbreviation: "MO", capital: "Jefferson City", plateImage: "assets/plates/MO.jpg" },
    { id: "MT", name: "Montana", abbreviation: "MT", capital: "Helena", plateImage: "assets/plates/MT.jpg" },
    { id: "NE", name: "Nebraska", abbreviation: "NE", capital: "Lincoln", plateImage: "assets/plates/NE.jpg" },
    { id: "NV", name: "Nevada", abbreviation: "NV", capital: "Carson City", plateImage: "assets/plates/NV.jpg" },
    { id: "NH", name: "New Hampshire", abbreviation: "NH", capital: "Concord", plateImage: "assets/plates/NH.jpg" },
    { id: "NJ", name: "New Jersey", abbreviation: "NJ", capital: "Trenton", plateImage: "assets/plates/NJ.jpg" },
    { id: "NM", name: "New Mexico", abbreviation: "NM", capital: "Santa Fe", plateImage: "assets/plates/NM.jpg" },
    { id: "NY", name: "New York", abbreviation: "NY", capital: "Albany", plateImage: "assets/plates/NY.jpg" },
    { id: "NC", name: "North Carolina", abbreviation: "NC", capital: "Raleigh", plateImage: "assets/plates/NC.png" },
    { id: "ND", name: "North Dakota", abbreviation: "ND", capital: "Bismarck", plateImage: "assets/plates/ND.jpg" },
    { id: "OH", name: "Ohio", abbreviation: "OH", capital: "Columbus", plateImage: "assets/plates/OH.jpg" },
    { id: "OK", name: "Oklahoma", abbreviation: "OK", capital: "Oklahoma City", plateImage: "assets/plates/OK.jpg" },
    { id: "OR", name: "Oregon", abbreviation: "OR", capital: "Salem", plateImage: "assets/plates/OR.jpg" },
    { id: "PA", name: "Pennsylvania", abbreviation: "PA", capital: "Harrisburg", plateImage: "assets/plates/PA.png" },
    { id: "RI", name: "Rhode Island", abbreviation: "RI", capital: "Providence", plateImage: "assets/plates/RI.jpg" },
    { id: "SC", name: "South Carolina", abbreviation: "SC", capital: "Columbia", plateImage: "assets/plates/SC.jpg" },
    { id: "SD", name: "South Dakota", abbreviation: "SD", capital: "Pierre", plateImage: "assets/plates/SD.jpg" },
    { id: "TN", name: "Tennessee", abbreviation: "TN", capital: "Nashville", plateImage: "assets/plates/TN.jpg" },
    { id: "TX", name: "Texas", abbreviation: "TX", capital: "Austin", plateImage: "assets/plates/TX.jpg" },
    { id: "UT", name: "Utah", abbreviation: "UT", capital: "Salt Lake City", plateImage: "assets/plates/UT.jpg" },
    { id: "VT", name: "Vermont", abbreviation: "VT", capital: "Montpelier", plateImage: "assets/plates/VT.jpg" },
    { id: "VA", name: "Virginia", abbreviation: "VA", capital: "Richmond", plateImage: "assets/plates/VA.png" },
    { id: "WA", name: "Washington", abbreviation: "WA", capital: "Olympia", plateImage: "assets/plates/WA.png" },
    { id: "WV", name: "West Virginia", abbreviation: "WV", capital: "Charleston", plateImage: "assets/plates/WV.jpg" },
    { id: "WI", name: "Wisconsin", abbreviation: "WI", capital: "Madison", plateImage: "assets/plates/WI.jpg" },
    { id: "WY", name: "Wyoming", abbreviation: "WY", capital: "Cheyenne", plateImage: "assets/plates/WY.jpg" }
];

const washingtonDC = {
    id: "DC",
    name: "Washington, D.C.", plateImage: "assets/plates/DC.jpg"
};

const canadaRegions = [
    {
        id: "AB",
        name: "Alberta",
        plateImage: "assets/plates/Alberta.jpg"
    },
    {
        id: "BC",
        name: "British Columbia", plateImage: "assets/plates/BritishColumbia.jpg"
    },
    {
        id: "MB",
        name: "Manitoba", plateImage: "assets/plates/Manitoba.jpg"
    },
    {
        id: "NB",
        name: "New Brunswick", plateImage: "assets/plates/Newbrunswick.jpg"
    },
    {
        id: "NL",
        name: "Newfoundland and Labrador", plateImage: "assets/plates/NewfoundlandandLabrador.jpg"
    },
    {
        id: "NS",
        name: "Nova Scotia", plateImage: "assets/plates/NovaScotia.jpg"
    },
    {
        id: "NT",
        name: "Northwest Territories", plateImage: "assets/plates/NWTerritories.jpg"
    },
    {
        id: "NU",
        name: "Nunavut", plateImage: "assets/plates/Nunavut.jpg"
    },
    {
        id: "ON",
        name: "Ontario", plateImage: "assets/plates/Ontario.jpg"
    },
    {
        id: "PE",
        name: "Prince Edward Island", plateImage: "assets/plates/PrinceEdwardIsland.jpg"
    },
    {
        id: "QC",
        name: "Quebec", plateImage: "assets/plates/Quebec.jpg"
    },
    {
        id: "SK",
        name: "Saskatchewan", plateImage: "assets/plates/Saskatchewan.jpg"
    },
    {
        id: "YT",
        name: "Yukon", plateImage: "assets/plates/Yukon.jpg"
    }
];
// ==================================================
// 4. LOCAL STORAGE
// ==================================================
const STORAGE_KEY = "RoadTripAdventuresData";

function saveAppData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function loadAppData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        Object.assign(appData, JSON.parse(savedData));
    }
}
// ==================================================
// 5. INITIALIZATION
// ==================================================
loadAppData();

function formatDate(dateString) {
    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
// ==================================================
// 6. NAVIGATION
// ==================================================
const mainContent = document.getElementById("main-content");
const navigationButtons = document.querySelectorAll("#bottom-nav button");

function renderHomePage() {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    if (currentTrip) {
        mainContent.innerHTML = `
            <section class="home-page">

                <h1>Road Trip Adventures</h1>

                <p class="page-label">CURRENT TRIP</p>

                <h2>${currentTrip.destination}</h2>

                <p>
                    ${formatDate(currentTrip.startDate)} - ${formatDate(currentTrip.endDate)}
                </p>

                <button id="play-games-button">
                    PLAY GAMES
                </button>

                <button id="view-trip-button">
                    VIEW TRIP
                </button>
<img
    class="home-road-art"
    src="assets/home-road-landscape.png"
    alt=""
    aria-hidden="true"
>
            </section>
        `;

        document
            .getElementById("play-games-button")
            .addEventListener("click", () => {
                showPage("games");
            });

        document
            .getElementById("view-trip-button")
            .addEventListener("click", () => {
                showPage("trips");
            });

    } else {
        mainContent.innerHTML = `
            <section class="home-page">

                <h1>Road Trip Adventures</h1>

                <p class="page-label">NO CURRENT TRIP</p>

                <h2>Ready for your next road trip?</h2>

                <button id="trips-button">
                    TRIPS
                </button>

<img
    class="home-road-art"
    src="assets/home-road-landscape.png"
    alt=""
    aria-hidden="true"
>

            </section>
        `;

        document
            .getElementById("trips-button")
            .addEventListener("click", () => {
                showPage("trips");
            });
    }
}


function showPage(pageName) {
    if (pageName === "home") {
        renderHomePage();
    } else if (pageName === "trips") {
        renderTripsPage();
    } else if (pageName === "games") {
        renderGamesPage();
    } else if (pageName === "scores") {
        renderScoresPage();
    } else if (pageName === "more") {
        renderMorePage();
    } else {
        mainContent.innerHTML = `
            <h1>${pageName.toUpperCase()}</h1>
            <p>This is the ${pageName} page.</p>
        `;
    }

    navigationButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.page === pageName
        );
    });
}

function renderGamesPage() {
    const games = gameLibrary.filter(
        game => game.available
    );
const isMobile = window.innerWidth <= 600;

const roadPath = isMobile
    ? `M230 -100
       C230 100 95 150 115 260
       C135 370 325 390 305 480
       C285 570 95 620 115 730
       C130 810 205 855 230 900`
    : `M260 -100
       C260 120 260 180 210 250
       C160 320 160 400 210 450
       C260 500 260 580 210 650
       C160 720 160 800 210 900`;

    mainContent.innerHTML = `
        <section class="games-page">

            <h1>Games</h1>

            <div class="games-road">

                <svg
                    class="games-road-svg"
                    viewBox="0 0 400 900"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
<path
    class="road-base"
       d="${roadPath}"
/>

<path
    class="road-center"
     d="${roadPath}"
/>
                </svg>

                ${games.map((game, index) => `
                    <div class="game-pocket ${index % 2 === 0 ? "pocket-left" : "pocket-right"}">
                        <div class="pocket-scenery" aria-hidden="true">
    <img
        src="${index % 2 === 0
            ? "assets/game-page-landscape1.png"
            : "assets/game-page-landscape2.png"}"
        alt=""
    >
</div>
                        <article class="game-card">

                            <div class="game-icon">
                                <span>
                                    <svg
                                        viewBox="0 0 56 68"
                                        width="56"
                                        height="68"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 2
                                               C13.6 2 3 12.6 3 27
                                               C3 44 18.5 56.5 28 66
                                               C37.5 56.5 53 44 53 27
                                               C53 12.6 42.4 2 28 2Z"
                                            fill="#263238"
                                        />

                                        <circle
                                            cx="28"
                                            cy="27"
                                            r="16"
                                            fill="white"
                                        />

                                        ${game.icon === "license-plate"
            ? `
                                                <path
                                                    d="M18 32
                                                       L20 21
                                                       C20.5 19 22 18 24 18
                                                       H32
                                                       C34 18 35.5 19 36 21
                                                       L38 32
                                                       Z"
                                                    fill="none"
                                                    stroke="#263238"
                                                    stroke-width="2"
                                                    stroke-linejoin="round"
                                                />

                                                <path
                                                    d="M22 21
                                                       H34
                                                       L35 25
                                                       H21
                                                       Z"
                                                    fill="#e5e7e9"
                                                    stroke="#263238"
                                                    stroke-width="1.5"
                                                    stroke-linejoin="round"
                                                />

                                                <rect
                                                    x="24"
                                                    y="27"
                                                    width="8"
                                                    height="4"
                                                    rx="0.5"
                                                    fill="#f5f1e7"
                                                    stroke="#263238"
                                                    stroke-width="1.25"
                                                />

                                                <rect
                                                    x="18.5"
                                                    y="27"
                                                    width="3"
                                                    height="4"
                                                    rx="0.75"
                                                    fill="#c94b4b"
                                                />

                                                <rect
                                                    x="34.5"
                                                    y="27"
                                                    width="3"
                                                    height="4"
                                                    rx="0.75"
                                                    fill="#c94b4b"
                                                />

                                                <circle
                                                    cx="21"
                                                    cy="32"
                                                    r="2"
                                                    fill="#263238"
                                                />

                                                <circle
                                                    cx="35"
                                                    cy="32"
                                                    r="2"
                                                    fill="#263238"
                                                />
                                            `
            : `
                                                <circle
                                                    cx="25"
                                                    cy="25"
                                                    r="6"
                                                    fill="none"
                                                    stroke="#263238"
                                                    stroke-width="2.5"
                                                />

                                                <line
                                                    x1="29.5"
                                                    y1="29.5"
                                                    x2="35"
                                                    y2="35"
                                                    stroke="#263238"
                                                    stroke-width="2.5"
                                                    stroke-linecap="round"
                                                />
                                            `
        }

                                    </svg>
                                </span>
                            </div>

                            <h2>${game.name}</h2>

                            

                            <button
                                class="play-game-button"
                                data-game-id="${game.id}"
                            >
                                PLAY
                            </button>

                        </article>

                    </div>
                `).join("")}

            </div>

        </section>
    `;

    document
        .querySelectorAll(".play-game-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                renderGameLandingPage(
                    button.dataset.gameId
                );
            });
        });
}

function renderGameLandingPage(gameId) {
    const game = gameLibrary.find(
        game => game.id === gameId
    );

    if (!game) {
        return;
    }

    const activeSession = getActiveGameSession(gameId);

    mainContent.innerHTML = `
        <section class="game-landing-page">

            <h1>${game.name}</h1>

            <p>${game.description}</p>

            ${activeSession ? `
                <button id="continue-game-button">
                    CONTINUE GAME
                </button>
            ` : `
                <button id="new-game-button">
                    + NEW GAME
                </button>
            `}

            <details class="game-instructions">
                <summary>How to Play</summary>
                <p>${game.instructions}</p>
            </details>

            <button id="back-to-games-button">
                ← BACK TO GAMES
            </button>

        </section>
    `;

    document
        .getElementById("back-to-games-button")
        .addEventListener("click", () => {
            showPage("games");
        });

    const newGameButton = document.getElementById("new-game-button");

    if (newGameButton) {
        newGameButton.addEventListener("click", () => {

            if (gameId === "scavenger-hunt") {
                renderScavengerHuntSetup();
                return;
            }

            if (gameId === "road-trip-bingo") {
                renderRoadTripBingoSetup();
                return;
            }

            const session = createGameSession(gameId);

            if (session) {
                launchGame(session);
            }

        });
    }

    const continueGameButton =
        document.getElementById("continue-game-button");

    if (continueGameButton) {
        continueGameButton.addEventListener("click", () => {

            const session = getActiveGameSession(gameId);

            if (session) {
                launchGame(session);
            }
        });
    }
}

function renderScoresPage() {

    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    const lifetimeStateIds = new Set();
    const lifetimeCanadaIds = new Set();
    let lifetimeDCFound = false;

    appData.trips.forEach(trip => {

        (trip.gameSessions || []).forEach(session => {

            if (
                session.gameId !==
                "license-plate-quest"
            ) {
                return;
            }

            const foundStates =
                session.data?.foundStates || [];

            foundStates.forEach(entry => {

                if (entry.stateId === "DC") {
                    lifetimeDCFound = true;
                } else {
                    lifetimeStateIds.add(
                        entry.stateId
                    );
                }

            });

            const foundCanada =
                session.data?.foundCanada || [];

            foundCanada.forEach(entry => {

                lifetimeCanadaIds.add(
                    entry.regionId
                );

            });

        });

    });

    const lifetimeCount =
        lifetimeStateIds.size;

    const currentAchievementsByGame = {};

    if (currentTrip) {

        achievementLibrary
            .filter(achievement =>
                hasAchievement(
                    currentTrip,
                    achievement.id
                )
            )
            .forEach(achievement => {

                if (
                    !currentAchievementsByGame[
                    achievement.gameId
                    ]
                ) {
                    currentAchievementsByGame[
                        achievement.gameId
                    ] = [];
                }

                currentAchievementsByGame[
                    achievement.gameId
                ].push(achievement);

            });

    }

    const gameSections =
        Object.entries(currentAchievementsByGame)
            .map(([gameId, achievements]) => {

                const game =
                    gameLibrary.find(
                        game => game.id === gameId
                    );

                const gameName =
                    game?.name || gameId;

                return `
                    <section class="achievement-game-section">

                        <h3>
                            ${gameName}
                        </h3>

                        <div class="achievement-list">

                            ${achievements
                        .map(achievement => `
                                    <div class="achievement-card">

                                        <div class="achievement-badge">
                                            ${getAchievementIcon(
                            achievement.id
                        )}
                                        </div>

                                        <h3>
                                            ${achievement.name}
                                        </h3>

                                        <p>
                                            ${achievement.description}
                                        </p>

                                    </div>
                                `)
                        .join("")}

                        </div>

                    </section>
                `;

            })
            .join("");

    mainContent.innerHTML = `

        <section class="scores-page">

            <h1>Scores</h1>


            <!-- CURRENT TRIP ACHIEVEMENTS -->

            <section class="scores-card current-achievements-card">

                <h2>Current Trip Achievements</h2>

                ${currentTrip
            ? gameSections
                ? gameSections
                : `
                                <p>
                                    No achievements yet.
                                </p>
                            `
            : `
                            <p>
                                No current trip.
                            </p>
                        `
        }

            </section>


            <!-- LIFETIME COLLECTION -->

            <section class="scores-card lifetime-collection-card">

                <h2>Lifetime Collection</h2>

                <p>
                    ${lifetimeCount} / 50 States
                </p>

                <progress
                    value="${lifetimeCount}"
                    max="50">
                </progress>

                <div
                    class="license-plate-map"
                    id="license-plate-map">
                </div>


                <!-- OTHER PLATES -->

                <div class="lifetime-other-plates">

                    <h3>Other Plates</h3>

                    <div class="lifetime-dc">

                        <div class="state-item">

                            <span>
                                Washington, D.C.
                            </span>

                            <span>
                                ${lifetimeDCFound ? "✓" : ""}
                            </span>

                        </div>

                    </div>

                    <details class="canada-section">

                        <summary>
                            Canada
                        </summary>

                        <div class="state-list">

                            ${canadaRegions
            .map(region => {

                const isFound =
                    lifetimeCanadaIds.has(
                        region.id
                    );

                return `
                                        <div class="state-item">

                                            <span>
                                                ${region.name}
                                            </span>

                                            <span>
                                                ${isFound ? "✓" : ""}
                                            </span>

                                        </div>
                                    `;

            })
            .join("")}

                        </div>

                    </details>

                </div>

            </section>


            <!-- LIFETIME ACHIEVEMENTS -->

            <section class="scores-card lifetime-achievements-card">

                <h2>Lifetime Achievements</h2>

                <div class="achievement-list">

                    <div class="achievement-card">

                        <div class="achievement-badge">
                            ${getAchievementIcon("ten-states")}
                        </div>

                        <h3>
                            10 States
                        </h3>

                        <p>
                            ${lifetimeCount >= 10
            ? "✓ Unlocked"
            : "🔒 Locked"
        }
                        </p>

                    </div>


                    <div class="achievement-card">

                        <div class="achievement-badge">
                            ${getAchievementIcon("twenty-five-states")}
                        </div>

                        <h3>
                            25 States
                        </h3>

                        <p>
                            ${lifetimeCount >= 25
            ? "✓ Unlocked"
            : "🔒 Locked"
        }
                        </p>

                    </div>


                    <div class="achievement-card">

                        <div class="achievement-badge">
                            ${getAchievementIcon("forty-states")}
                        </div>

                        <h3>
                            40 States
                        </h3>

                        <p>
                            ${lifetimeCount >= 40
            ? "✓ Unlocked"
            : "🔒 Locked"
        }
                        </p>

                    </div>


                    <div class="achievement-card">

                        <div class="achievement-badge">
                            ${getAchievementIcon("all-fifty-states")}
                        </div>

                        <h3>
                            All 50 States
                        </h3>

                        <p>
                            ${lifetimeCount >= 50
            ? "✓ Unlocked"
            : "🔒 Locked"
        }
                        </p>

                    </div>

                </div>

            </section>

        </section>
    `;

    renderLicensePlateMap(null, true);
}

function renderMorePage() {
    mainContent.innerHTML = `
        <section class="more-page">

            <h1>More</h1>

            <div class="more-menu">

                <button
                    class="more-menu-button"
                    id="players-button"
                >
                    <span class="more-menu-icon">👥</span>
                    <span>Players</span>
                </button>

                <button
                    class="more-menu-button"
                    id="settings-button"
                >
                    <span class="more-menu-icon">⚙️</span>
                    <span>Settings</span>
                </button>

                <button
                    class="more-menu-button"
                    id="about-button"
                >
                    <span class="more-menu-icon">ℹ️</span>
                    <span>About</span>
                </button>

            </div>

        </section>
    `;

    document
        .getElementById("players-button")
        .addEventListener("click", () => {
            renderPlayersPage();
        });

    document
        .getElementById("settings-button")
        .addEventListener("click", () => {
            renderSettingsPage();
        });

    document
        .getElementById("about-button")
        .addEventListener("click", () => {
            renderAboutPage();
        });
}
navigationButtons.forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.page);
    });
});

showPage("home");
// ==================================================
// 7. TRIPS
// ==================================================
function handleCreateTrip(event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value.trim();
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const startingState = document.getElementById("starting-state").value;

    const selectedPlayers = Array.from(
        document.querySelectorAll('input[name="players"]:checked')
    ).map(input => input.value);

    if (selectedPlayers.length === 0) {
        alert("Please select at least one player.");
        return;
    }

    const newTrip = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        destination: destination,
        startDate: startDate,
        endDate: endDate,
        startingState: startingState,
        players: selectedPlayers,
        status: "current",
        createdAt: new Date().toISOString(),
        completedAt: null,
        gameSessions: [],
        achievements: []
    };

    appData.trips.push(newTrip);

    saveAppData();

    showPage("home");
}


function renderCreateTripForm() {
    mainContent.innerHTML = `
        <section class="trips-page">

            <h1>Create Trip</h1>

            <form id="create-trip-form">

                <label for="destination">Destination</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    placeholder="Where are you going?"
                    required
                >

                <label for="start-date">Start Date</label>
                <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    required
                >

                <label for="end-date">End Date</label>
                <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    required
                >

                <label for="starting-state">Starting State</label>
<select id="starting-state" name="starting-state" required>
    <option value="">Select a state</option>
    ${usStates.map(state => `
        <option value="${state.id}">${state.name}</option>
    `).join("")}
</select>

                <fieldset>
                    <legend>Players</legend>

                    <div id="player-list">
                    </div>

                    <button type="button" id="add-player-button">
                        + ADD PLAYER
                    </button>
                </fieldset>

                <button type="submit" id="submit-trip-button">
                    CREATE TRIP
                </button>

            </form>

        </section>
    `;

    renderPlayerList();

    document
        .getElementById("add-player-button")
        .addEventListener("click", addPlayer);

    document
        .getElementById("create-trip-form")
        .addEventListener("submit", handleCreateTrip);
}

function completeTrip() {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    if (!currentTrip) {
        return;
    }

    const confirmed = confirm(
        `Complete ${currentTrip.destination}?\n\n` +
        `This will end your current trip and save it to Past Trips.`
    );

    if (!confirmed) {
        return;
    }

    const completedAt = new Date().toISOString();

    currentTrip.gameSessions.forEach(session => {
        if (session.status === "in-progress") {
            session.status = "ended";
            session.endedAt = completedAt;
        }
    });

    currentTrip.status = "completed";
    currentTrip.completedAt = completedAt;

    saveAppData();

    showPage("home");
}

function renderTripsPage() {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    let currentTripGames = "";

    if (currentTrip) {

        const gameSessions =
            currentTrip.gameSessions || [];

        if (gameSessions.length === 0) {

            currentTripGames = `
                <p>No games started yet.</p>
            `;

        } else {

            currentTripGames =
                gameSessions.map(session => {

                    if (
                        session.gameId ===
                        "license-plate-quest"
                    ) {

                        const foundStates =
                            session.data?.foundStates || [];

                        const progress =
                            foundStates.filter(
                                entry =>
                                    entry.stateId !== "DC"
                            ).length;

                        return `
                            <div class="current-game-card">

                                <h3>
                                    License Plate Quest
                                </h3>

                                <p>
                                    ${progress} / 50 states
                                </p>

                                <button
                                    type="button"
                                    class="continue-current-game-button"
                                    data-game-id="license-plate-quest"
                                >
                                    CONTINUE
                                </button>

                            </div>
                        `;
                    }

                    if (
                        session.gameId ===
                        "scavenger-hunt"
                    ) {

                        const items =
                            session.data?.items || [];

                        const foundItems =
                            items.filter(
                                item => item.found
                            );

                        const isInProgress =
                            session.status === "in-progress";

                        return `
                            <div class="current-game-card">

                                <h3>
                                    Scavenger Hunt
                                </h3>

                                <p>
                                    ${foundItems.length} / ${items.length} found
                                </p>

                               ${isInProgress
                                ? `
        <button
            type="button"
            class="continue-current-game-button"
            data-session-id="${session.id}"
        >
            CONTINUE
        </button>
    `
                                : `
        <p>
            ${session.status === "completed"
                                    ? "✓ Completed"
                                    : "Ended"
                                }
        </p>
    `
                            }

                            </div>
                        `;
                    }
                    if (
                        session.gameId ===
                        "road-trip-bingo"
                    ) {

                        const card =
                            session.data?.card || [];

                        const foundItems =
                            card.filter(
                                item => item.found
                            );

                        const isInProgress =
                            session.status === "in-progress";

                        return `
                            <div class="current-game-card">

                                <h3>
                                    Road Trip Bingo
                                </h3>

                                <p>
                                    ${foundItems.length} /
                                    ${card.length} found
                                </p>

                                ${isInProgress
                                ? `
                                        <button
                                            type="button"
                                            class="continue-current-game-button"
                                            data-session-id="${session.id}"
                                        >
                                            CONTINUE
                                        </button>
                                    `
                                : `
                                        <p>
                                            ${session.status === "completed"
                                    ? "✓ Completed"
                                    : "Ended"
                                }
                                        </p>
                                    `
                            }

                            </div>
                        `;
                    }

                    return "";
                }).join("");
        }
    }

    mainContent.innerHTML = `
        <section class="trips-page">

            <h1>Trips</h1>

            ${currentTrip
            ? `
                    <section class="current-trip-section">

                        <h2>Current Trip</h2>

                        <h3>${currentTrip.destination}</h3>

                        <p>
                            ${formatDate(currentTrip.startDate)} - ${formatDate(currentTrip.endDate)}
                        </p>

                        <p>
                            Players:
                            ${getPlayerNames(currentTrip.players)}
                        </p>

                        <section class="current-trip-games">

                            <h2>Games</h2>

                            ${currentTripGames}

                        </section>

                        <button id="complete-trip-button">
                            COMPLETE TRIP
                        </button>

                    </section>
                `
            : `
                    <section class="current-trip-section">

                        <h2>Current Trip</h2>

                        <p>No current trip.</p>

                        <button id="create-trip-button">
                            CREATE A TRIP
                        </button>

                    </section>
                `
        }

            ${renderPastTrips()}

        </section>
    `;

    if (currentTrip) {

        document
            .getElementById("complete-trip-button")
            .addEventListener(
                "click",
                completeTrip
            );

        document
            .querySelectorAll(
                ".continue-current-game-button"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        if (
                            button.dataset.gameId
                        ) {

                            const session =
                                getActiveGameSession(
                                    button.dataset.gameId
                                );

                            if (session) {
                                launchGame(session);
                            }

                        } else if (
                            button.dataset.sessionId
                        ) {

                            const session =
                                currentTrip.gameSessions.find(
                                    session =>
                                        session.id ===
                                        button.dataset.sessionId
                                );

                            if (session) {
                                launchGame(session);
                            }
                        }

                    }
                );

            });

    } else {

        document
            .getElementById("create-trip-button")
            .addEventListener(
                "click",
                renderCreateTripForm
            );
    }

    document
        .querySelectorAll(".past-trip-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {
                    openPastTrip(
                        card.dataset.tripId
                    );
                }
            );

        });
}

function renderPastTrips() {
    const pastTrips = appData.trips.filter(
        trip => trip.status === "completed"
    );

    if (pastTrips.length === 0) {
        return `
            <section class="past-trips-section">
                <h2>Past Trips</h2>
                <p>No past trips yet.</p>
            </section>
        `;
    }

    return `
        <section class="past-trips-section">

            <h2>Past Trips</h2>

            ${pastTrips.map(trip => `
                <article
                    class="past-trip-card"
                    data-trip-id="${trip.id}"
                >

                    <h3>${trip.destination}</h3>

                    <p>
                        ${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}
                    </p>

                    <p>
                        Players:
                        ${getPlayerNames(trip.players)}
                    </p>

                </article>
            `).join("")}

        </section>
    `;
}

function openPastTrip(tripId) {

    const trip = appData.trips.find(
        trip => trip.id === tripId
    );

    if (!trip) {
        return;
    }

    const gameSessions = trip.gameSessions || [];

    /*
     * CURRENT TRIP ACHIEVEMENTS
     */

    const achievementsByGame = {};

    achievementLibrary
        .filter(achievement =>
            hasAchievement(
                trip,
                achievement.id
            )
        )
        .forEach(achievement => {

            if (!achievementsByGame[achievement.gameId]) {
                achievementsByGame[achievement.gameId] = [];
            }

            achievementsByGame[achievement.gameId]
                .push(achievement);

        });

    const achievementHistory =
        Object.entries(achievementsByGame)
            .map(([gameId, achievements]) => {

                const game =
                    gameLibrary.find(
                        game => game.id === gameId
                    );

                const gameName =
                    game?.name || gameId;

                return `
                    <section class="past-achievement-game">

                        <h3>
                            ${gameName}
                        </h3>

                        <div class="achievement-list">

                            ${achievements
                        .map(achievement => `
                                    <div class="achievement-card">

                                        <div class="achievement-badge">
                                            ${getAchievementIcon(achievement.id)}
                                        </div>

                                        <h4>
                                            ${achievement.name}
                                        </h4>

                                        <p>
                                            ${achievement.description}
                                        </p>

                                    </div>
                                `)
                        .join("")}

                        </div>

                    </section>
                `;

            })
            .join("");


    /*
     * GAME HISTORY
     */

    const gameHistory = gameSessions.length === 0
        ? `
            <p>No games played.</p>
        `
        : gameSessions.map(session => {

            /*
             * LICENSE PLATE QUEST
             */

            if (session.gameId === "license-plate-quest") {

                const foundStates =
                    session.data?.foundStates || [];

                const foundCanada =
                    session.data?.foundCanada || [];

                const foundDC =
                    session.data?.foundDC || [];

                const foundStateDetails =
                    foundStates
                        .map(foundState => {
                            return usStates.find(
                                state =>
                                    state.id ===
                                    foundState.stateId
                            );
                        })
                        .filter(
                            state => state !== undefined
                        )
                        .sort(
                            (a, b) =>
                                a.name.localeCompare(b.name)
                        );

                const foundDCDetails =
                    foundDC.length > 0
                        ? `
                            <h4>Washington, D.C.</h4>
                            <p>${washingtonDC.name}</p>
                        `
                        : "";

                const foundCanadaDetails =
                    foundCanada
                        .map(foundRegion => {
                            return canadaRegions.find(
                                region =>
                                    region.id ===
                                    foundRegion.regionId
                            );
                        })
                        .filter(
                            region => region !== undefined
                        )
                        .sort(
                            (a, b) =>
                                a.name.localeCompare(b.name)
                        );

                return `
                    <div class="past-game-card">

                        <button
                            class="past-game-toggle"
                            type="button"
                        >
                            License Plate Quest

                            <span>
                                ${foundStates.length} / 50 states
                            </span>
                        </button>

                        <div class="past-game-details">

                            <p>
                                Status:
                                ${session.status.charAt(0).toUpperCase() +
                    session.status.slice(1)}
                            </p>

                            <p>
                                Started:
                                ${new Date(
                        session.startedAt
                    ).toLocaleString()}
                            </p>

                            <h4>States Found</h4>

                            ${foundStateDetails.length === 0
                        ? `<p>No states found.</p>`
                        : `
                                    <ul>
                                        ${foundStateDetails
                            .map(state => `
                                                <li>
                                                    ${state.name}
                                                </li>
                                            `)
                            .join("")}
                                    </ul>
                                `
                    }

                            ${foundDCDetails}

                            ${foundCanadaDetails.length > 0
                        ? `
                                    <h4>
                                        Canadian Plates
                                    </h4>

                                    <ul>
                                        ${foundCanadaDetails
                            .map(region => `
                                                <li>
                                                    ${region.name}
                                                </li>
                                            `)
                            .join("")}
                                    </ul>
                                `
                        : ""
                    }

                        </div>

                    </div>
                `;
            }


            /*
             * SCAVENGER HUNT
             */

            if (session.gameId === "scavenger-hunt") {

                const items =
                    session.data?.items || [];

                const foundItems =
                    items.filter(
                        item => item.found
                    );

                return `
                    <div class="past-game-card">

                        <button
                            class="past-game-toggle"
                            type="button"
                        >
                            Scavenger Hunt

                            <span>
                                ${foundItems.length} /
                                ${items.length} found
                            </span>
                        </button>

                        <div class="past-game-details">

                            <p>
                                Status:
                                ${session.status.charAt(0).toUpperCase() +
                    session.status.slice(1)}
                            </p>

                            <p>
                                Started:
                                ${new Date(
                        session.startedAt
                    ).toLocaleString()}
                            </p>

                            <h4>Items Found</h4>

                            ${foundItems.length === 0
                        ? `<p>No items found.</p>`
                        : `
                                    <ul>
                                        ${foundItems
                            .map(item => `
                                                <li>
                                                    ${item.text}
                                                </li>
                                            `)
                            .join("")}
                                    </ul>
                                `
                    }

                        </div>

                    </div>
                `;
            }


            /*
             * ROAD TRIP BINGO
             */

            if (session.gameId === "road-trip-bingo") {

                const card =
                    session.data?.card || [];

                const foundItems =
                    card.filter(
                        item => item.found
                    );

                return `
                    <div class="past-game-card">

                        <button
                            class="past-game-toggle"
                            type="button"
                        >
                            Road Trip Bingo

                            <span>
                                ${foundItems.length} /
                                ${card.length} found
                            </span>
                        </button>

                        <div class="past-game-details">

                            <p>
                                Status:
                                ${session.status.charAt(0).toUpperCase() +
                    session.status.slice(1)}
                            </p>

                            <p>
                                Started:
                                ${new Date(
                        session.startedAt
                    ).toLocaleString()}
                            </p>

                            <h4>Bingo Card</h4>

                            ${card.length === 0
                        ? `<p>No Bingo card found.</p>`
                        : `
                                    <ul>
                                        ${card
                            .map(item => `
                                                <li>
                                                    ${item.text}
                                                    ${item.found ? " ✓" : ""}
                                                </li>
                                            `)
                            .join("")}
                                    </ul>
                                `
                    }

                        </div>

                    </div>
                `;
            }


            /*
             * FALLBACK
             */

            return `
                <div class="past-game-card">

                    <button
                        class="past-game-toggle"
                        type="button"
                    >
                        ${session.gameId}
                    </button>

                    <div class="past-game-details">

                        <p>
                            Status:
                            ${session.status.charAt(0).toUpperCase() +
                session.status.slice(1)}
                        </p>

                        <p>
                            Started:
                            ${new Date(
                    session.startedAt
                ).toLocaleString()}
                        </p>

                    </div>

                </div>
            `;

        }).join("");


    /*
     * PAGE
     */

    mainContent.innerHTML = `
        <section class="past-trip-details">

            <button
                id="back-to-trips-button"
                class="back-button"
            >
                ← BACK TO TRIPS
            </button>

            <h1>${trip.destination}</h1>

            <p>
                ${formatDate(trip.startDate)} -
                ${formatDate(trip.endDate)}
            </p>

            <p>
                Players:
                ${getPlayerNames(trip.players)}
            </p>

            <section class="past-trip-achievements">

                <h2>Achievements</h2>

                ${achievementHistory
            ? achievementHistory
            : `
                        <p>
                            No achievements earned.
                        </p>
                    `
        }

            </section>

            <section class="past-trip-games">

                <h2>Games Played</h2>

                ${gameHistory}

            </section>

        </section>
    `;


    document
        .getElementById("back-to-trips-button")
        .addEventListener(
            "click",
            renderTripsPage
        );


    document
        .querySelectorAll(".past-game-toggle")
        .forEach(button => {

            button.addEventListener("click", () => {

                const details =
                    button.nextElementSibling;

                details.classList.toggle(
                    "expanded"
                );

            });

        });
}

// ==================================================
// 8. PLAYERS
// ==================================================
function renderPlayerList() {
    const playerList = document.getElementById("player-list");

    playerList.innerHTML = appData.players.map(player => `
        <label>
        <input
            type="checkbox"
            name="players"
            value="${player.id}"
            ${player.default ? "checked" : ""}
        >
            ${player.name}
        </label>
    `).join("");
}

function getPlayerNames(playerIds) {
    return playerIds
        .map(playerId => {
            const player = appData.players.find(
                player => player.id === playerId
            );

            return player ? player.name : "Unknown Player";
        })
        .join(", ");
}

function addPlayer() {
    const name = prompt("Enter the player's name:");

    if (!name) {
        return;
    }

    const trimmedName = name.trim();

    if (!trimmedName) {
        return;
    }

    const newPlayer = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        name: trimmedName,
        default: false
    };

    appData.players.push(newPlayer);

    saveAppData();
    renderPlayersPage();
}

function removePlayer(playerId) {
    const player = appData.players.find(
        player => player.id === playerId
    );

    if (!player) {
        return;
    }

    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    const onCurrentTrip =
        currentTrip &&
        currentTrip.players.includes(playerId);

    if (onCurrentTrip) {
        alert(
            `${player.name} is on the current trip. ` +
            `Remove them from the current trip before removing them from available players.`
        );
        return;
    }

    const confirmed = confirm(
        `Remove ${player.name} from available players?\n\n` +
        `This will not change completed trips.`
    );

    if (!confirmed) {
        return;
    }

    appData.players = appData.players.filter(
        player => player.id !== playerId
    );

    saveAppData();
    renderPlayersPage();
}
function editPlayer(playerId) {
    const player = appData.players.find(
        player => player.id === playerId
    );

    if (!player) {
        return;
    }

    const newName = prompt(
        "Enter the player's new name:",
        player.name
    );

    if (newName === null) {
        return;
    }

    const trimmedName = newName.trim();

    if (!trimmedName) {
        return;
    }

    player.name = trimmedName;

    saveAppData();
    renderPlayersPage();
}
// ==================================================
// 9. GAME SESSIONS
// ==================================================
function createGameSession(gameId) {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    if (!currentTrip) {
        alert("You need a current trip before starting a game.");
        return null;
    }

    const game = gameLibrary.find(
        game => game.id === gameId
    );

    if (!game) {
        return null;
    }

    const newSession = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        gameId: gameId,
        tripId: currentTrip.id,
        status: "in-progress",
        players: [...currentTrip.players],
        startedAt: new Date().toISOString(),
        endedAt: null,
        data: {}
    };

    currentTrip.gameSessions.push(newSession);

    saveAppData();

    return newSession;
}

function getActiveGameSession(gameId) {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    if (!currentTrip) {
        return null;
    }

    return currentTrip.gameSessions.find(
        session =>
            session.gameId === gameId &&
            session.status === "in-progress"
    ) || null;
}

function launchGame(session) {
    if (!session) {
        return;
    }

    if (session.gameId === "license-plate-quest") {
        renderLicensePlateQuest(session);
    } else if (session.gameId === "scavenger-hunt") {
        renderScavengerHunt(session);
    } else if (session.gameId === "road-trip-bingo") {
        renderRoadTripBingo(session);
    }
}

// ==================================================
// 10. LICENSE PLATE QUEST
// ==================================================
function migrateLicensePlateData(session) {
    const foundStates = session.data.foundStates;

    if (!foundStates) {
        session.data.foundStates = [];
        return;
    }

    // Old format:
    // ["WI", "IL", "MI"]
    if (
        Array.isArray(foundStates) &&
        foundStates.every(state => typeof state === "string")
    ) {
        session.data.foundStates = foundStates.map(stateId => ({
            stateId: stateId,
            spottedBy: []
        }));

        saveAppData();
    }
}


function renderLicensePlateQuest(session) {
    migrateLicensePlateData(session);

    const foundStates = session.data.foundStates || [];
    const foundCanada = session.data.foundCanada || [];

    const progress = foundStates.filter(
        entry => entry.stateId !== "DC"
    ).length;

    mainContent.innerHTML = `
        
<section class="license-plate-quest">

    <button
        type="button"
        id="back-to-games-button"
        class="back-button"
    >
        ← BACK TO GAMES
    </button>

    <h1>License Plate Quest</h1>
                 <p>
                    ${progress} / 50 States
                </p>

                <progress
                    value="${progress}"
                     max="50">
                </progress>
                
                <div>

                <button
                    type="button"
                    id="lifetime-collection-button"
                    >
                        LIFETIME COLLECTION
                </button>

           <div class="license-plate-map" id="license-plate-map">
            </div>

            <div class="state-collection">
            <div class="state-list">

                ${usStates.map(state => {
        const foundState = foundStates.find(
            entry => entry.stateId === state.id
        );

        const isFound = !!foundState;

        return `
                        <div class="state-item">

                            <label class="state-check">

                                <input
                                    type="checkbox"
                                    data-state-id="${state.id}"
                                    ${isFound ? "checked" : ""}
                                >

                                <span>
                                    ${state.name}
                                </span>

                            </label>

                            <button
                                type="button"
                                class="state-details-button"
                                data-state-id="${state.id}"
                            >
                                ›
                            </button>

                        </div>
                    `;
    }).join("")}

            </div>
            </div>

            <!-- WASHINGTON, D.C. -->

            <div class="special-region-section">

                <h2>Other</h2>

                <div class="state-list">

                    <div class="state-item">

                        <label class="state-check">

                            <input
                                type="checkbox"
                                data-special-region="DC"
                                ${foundStates.some(
        entry => entry.stateId === "DC"
    ) ? "checked" : ""}
                            >

                            <span>
                                Washington, D.C.
                            </span>

                        </label>

                        <button
                            type="button"
                            class="state-details-button"
                            data-special-region="DC"
                        >
                            ›
                        </button>

                    </div>

                </div>

            </div>

            <!-- CANADA -->

            <details class="canada-section">

                <summary>
                    Canada
                </summary>

                <div class="state-list">

                    ${canadaRegions.map(region => {
        const isFound = foundCanada.some(
            entry => entry.regionId === region.id
        );

        return `
                            <div class="state-item">

                                <label class="state-check">

                                    <input
                                        type="checkbox"
                                        data-canada-id="${region.id}"
                                        ${isFound ? "checked" : ""}
                                    >

                                    <span>
                                        ${region.name}
                                    </span>

                                </label>

                                <button
                                    type="button"
                                    class="state-details-button"
                                    data-canada-id="${region.id}"
                                >
                                    ›
                                </button>

                            </div>
                        `;
    }).join("")}

                </div>

            </details>

        </section>
    `;
    document
        .getElementById("lifetime-collection-button")
        .addEventListener("click", () => {
            showPage("scores");
        });

    document
        .getElementById("back-to-games-button")
        .addEventListener("click", () => {
            showPage("games");
        });
    /*
     * U.S. STATE CHECKBOXES
     */

    document
        .querySelectorAll(".state-item input[data-state-id]")
        .forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                handleStateCheck(
                    session,
                    checkbox.dataset.stateId,
                    checkbox.checked
                );
            });
        });

    /*
     * WASHINGTON, D.C.
     */

    const dcCheckbox = document.querySelector(
        'input[data-special-region="DC"]'
    );

    if (dcCheckbox) {
        dcCheckbox.addEventListener("change", () => {
            handleStateCheck(
                session,
                "DC",
                dcCheckbox.checked
            );
        });
    }

    /*
     * CANADA CHECKBOXES
     */

    document
        .querySelectorAll(".state-item input[data-canada-id]")
        .forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                handleCanadaCheck(
                    session,
                    checkbox.dataset.canadaId,
                    checkbox.checked
                );
            });
        });

    /*
     * DETAIL BUTTONS
     */

    document
        .querySelectorAll(".state-details-button")
        .forEach(button => {
            button.addEventListener("click", () => {

                if (button.dataset.specialRegion === "DC") {
                    renderSpecialRegionDetails(
                        session,
                        "DC"
                    );
                    return;
                }

                if (button.dataset.canadaId) {
                    renderCanadaDetails(
                        session,
                        button.dataset.canadaId
                    );
                    return;
                }

                renderStateDetails(
                    session,
                    button.dataset.stateId
                );
            });
        });
    renderLicensePlateMap(session);
}

function renderLicensePlateMap(session, lifetime = false) {

    const mapContainer = document.getElementById(
        "license-plate-map"
    );

    if (!mapContainer) {
        return;
    }

    let foundStates;
    let foundDC = false;

    if (lifetime) {

        const lifetimeStateIds = new Set();

        appData.trips.forEach(trip => {

            (trip.gameSessions || []).forEach(gameSession => {

                if (
                    gameSession.gameId !==
                    "license-plate-quest"
                ) {
                    return;
                }

                const states =
                    gameSession.data?.foundStates || [];

                states.forEach(entry => {

                    if (entry.stateId === "DC") {
                        foundDC = true;
                    } else {
                        lifetimeStateIds.add(
                            entry.stateId
                        );
                    }

                });

            });

        });

        foundStates = [...lifetimeStateIds];

    } else {

        const states =
            session.data.foundStates || [];

        foundDC = states.some(
            entry => entry.stateId === "DC"
        );

        foundStates =
            states
                .map(entry => entry.stateId)
                .filter(stateId => stateId !== "DC");

    }

    mapContainer.innerHTML = `
        <div class="map-title">
            <span>
                ${lifetime
            ? "Lifetime Collection"
            : "State Progress"
        }
            </span>
        </div>

        <div class="us-map">
            <object
                id="us-map-object"
                type="image/svg+xml"
                data="us_map.svg"
                aria-label="United States state progress map"
            ></object>
        </div>
    `;

    const mapObject = document.getElementById(
        "us-map-object"
    );

    mapObject.addEventListener("load", () => {

        const svgDocument =
            mapObject.contentDocument;

        if (!svgDocument) {
            return;
        }

        const foundColors = [
            "#2F80ED",
            "#27AE60",
            "#F2C94C",
            "#F2994A",
            "#EB5757",
            "#9B51E0"
        ];

        foundStates.forEach((stateId, index) => {

            const stateElement =
                svgDocument.getElementById(stateId);

            if (stateElement) {
                stateElement.style.fill =
                    foundColors[
                    index % foundColors.length
                    ];
            }

        });

        if (foundDC) {

            const dcElement =
                svgDocument.getElementById("DC");

            if (dcElement) {
                dcElement.style.fill = "#2a9494";
            }

        }

    });
}

function handleStateCheck(session, stateId, checked) {
    migrateLicensePlateData(session);

    if (!session.data.foundStates) {
        session.data.foundStates = [];
    }

    const foundStates = session.data.foundStates;

    if (checked) {
        const alreadyFound = foundStates.some(
            entry => entry.stateId === stateId
        );

        if (!alreadyFound) {
            const lifetimeStateIds = getLifetimeStateIds();

            if (!lifetimeStateIds.has(stateId)) {
                const trip = appData.trips.find(
                    trip => trip.id === session.tripId
                );

                if (trip) {
                    unlockAchievement(
                        trip,
                        "border-crosser"
                    );
                }
            }

            foundStates.push({
                stateId: stateId,
                spottedBy: [],
                foundAt: new Date().toISOString()
            });

            checkBasicLicensePlateAchievements(session);
            checkRegionalLicensePlateAchievements(session);
            checkCoastLicensePlateAchievements(session);
            checkBorderLicensePlateAchievements(session);
            checkSpecialGeographyLicensePlateAchievements(session);
            checkAlphabeticalLicensePlateAchievements(session);
            checkTimingLicensePlateAchievements(session);

        }
    } else {
        session.data.foundStates = foundStates.filter(
            entry => entry.stateId !== stateId
        );
    }

    saveAppData();

    renderLicensePlateQuest(session);
}

function handleCanadaCheck(session, regionId, checked) {
    if (!session.data.foundCanada) {
        session.data.foundCanada = [];
    }

    const foundCanada = session.data.foundCanada;

    if (checked) {
        const alreadyFound = foundCanada.some(
            entry => entry.regionId === regionId
        );

        if (!alreadyFound) {
            foundCanada.push({
                regionId: regionId,
                spottedBy: []
            });
        }
    } else {
        session.data.foundCanada = foundCanada.filter(
            entry => entry.regionId !== regionId
        );
    }

    saveAppData();

    renderLicensePlateQuest(session);

    const canadaSection = document.querySelector(
        ".canada-section"
    );

    if (canadaSection) {
        canadaSection.open = true;
    }
}


function renderStateDetails(session, stateId) {
    migrateLicensePlateData(session);

    const state = usStates.find(
        state => state.id === stateId
    );

    if (!state) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const foundState = foundStates.find(
        entry => entry.stateId === state.id
    );

    const isFound = !!foundState;

    const spottedBy = foundState
        ? foundState.spottedBy || []
        : [];

    const spottedByNames = spottedBy
        .map(playerId => {
            const player = appData.players.find(
                player => player.id === playerId
            );

            return player ? player.name : null;
        })
        .filter(Boolean);

    const playerOptions = session.players
        .map(playerId => {
            const player = appData.players.find(
                player => player.id === playerId
            );

            if (!player) {
                return "";
            }

            return `
                <label class="spotted-by-player">
                    <input
                        type="checkbox"
                        name="spotted-by"
                        value="${player.id}"
                        ${spottedBy.includes(player.id) ? "checked" : ""}
                        ${!isFound ? "disabled" : ""}
                    >
                    <span>${player.name}</span>
                </label>
            `;
        })
        .join("");

    mainContent.innerHTML = `
        <section class="state-details-page">

            <button
                id="back-to-plate-quest-button"
                class="back-button"
            >
                ← BACK TO LICENSE PLATE QUEST
            </button>

            <div class="state-details-header">

                <p class="state-abbreviation">
                    ${state.abbreviation}
                </p>

                <h1>${state.name}</h1>

                <p class="state-status ${isFound ? "found" : ""}">
                    ${isFound ? "✓ FOUND" : "NOT FOUND YET"}
                </p>

            </div>

            <div class="plate-display">

                <img
                    src="${state.plateImage}"
                    alt="${state.name} license plate example"
                >

            </div>

            <div class="state-info">

                <div class="state-info-item">
                    <span>Capital</span>
                    <strong>${state.capital}</strong>
                </div>

            </div>

            ${isFound
            ? `
                        <div class="spotted-by-section">

                            <h2>Spotted By</h2>

                            <p>
                                Optional. Select everyone who spotted this plate.
                            </p>

                            <div class="spotted-by-list">
                                ${playerOptions}
                            </div>

                            <button
                                type="button"
                                id="save-spotted-by-button"
                            >
                                SAVE
                            </button>

                            <p
                                id="spotted-by-saved-message"
                                class="saved-message"
                                hidden
                            >
                                ✓ Saved
                            </p>

                        </div>
                    `
            : ""
        }

        </section>
    `;

    document
        .getElementById("back-to-plate-quest-button")
        .addEventListener("click", () => {
            renderLicensePlateQuest(session);
        });

    if (isFound) {
        document
            .getElementById("save-spotted-by-button")
            .addEventListener("click", () => {

                const selectedPlayers = Array.from(
                    document.querySelectorAll(
                        'input[name="spotted-by"]:checked'
                    )
                ).map(input => input.value);

                foundState.spottedBy = selectedPlayers;

                saveAppData();

                const savedMessage = document.getElementById(
                    "spotted-by-saved-message"
                );

                savedMessage.hidden = false;

                if (selectedPlayers.length > 0) {
                    savedMessage.textContent =
                        `✓ Saved: ${selectedPlayers
                            .map(playerId => {
                                const player = appData.players.find(
                                    player => player.id === playerId
                                );

                                return player ? player.name : null;
                            })
                            .filter(Boolean)
                            .join(", ")}`;
                } else {
                    savedMessage.textContent =
                        "✓ Saved: No player selected";
                }
            });
    }
}

function renderSpecialRegionDetails(session, regionId) {
    if (regionId !== "DC") {
        return;
    }

    const region = washingtonDC;

    const foundStates = session.data.foundStates || [];

    const foundState = foundStates.find(
        entry => entry.stateId === region.id
    );

    const isFound = !!foundState;

    const spottedBy = foundState
        ? foundState.spottedBy || []
        : [];

    const playerOptions = session.players
        .map(playerId => {
            const player = appData.players.find(
                player => player.id === playerId
            );

            if (!player) {
                return "";
            }

            return `
                <label class="spotted-by-player">

                    <input
                        type="checkbox"
                        name="spotted-by"
                        value="${player.id}"
                        ${spottedBy.includes(player.id) ? "checked" : ""}
                    >

                    <span>${player.name}</span>

                </label>
            `;
        })
        .join("");

    mainContent.innerHTML = `
        <section class="state-details-page">

            <button
                id="back-to-plate-quest-button"
                class="back-button"
            >
                ← BACK TO LICENSE PLATE QUEST
            </button>

            <div class="state-details-header">

                <p class="state-abbreviation">
                    DC
                </p>

                <h1>${region.name}</h1>

                <p class="state-status ${isFound ? "found" : ""}">
                    ${isFound ? "✓ FOUND" : "NOT FOUND YET"}
                </p>

            </div>

            <div class="plate-display">

                <img
                    src="${region.plateImage}"
                    alt="${region.name} license plate example"
                >

            </div>

            ${isFound
            ? `
                        <div class="spotted-by-section">

                            <h2>Spotted By</h2>

                            <p>
                                Optional. Select everyone who spotted this plate.
                            </p>

                            <div class="spotted-by-list">
                                ${playerOptions}
                            </div>

                            <button
                                type="button"
                                id="save-spotted-by-button"
                            >
                                SAVE
                            </button>

                            <p
                                id="spotted-by-saved-message"
                                class="saved-message"
                                hidden
                            >
                                ✓ Saved
                            </p>

                        </div>
                    `
            : ""
        }

        </section>
    `;

    document
        .getElementById("back-to-plate-quest-button")
        .addEventListener("click", () => {
            renderLicensePlateQuest(session);
        });

    if (isFound) {
        document
            .getElementById("save-spotted-by-button")
            .addEventListener("click", () => {

                const selectedPlayers = Array.from(
                    document.querySelectorAll(
                        'input[name="spotted-by"]:checked'
                    )
                ).map(input => input.value);

                foundState.spottedBy = selectedPlayers;

                saveAppData();

                const savedMessage = document.getElementById(
                    "spotted-by-saved-message"
                );

                savedMessage.hidden = false;

                if (selectedPlayers.length > 0) {
                    savedMessage.textContent =
                        `✓ Saved: ${selectedPlayers
                            .map(playerId => {
                                const player = appData.players.find(
                                    player => player.id === playerId
                                );

                                return player ? player.name : null;
                            })
                            .filter(Boolean)
                            .join(", ")}`;
                } else {
                    savedMessage.textContent =
                        "✓ Saved: No player selected";
                }
            });
    }
}

function renderCanadaDetails(session, regionId) {
    const region = canadaRegions.find(
        region => region.id === regionId
    );

    if (!region) {
        return;
    }

    const foundCanada = session.data.foundCanada || [];

    const foundRegion = foundCanada.find(
        entry => entry.regionId === region.id
    );

    const isFound = !!foundRegion;

    const spottedBy = foundRegion
        ? foundRegion.spottedBy || []
        : [];

    const playerOptions = session.players
        .map(playerId => {
            const player = appData.players.find(
                player => player.id === playerId
            );

            if (!player) {
                return "";
            }

            return `
                <label class="spotted-by-player">

                    <input
                        type="checkbox"
                        name="spotted-by"
                        value="${player.id}"
                        ${spottedBy.includes(player.id) ? "checked" : ""}
                    >

                    <span>${player.name}</span>

                </label>
            `;
        })
        .join("");

    mainContent.innerHTML = `
        <section class="state-details-page">

            <button
                id="back-to-plate-quest-button"
                class="back-button"
            >
                ← BACK TO LICENSE PLATE QUEST
            </button>

            <div class="state-details-header">

                <p class="state-abbreviation">
                    ${region.id}
                </p>

                <h1>${region.name}</h1>

                <p class="state-status ${isFound ? "found" : ""}">
                    ${isFound ? "✓ FOUND" : "NOT FOUND YET"}
                </p>

            </div>

            <div class="plate-display">

                <img
                    src="${region.plateImage}"
                    alt="${region.name} license plate example"
                >

            </div>

            ${isFound
            ? `
                        <div class="spotted-by-section">

                            <h2>Spotted By</h2>

                            <p>
                                Optional. Select everyone who spotted this plate.
                            </p>

                            <div class="spotted-by-list">
                                ${playerOptions}
                            </div>

                            <button
                                type="button"
                                id="save-spotted-by-button"
                            >
                                SAVE
                            </button>

                            <p
                                id="spotted-by-saved-message"
                                class="saved-message"
                                hidden
                            >
                                ✓ Saved
                            </p>

                        </div>
                    `
            : ""
        }

        </section>
    `;

    document
        .getElementById("back-to-plate-quest-button")
        .addEventListener("click", () => {
            renderLicensePlateQuest(session);
        });

    if (isFound) {
        document
            .getElementById("save-spotted-by-button")
            .addEventListener("click", () => {

                const selectedPlayers = Array.from(
                    document.querySelectorAll(
                        'input[name="spotted-by"]:checked'
                    )
                ).map(input => input.value);

                foundRegion.spottedBy = selectedPlayers;

                saveAppData();

                const savedMessage = document.getElementById(
                    "spotted-by-saved-message"
                );

                savedMessage.hidden = false;

                if (selectedPlayers.length > 0) {
                    savedMessage.textContent =
                        `✓ Saved: ${selectedPlayers
                            .map(playerId => {
                                const player = appData.players.find(
                                    player => player.id === playerId
                                );

                                return player ? player.name : null;
                            })
                            .filter(Boolean)
                            .join(", ")}`;
                } else {
                    savedMessage.textContent =
                        "✓ Saved: No player selected";
                }
            });
    }
}
// ==================================================
// 11. SCAVENGER HUNT
// ==================================================
function renderScavengerHuntSetup() {

    mainContent.innerHTML = `
        <section class="scavenger-hunt-setup">

            <h1>Scavenger Hunt</h1>

            <h2>How many items?</h2>

            <div class="scavenger-count-options">

                <label>
                    <input
                        type="radio"
                        name="scavenger-count"
                        value="10"
                        checked
                    >
                    10 Items
                </label>

                <label>
                    <input
                        type="radio"
                        name="scavenger-count"
                        value="20"
                    >
                    20 Items
                </label>

                <label>
                    <input
                        type="radio"
                        name="scavenger-count"
                        value="30"
                    >
                    30 Items
                </label>

            </div>

            <h2>What kind of hunt?</h2>

            <div class="scavenger-category-options">

                <label>
                    <input
                        type="radio"
                        name="scavenger-category"
                        value="all"
                        checked
                    >
                    Mixed Adventure
                </label>

                <label>
                    <input
                        type="radio"
                        name="scavenger-category"
                        value="road-trip"
                    >
                    Road Trip
                </label>

                <label>
                    <input
                        type="radio"
                        name="scavenger-category"
                        value="nature"
                    >
                    Nature
                </label>

                <label>
                    <input
                        type="radio"
                        name="scavenger-category"
                        value="city"
                    >
                    City
                </label>

                <label>
                    <input
                        type="radio"
                        name="scavenger-category"
                        value="rural"
                    >
                    Rural
                </label>

            </div>

            <button
                type="button"
                id="start-scavenger-hunt-button"
            >
                START GAME
            </button>

            <button
                type="button"
                id="back-to-scavenger-hunt-button"
            >
                ← BACK
            </button>

        </section>
    `;

    document
        .getElementById("start-scavenger-hunt-button")
        .addEventListener("click", () => {

            const selectedCountOption =
                document.querySelector(
                    'input[name="scavenger-count"]:checked'
                );

            const selectedCategoryOption =
                document.querySelector(
                    'input[name="scavenger-category"]:checked'
                );

            const itemCount =
                Number(selectedCountOption.value);

            const category =
                selectedCategoryOption.value;

            const session =
                createGameSession("scavenger-hunt");

            if (!session) {
                return;
            }

            session.data.itemCount = itemCount;
            session.data.category = category;
            session.data.items =
                generateScavengerHuntItems(
                    itemCount,
                    category
                );
            session.data.neverUnchecked = true;

            saveAppData();

            launchGame(session);
        });

    document
        .getElementById("back-to-scavenger-hunt-button")
        .addEventListener("click", () => {
            renderGameLandingPage("scavenger-hunt");
        });
}

function renderScavengerHunt(session) {

    if (!session.data.items) {

        const itemCount =
            session.data.itemCount || 10;

        session.data.items =
            generateScavengerHuntItems(itemCount);

        saveAppData();
    }

    const items = session.data.items;

    const foundCount = items.filter(
        item => item.found
    ).length;

    mainContent.innerHTML = `
        <section class="scavenger-hunt">

            <h1>Scavenger Hunt</h1>

            <p>${foundCount} / ${items.length} Found</p>

            <progress
                value="${foundCount}"
                max="${items.length}">
            </progress>

            <div class="scavenger-item-list">

                ${items.map(item => `
                    <label class="scavenger-item">

                        <input
                            type="checkbox"
                            data-item-id="${item.id}"
                            ${item.found ? "checked" : ""}
                        >

                        <span>
                            ${item.text}
                        </span>

                    </label>
                `).join("")}

            </div>

            <button
                type="button"
                id="leave-scavenger-hunt-button"
            >
                LEAVE GAME
            </button>

            <button
                type="button"
                id="end-scavenger-hunt-button"
            >
                END GAME
            </button>

        </section>
    `;

    document
        .querySelectorAll(".scavenger-item input")
        .forEach(checkbox => {

            checkbox.addEventListener("change", () => {

                const item =
                    session.data.items.find(
                        item =>
                            item.id ===
                            checkbox.dataset.itemId
                    );

                if (!item) {
                    return;
                }

                item.found =
                    checkbox.checked;

                if (!checkbox.checked) {
                    session.data.neverUnchecked = false;
                }

                const allFound =
                    session.data.items.every(
                        item => item.found
                    );

                if (allFound) {

                    session.status = "completed";
                    session.endedAt =
                        new Date().toISOString();

                    saveAppData();

                    renderScavengerHuntComplete(session);

                    setTimeout(() => {
                        checkBasicScavengerAchievements(session);
                        checkSpecialScavengerAchievements(session);
                        checkScavengerSessionAchievements();
                    }, 0);

                    return;
                }

                saveAppData();

                checkBasicScavengerAchievements(session);
                checkSpecialScavengerAchievements(session);

                renderScavengerHunt(session);
            });

        });

    document
        .getElementById("leave-scavenger-hunt-button")
        .addEventListener("click", () => {
            renderGameLandingPage("scavenger-hunt");
        });

    document
        .getElementById("end-scavenger-hunt-button")
        .addEventListener("click", () => {

            const confirmed = confirm(
                "End this Scavenger Hunt?\n\n" +
                "Your progress will be saved."
            );

            if (!confirmed) {
                return;
            }

            session.status = "ended";
            session.endedAt =
                new Date().toISOString();

            saveAppData();

            renderGameLandingPage("scavenger-hunt");
        });
}

function generateScavengerHuntItems(
    itemCount,
    category = "all"
) {

    const eligibleItems =
        category === "all"
            ? [...scavengerHuntItems]
            : scavengerHuntItems.filter(
                item =>
                    item.categories.includes(category)
            );

    const shuffledItems =
        [...eligibleItems].sort(
            () => Math.random() - 0.5
        );

    return shuffledItems
        .slice(0, itemCount)
        .map(item => ({
            id: item.id,
            text: item.text,
            difficulty: item.difficulty,
            categories: [...item.categories],
            found: false
        }));
}

function renderScavengerHuntComplete(session) {

    const itemCount =
        session.data.items?.length || 0;

    mainContent.innerHTML = `
        <section class="scavenger-hunt-complete">

            <h1>Scavenger Hunt Complete!</h1>

            <p>
                You found all ${itemCount} items!
            </p>

            <button
                type="button"
                id="scavenger-complete-done-button"
            >
                DONE
            </button>

        </section>
    `;

    document
        .getElementById("scavenger-complete-done-button")
        .addEventListener("click", () => {
            showPage("home");
        });
}


// ==================================================
// BINGO 
// ==================================================
function checkRoadTripBingo(card) {
    const lines = [
        // Rows
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],

        // Columns
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],

        // Diagonals
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ];

    return lines.some(line =>
        line.every(index => card[index].found)
    );
}

function generateRoadTripBingoCard() {
    const shuffledItems = [...roadTripBingoItems].sort(
        () => Math.random() - 0.5
    );

    const card = shuffledItems
        .slice(0, 24)
        .map((text, index) => ({
            id: `bingo-${Date.now()}-${index}`,
            text: text,
            found: false
        }));

    card.splice(12, 0, {
        id: "bingo-free",
        text: "FREE",
        found: true
    });

    return card;
}

function renderRoadTripBingoSetup() {
    mainContent.innerHTML = `
        <section class="road-trip-bingo-setup">

            <h1>Road Trip Bingo</h1>

            <p>
                Work together to spot the things on your Bingo card.
            </p>

            <button
                type="button"
                id="start-road-trip-bingo-button"
            >
                START GAME
            </button>

            <button
                type="button"
                id="back-to-road-trip-bingo-button"
            >
                ← BACK
            </button>

        </section>
    `;

    document
        .getElementById("start-road-trip-bingo-button")
        .addEventListener("click", () => {

            const session = createGameSession("road-trip-bingo");

            if (!session) {
                return;
            }

            session.data.card = generateRoadTripBingoCard();

            saveAppData();

            launchGame(session);
        });

    document
        .getElementById("back-to-road-trip-bingo-button")
        .addEventListener("click", () => {
            renderGameLandingPage("road-trip-bingo");
        });
}

function renderRoadTripBingo(session) {
    if (!session.data.card) {
        session.data.card = generateRoadTripBingoCard();
        saveAppData();
    }

    const card = session.data.card;

    mainContent.innerHTML = `
        <section class="road-trip-bingo">

            <h1>Road Trip Bingo</h1>

            <p class="bingo-status">
                Spot an item and tap its square!
            </p>

            <div class="bingo-grid">
                ${card.map(item => `
                    <button
                        type="button"
                       class="bingo-square ${item.found ? "found" : ""}"

                        data-item-id="${item.id}"
                        aria-pressed="${item.found}"
                    >
                        ${item.text}
                    </button>
                `).join("")}
            </div>

            <button
                type="button"
                id="leave-road-trip-bingo-button"
            >
                LEAVE GAME
            </button>

            <button
                type="button"
                id="end-road-trip-bingo-button"
            >
                END GAME
            </button>

        </section>
    `;

    document
        .querySelectorAll(".bingo-square")
        .forEach(button => {

            button.addEventListener("click", () => {

                const item = card.find(
                    entry => entry.id === button.dataset.itemId
                );

                if (!item || item.id === "bingo-free") {
                    return;
                }

                item.found = !item.found;

                saveAppData();

                if (checkRoadTripBingo(card)) {
                    renderRoadTripBingoComplete(session);
                    return;
                }

                renderRoadTripBingo(session);
            });
        });

    document
        .getElementById("leave-road-trip-bingo-button")
        .addEventListener("click", () => {
            renderGameLandingPage("road-trip-bingo");
        });

    document
        .getElementById("end-road-trip-bingo-button")
        .addEventListener("click", () => {

            const confirmed = confirm(
                "Are you sure you want to end this Bingo game?"
            );

            if (!confirmed) {
                return;
            }

            session.status = "completed";
            session.endedAt = new Date().toISOString();

            saveAppData();

            showPage("home");
        });
}

function renderRoadTripBingoComplete(session) {
    session.status = "completed";
    session.endedAt = new Date().toISOString();

    saveAppData();

    mainContent.innerHTML = `
        <section class="road-trip-bingo-complete">

            <h1>BINGO!</h1>

            <p>
                You completed a row, column, or diagonal!
            </p>

            <button
                type="button"
                id="bingo-complete-done-button"
            >
                DONE
            </button>

        </section>
    `;

    document
        .getElementById("bingo-complete-done-button")
        .addEventListener("click", () => {
            renderGameLandingPage("road-trip-bingo");
        });
}
// ==================================================
// 12. ACHIEVEMENTS
// ==================================================


function hasAchievement(trip, achievementId) {
    return (trip.achievements || []).includes(achievementId);
}

function unlockAchievement(trip, achievementId) {

    if (hasAchievement(trip, achievementId)) {
        return false;
    }

    trip.achievements.push(achievementId);

    saveAppData();

    const achievement =
        achievementLibrary.find(
            achievement =>
                achievement.id === achievementId
        );

    if (achievement) {
        showAchievementUnlocked(achievement);
    }

    return true;
}

function showAchievementUnlocked(achievement) {

    const existingPopup =
        document.getElementById(
            "achievement-unlocked-popup"
        );

    if (existingPopup) {
        existingPopup.remove();
    }

    const popup =
        document.createElement("div");

    popup.id =
        "achievement-unlocked-popup";

    popup.innerHTML = `
        <div class="achievement-popup">

            <div class="achievement-popup-icon">
                🏆
            </div>

            <p class="achievement-popup-label">
                ACHIEVEMENT UNLOCKED
            </p>

            <h2>
                ${achievement.name}
            </h2>

            <p>
                ${achievement.description}
            </p>

            <button
                type="button"
                id="achievement-popup-close"
            >
                NICE!
            </button>

        </div>
    `;

    document.body.appendChild(popup);

    document
        .getElementById(
            "achievement-popup-close"
        )
        .addEventListener(
            "click",
            () => {
                popup.remove();
            }
        );
}

function getAchievementIcon(achievementId) {

    const icons = {

        // License Plate Quest
        "great-lakes": `
             <span class="great-lakes-badge">
                <img
                    src="Great-Lakes.svg"
                    alt="Great Lakes"
                    aria-hidden="true"
                >
             </span>
        `,

        "road-tripper": `
            <span class="road-trip-badge">
                <svg
                    viewBox="0 0 80 80"
                    aria-hidden="true"
                >
                    <path
                        class="badge-road-base"
                        d="M 25 0 C 65 15, 65 30, 35 40 C 5 50, 10 65, 55 80"
                    ></path>

                    <path
                        class="badge-road-center"
                        d="M 25 0 C 65 15, 65 30, 35 40 C 5 50, 10 65, 55 80"
                    ></path>
                </svg>
            </span>
        `,

        "far-from-home": `
            <span class="compass-badge">
                <svg
                    viewBox="0 0 80 80"
                    aria-hidden="true"
                >
                    <circle
                        class="compass-ring"
                        cx="40"
                        cy="40"
                        r="27"
                    ></circle>

                    <polygon
                        class="compass-north"
                        points="40,13 46,40 40,35 34,40"
                    ></polygon>

                    <polygon
                        class="compass-south"
                        points="40,67 34,40 40,45 46,40"
                    ></polygon>

                    <line
                        class="compass-line"
                        x1="13"
                        y1="40"
                        x2="67"
                        y2="40"
                    ></line>

                    <line
                        class="compass-line"
                        x1="40"
                        y1="13"
                        x2="40"
                        y2="67"
                    ></line>

                    <circle
                        class="compass-center"
                        cx="40"
                        cy="40"
                        r="4"
                    ></circle>
                </svg>
            </span>
        `,

        "three-plates": `
            <span class="three-plates-badge">
                <svg
                    viewBox="0 0 56 68"
                    aria-hidden="true"
                >

                    <!-- Car -->
                    <g transform="translate(28 32) scale(2) translate(-28 -25)">

                        <path
                            d="M18 32
                               L20 21
                               C20.5 19 22 18 24 18
                               H32
                               C34 18 35.5 19 36 21
                               L38 32
                               Z"
                            fill="none"
                            stroke="#263238"
                            stroke-width="2"
                            stroke-linejoin="round"
                        />

                        <path
                            d="M22 21
                               H34
                               L35 25
                               H21
                               Z"
                            fill="#e5e7e9"
                            stroke="#263238"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                        />

                        <rect
                            x="24"
                            y="27"
                            width="8"
                            height="4"
                            rx="0.5"
                            fill="#f5f1e7"
                            stroke="#263238"
                            stroke-width="1.25"
                        />

                        <rect
                            x="18.5"
                            y="27"
                            width="3"
                            height="4"
                            rx="0.75"
                            fill="#c94b4b"
                        />

                        <rect
                            x="34.5"
                            y="27"
                            width="3"
                            height="4"
                            rx="0.75"
                            fill="#c94b4b"
                        />

                        <circle
                            cx="21"
                            cy="32"
                            r="2"
                            fill="#263238"
                        />

                        <circle
                            cx="35"
                            cy="32"
                            r="2"
                            fill="#263238"
                        />

                    </g>

                    <!-- Three marker stays unchanged -->
                    <circle
                        class="three-plates-number-circle"
                        cx="17"
                        cy="15"
                        r="10"
                    ></circle>

                    <text
                        class="three-plates-number"
                        x="17"
                        y="20"
                        text-anchor="middle"
                    >3</text>

                </svg>
            </span>
        `,

        "early-bird": `
            <span class="emoji-achievement">🐦</span>
        `,

        "lunch-break": `
            <span class="emoji-achievement">🍴</span>
        `,

        "night-owl": `
            <span class="emoji-achievement">🦉</span>
        `,

        "after-hours": `
            <span class="emoji-achievement">🌙</span>
        `,

        "coastal-collector": `
            <span class="emoji-achievement">🐚</span>
        `,

        "mountain-time": `
            <span class="emoji-achievement">⛰️</span>
        `,

        "new-englander": `
            <span class="emoji-achievement">🦞</span>
        `,

        "midwest-tour": `
            <span class="emoji-achievement">🌾</span>
        `,
        "bookends": `
            <span class="emoji-achievement">📚</span>
        `,

        "rapid-fire": `
            <span class="emoji-achievement">🔥</span>
        `,

        "speed-collector": `
            <span class="emoji-achievement">⏱️</span>
        `,

        "first-find": `
            <span class="emoji-achievement">🌅</span>
        `,
        "middle-of-the-alphabet": `
    <span class="mno-sign-badge">
        <svg viewBox="0 0 52 48" aria-hidden="true">

            <!-- Sign -->
            <rect
                class="mno-sign"
                x="4"
                y="4"
                width="44"
                height="40"
                rx="2"
            ></rect>

            <!-- M row -->
            <text
                class="mno-text mno-letter"
                x="9"
                y="16"
            >M</text>

                      <text
                class="mno-text mno-distance"
                x="29"
                y="16"
            >13 mi</text>


            <!-- N row -->
            <text
                class="mno-text mno-letter"
                x="9"
                y="27"
            >N</text>

          
            <text
                class="mno-text mno-distance"
                x="29"
                y="27"
            >17 mi</text>


            <!-- O row -->
            <text
                class="mno-text mno-letter"
                x="9"
                y="38"
            >O</text>

           <line
    class="mno-connector"
    x1="17"
    y1="14"
    x2="26"
    y2="14"
></line>

<line
    class="mno-connector"
    x1="17"
    y1="25"
    x2="26"
    y2="25"
></line>

<line
    class="mno-connector"
    x1="17"
    y1="36"
    x2="26"
    y2="36"
></line>
            <text
                class="mno-text mno-distance"
                x="29"
                y="38"
            >26 mi</text>

        </svg>
    </span>
`,

        "alphabet-explorer": `
            <span class="emoji-achievement">🔤</span>
        `,
        "m-m-m-m-m": `
            <span class="mm-badge">
                <svg viewBox="0 0 52 48" aria-hidden="true">

                    <!-- Red candy -->
                    <circle
                        class="mm-red"
                        cx="18"
                        cy="25"
                        r="14"
                    ></circle>

                    <text
                        class="mm-letter"
                        x="18"
                        y="31"
                        text-anchor="middle"
                    >M</text>

                    <!-- Blue candy -->
                    <circle
                        class="mm-blue"
                        cx="34"
                        cy="21"
                        r="14"
                    ></circle>

                    <text
                        class="mm-letter"
                        x="34"
                        y="27"
                        text-anchor="middle"
                    >M</text>

                </svg>
            </span>
        `,

        "triple-letter": `
            <span class="triple-letter-badge">
                <svg viewBox="0 0 48 48" aria-hidden="true">

                    <!-- Board -->
                    <rect
                        class="scrabble-board"
                        x="4"
                        y="5"
                        width="40"
                        height="38"
                        rx="2"
                    ></rect>

                    <!-- Bonus squares -->
                    <rect
                        class="scrabble-blue"
                        x="14"
                        y="14"
                        width="10"
                        height="9.5"
                    ></rect>

                    <rect
                        class="scrabble-red"
                        x="34"
                        y="5"
                        width="10"
                        height="9.5"
                    ></rect>

                    <rect
                        class="scrabble-yellow"
                        x="4"
                        y="33.5"
                        width="10"
                        height="9.5"
                    ></rect>

                    <rect
                        class="scrabble-blue"
                        x="24"
                        y="23.5"
                        width="10"
                        height="10"
                    ></rect>

                    <!-- Tile grid -->
                    <line
                        class="scrabble-grid"
                        x1="14"
                        y1="5"
                        x2="14"
                        y2="43"
                    ></line>

                    <line
                        class="scrabble-grid"
                        x1="24"
                        y1="5"
                        x2="24"
                        y2="43"
                    ></line>

                    <line
                        class="scrabble-grid"
                        x1="34"
                        y1="5"
                        x2="34"
                        y2="43"
                    ></line>

                    <line
                        class="scrabble-grid"
                        x1="4"
                        y1="14.5"
                        x2="44"
                        y2="14.5"
                    ></line>

                    <line
                        class="scrabble-grid"
                        x1="4"
                        y1="24"
                        x2="44"
                        y2="24"
                    ></line>

                    <line
                        class="scrabble-grid"
                        x1="4"
                        y1="33.5"
                        x2="44"
                        y2="33.5"
                    ></line>

                </svg>
            </span>
        `,

        "neighborly": `
            <span class="emoji-achievement">🏠</span>
        `,

        "border-patrol": `
            <span class="emoji-achievement">🚧</span>
        `,

        "chain-reaction": `
            <span class="emoji-achievement">🔗</span>
        `,

        "state-hopper": `
            <span class="emoji-achievement">🐰</span>
        `,

        "southern-swing": `
            <span class="emoji-achievement">🍑</span>
        `,

        "western-wanderer": `
            <span class="emoji-achievement">🐎</span>
        `,

        "northeast-explorer": `
            <span class="emoji-achievement">🗽</span>
        `,

        "pacific-trio": `
            <span class="emoji-achievement">🏄</span>
        `,

        "plains-walker": `
            <span class="emoji-achievement">🦬</span>
        `,

        "appalachian-adventure": `
            <span class="emoji-achievement">🎸</span>
        `,

        "coast-to-coast": `
            <span class="emoji-achievement">🏖️</span>
        `,

        "twin-coasts": `
            <span class="emoji-achievement">🌊</span>
        `,

        "border-crosser": `
            <span class="emoji-achievement">🛂</span>
        `,

        "cross-country": `
            <span class="emoji-achievement">🏃</span>
        `,

        "four-corners": `
            <span class="emoji-achievement">➕</span>
        `,

        "a-team": `
            <span class="emoji-achievement">🚐</span>
        `,

        "double-trouble": `
            <span class="emoji-achievement">👯</span>
        `,
        "alphabet-soup": `
    <span class="emoji-achievement">🍲</span>
`,
        "bookends": `
    <span class="emoji-achievement">📚</span>
`,

        // Scavenger Hunt
        "three-is-a-charm": `
            <span class="three-star-badge">
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </span>
        `,

        "halfway-there": `
            <span class="three-star-badge">
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </span>
        `,

        "hunt-complete": `
            <span class="finish-badge">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <line
                        class="finish-pole"
                        x1="13"
                        y1="8"
                        x2="13"
                        y2="40"
                    ></line>

                    <path
                        class="finish-flag"
                        d="M13 9
                           H35
                           L29 17
                           L35 25
                           H13
                           Z"
                    ></path>

                    <path
                        class="finish-light"
                        d="M13 12
                           H29
                           L25 17
                           L29 22
                           H13
                           Z"
                    ></path>

                    <line
                        class="finish-pole"
                        x1="9"
                        y1="40"
                        x2="17"
                        y2="40"
                    ></line>
                </svg>
            </span>
        `,

        "sharp-eyes": `
            <span class="eye-badge">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path
                        class="eye-outline"
                        d="M6 24
                           C11 16 18 12 24 12
                           C30 12 37 16 42 24
                           C37 32 30 36 24 36
                           C18 36 11 32 6 24
                           Z"
                    ></path>

                    <circle
                        class="eye-iris"
                        cx="24"
                        cy="24"
                        r="9"
                    ></circle>

                    <circle
                        class="eye-pupil"
                        cx="24"
                        cy="24"
                        r="4"
                    ></circle>

                    <circle
                        class="eye-glint"
                        cx="27"
                        cy="21"
                        r="1.5"
                    ></circle>
                </svg>
            </span>
        `,

        "big-game-hunter": `
            <span class="emoji-achievement">🏆</span>
        `,

        "perfect-hunt": `
            <span class="emoji-achievement">🎯</span>
        `,

        "category-collector": `
            <span class="emoji-achievement">🗂️</span>
        `,

        "second-hunt": `
            <span class="emoji-achievement">🔎</span>
        `,

        "hat-trick": `
            <span class="emoji-achievement">🎩</span>
        `,

        "scavenger-veteran": `
            <span class="emoji-achievement">🧭</span>
        `,

        // Lifetime achievements

        "ten-states": `
            <span class="interstate-badge">
                <svg viewBox="0 0 80 80" aria-hidden="true">
                    <path
                        class="interstate-shield"
                        d="
                            M 10 18
                            Q 25 27 40 18
                            Q 55 27 70 18
                            L 66 51
                            C 65 62 55 71 40 76
                            C 25 71 15 62 14 51
                            Z
                        "
                    ></path>

                    <path
                        class="interstate-red"
                        d="
                            M 10 18
                            Q 25 27 40 18
                            Q 55 27 70 18
                            L 69 27
                            Q 55 35 40 27
                            Q 25 35 11 27
                            Z
                        "
                    ></path>

                    <text
                        class="interstate-number"
                        x="40"
                        y="53"
                        text-anchor="middle"
                    >10</text>
                </svg>
            </span>
        `,

        "twenty-five-states": `
            <span class="interstate-badge">
                <svg viewBox="0 0 80 80" aria-hidden="true">
                    <path
                        class="interstate-shield"
                        d="
                            M 10 18
                            Q 25 27 40 18
                            Q 55 27 70 18
                            L 66 51
                            C 65 62 55 71 40 76
                            C 25 71 15 62 14 51
                            Z
                        "
                    ></path>

                    <path
                        class="interstate-red"
                        d="
                            M 10 18
                            Q 25 27 40 18
                            Q 55 27 70 18
                            L 69 27
                            Q 55 35 40 27
                            Q 25 35 11 27
                            Z
                        "
                    ></path>

                    <text
                        class="interstate-number"
                        x="40"
                        y="53"
                        text-anchor="middle"
                    >25</text>
                </svg>
            </span>
        `,

        "forty-states": `
            <span class="interstate-badge">
                <svg viewBox="0 0 80 80" aria-hidden="true">
                    <path
                        class="interstate-shield"
                        d="
                            M 10 18
                            Q 25 27 40 18
                            Q 55 27 70 18
                            L 66 51
                            C 65 62 55 71 40 76
                            C 25 71 15 62 14 51
                            Z
                        "
                    ></path>

                    <path
                        class="interstate-red"
                        d="
                            M 10 18
                            Q 25 27 40 18
                            Q 55 27 70 18
                            L 69 27
                            Q 55 35 40 27
                            Q 25 35 11 27
                            Z
                        "
                    ></path>

                    <text
                        class="interstate-number"
                        x="40"
                        y="53"
                        text-anchor="middle"
                    >40</text>
                </svg>
            </span>
        `,

        "all-fifty-states": `
            <span class="trophy-badge">
                <svg viewBox="0 0 80 80" aria-hidden="true">
                    <path
                        class="trophy-outline"
                        d="M 20 24 H 11 C 11 37, 17 44, 26 44"
                    ></path>

                    <path
                        class="trophy-outline"
                        d="M 60 24 H 69 C 69 37, 63 44, 54 44"
                    ></path>

                    <path
                        class="trophy-cup"
                        d="
                            M 20 18
                            H 60
                            V 35
                            C 60 48, 52 55, 40 55
                            C 28 55, 20 48, 20 35
                            Z
                        "
                    ></path>

                    <rect
                        class="trophy-stem"
                        x="36"
                        y="54"
                        width="8"
                        height="10"
                    ></rect>

                    <rect
                        class="trophy-base"
                        x="27"
                        y="64"
                        width="26"
                        height="7"
                        rx="2"
                    ></rect>
                </svg>
            </span>
        `

    };

    return icons[achievementId] || "★";
}

// =====================================================
// LICENSE PLATE QUEST ACHIEVEMENTS
// =====================================================

function getLifetimeStateIds() {
    const lifetimeStateIds = new Set();

    appData.trips.forEach(trip => {
        (trip.gameSessions || []).forEach(session => {
            if (session.gameId !== "license-plate-quest") {
                return;
            }

            const foundStates = session.data?.foundStates || [];

            foundStates.forEach(entry => {
                if (entry.stateId !== "DC") {
                    lifetimeStateIds.add(entry.stateId);
                }
            });
        });
    });

    return lifetimeStateIds;
}

function checkBasicLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const stateIds = foundStates
        .map(entry => entry.stateId)
        .filter(stateId => stateId !== "DC");

    const uniqueStateIds = [...new Set(stateIds)];

    // Three Plates
    if (uniqueStateIds.length >= 3) {
        unlockAchievement(trip, "three-plates");
    }

    // Road Tripper
    if (uniqueStateIds.length >= 10) {
        unlockAchievement(trip, "road-tripper");
    }
    // Far From Home
    const startingState = trip.startingState;

    if (startingState) {
        const adjacentStates = {
            AL: ["FL", "GA", "MS", "TN"],
            AK: [],
            AZ: ["CA", "NV", "UT", "CO", "NM"],
            AR: ["LA", "MS", "MO", "OK", "TN", "TX"],
            CA: ["OR", "NV", "AZ"],
            CO: ["WY", "NE", "KS", "OK", "NM", "AZ", "UT"],
            CT: ["NY", "MA", "RI"],
            DE: ["MD", "NJ", "PA"],
            FL: ["AL", "GA"],
            GA: ["FL", "AL", "TN", "NC", "SC"],
            HI: [],
            ID: ["WA", "OR", "NV", "UT", "WY", "MT"],
            IL: ["WI", "IA", "MO", "KY", "IN", "MI"],
            IN: ["MI", "OH", "KY", "IL"],
            IA: ["MN", "WI", "IL", "MO", "NE", "SD"],
            KS: ["NE", "MO", "OK", "CO"],
            KY: ["IL", "IN", "OH", "WV", "VA", "TN", "MO"],
            LA: ["TX", "AR", "MS"],
            ME: ["NH"],
            MD: ["VA", "WV", "PA", "DE"],
            MA: ["RI", "CT", "NY", "VT", "NH"],
            MI: ["WI", "IN", "OH"],
            MN: ["WI", "IA", "SD", "ND"],
            MS: ["LA", "AR", "TN", "AL"],
            MO: ["IA", "IL", "KY", "TN", "AR", "OK", "KS", "NE"],
            MT: ["ID", "WY", "SD", "ND"],
            NE: ["SD", "IA", "MO", "KS", "CO", "WY"],
            NV: ["CA", "OR", "ID", "UT", "AZ"],
            NH: ["ME", "MA", "VT"],
            NJ: ["NY", "PA", "DE"],
            NM: ["AZ", "UT", "CO", "OK", "TX"],
            NY: ["PA", "NJ", "CT", "MA", "VT"],
            NC: ["VA", "TN", "GA", "SC"],
            ND: ["MT", "SD", "MN"],
            OH: ["MI", "PA", "WV", "KY", "IN"],
            OK: ["CO", "KS", "MO", "AR", "TX", "NM"],
            OR: ["WA", "ID", "NV", "CA"],
            PA: ["NY", "NJ", "DE", "MD", "WV", "OH"],
            RI: ["CT", "MA"],
            SC: ["NC", "GA"],
            SD: ["ND", "MN", "IA", "NE", "WY", "MT"],
            TN: ["KY", "VA", "NC", "GA", "AL", "MS", "AR", "MO"],
            TX: ["NM", "OK", "AR", "LA"],
            UT: ["ID", "WY", "CO", "AZ", "NV"],
            VT: ["NY", "MA", "NH"],
            VA: ["NC", "TN", "KY", "WV", "MD"],
            WA: ["ID", "OR"],
            WV: ["OH", "PA", "MD", "VA", "KY"],
            WI: ["MN", "IA", "IL", "MI"],
            WY: ["MT", "SD", "NE", "CO", "UT", "ID"]
        };

        const nearbyStates = adjacentStates[startingState] || [];

        const foundFarAway = uniqueStateIds.some(
            stateId =>
                stateId !== startingState &&
                !nearbyStates.includes(stateId)
        );

        if (foundFarAway) {
            unlockAchievement(trip, "far-from-home");
        }
    }

    // State Hopper
    const statesByDay = {};

    foundStates.forEach(entry => {
        if (!entry.foundAt || entry.stateId === "DC") {
            return;
        }

        const date = new Date(entry.foundAt);

        if (isNaN(date.getTime())) {
            return;
        }

        const dayKey = [
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        ].join("-");

        if (!statesByDay[dayKey]) {
            statesByDay[dayKey] = new Set();
        }

        statesByDay[dayKey].add(entry.stateId);
    });

    const foundFiveInOneDay = Object.values(statesByDay).some(
        states => states.size >= 5
    );

    if (foundFiveInOneDay) {
        unlockAchievement(trip, "state-hopper");
    }
}

function checkRegionalLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const uniqueStateIds = [
        ...new Set(
            foundStates
                .map(entry => entry.stateId)
                .filter(stateId => stateId !== "DC")
        )
    ];


    // ==========================================
    // BROAD REGIONS
    // ==========================================

    const midwestStates = [
        "IL", "IN", "IA", "KS", "MI", "MN",
        "MO", "NE", "ND", "OH", "SD", "WI"
    ];

    const southernStates = [
        "AL", "AR", "DE", "FL", "GA", "KY",
        "LA", "MD", "MS", "NC", "OK", "SC",
        "TN", "TX", "VA", "WV"
    ];

    const westernStates = [
        "AK", "AZ", "CA", "CO", "HI", "ID",
        "MT", "NV", "NM", "OR", "UT", "WA", "WY"
    ];

    const northeastStates = [
        "CT", "ME", "MA", "NH", "NJ", "NY",
        "PA", "RI", "VT"
    ];


    const midwestCount = uniqueStateIds.filter(
        stateId => midwestStates.includes(stateId)
    ).length;

    const southernCount = uniqueStateIds.filter(
        stateId => southernStates.includes(stateId)
    ).length;

    const westernCount = uniqueStateIds.filter(
        stateId => westernStates.includes(stateId)
    ).length;

    const northeastCount = uniqueStateIds.filter(
        stateId => northeastStates.includes(stateId)
    ).length;


    if (midwestCount >= 5) {
        unlockAchievement(trip, "midwest-tour");
    }

    if (southernCount >= 5) {
        unlockAchievement(trip, "southern-swing");
    }

    if (westernCount >= 5) {
        unlockAchievement(trip, "western-wanderer");
    }

    if (northeastCount >= 5) {
        unlockAchievement(trip, "northeast-explorer");
    }


    // ==========================================
    // GREAT LAKES
    // ==========================================

    const greatLakesStates = [
        "IL",
        "IN",
        "MI",
        "MN",
        "NY",
        "OH",
        "PA",
        "WI"
    ];

    const greatLakesCount = uniqueStateIds.filter(
        stateId => greatLakesStates.includes(stateId)
    ).length;

    if (greatLakesCount >= 5) {
        unlockAchievement(trip, "great-lakes");
    }


    // ==========================================
    // NEW ENGLAND
    // ==========================================

    const newEnglandStates = [
        "CT",
        "ME",
        "MA",
        "NH",
        "RI",
        "VT"
    ];

    const newEnglandCount = uniqueStateIds.filter(
        stateId => newEnglandStates.includes(stateId)
    ).length;

    if (newEnglandCount === 6) {
        unlockAchievement(trip, "new-englander");
    }


    // ==========================================
    // GULF COAST
    // ==========================================

    const gulfCoastStates = [
        "AL",
        "FL",
        "LA",
        "MS",
        "TX"
    ];

    const gulfCoastCount = uniqueStateIds.filter(
        stateId => gulfCoastStates.includes(stateId)
    ).length;

    if (gulfCoastCount >= 3) {
        unlockAchievement(trip, "gulf-coast");
    }


    // ==========================================
    // PACIFIC COAST
    // ==========================================

    const pacificCoastStates = [
        "CA",
        "OR",
        "WA"
    ];

    const pacificCoastCount = uniqueStateIds.filter(
        stateId => pacificCoastStates.includes(stateId)
    ).length;

    if (pacificCoastCount === 3) {
        unlockAchievement(trip, "pacific-trio");
    }


    // ==========================================
    // GREAT PLAINS
    // ==========================================

    const greatPlainsStates = [
        "KS",
        "NE",
        "ND",
        "OK",
        "SD",
        "TX"
    ];

    const greatPlainsCount = uniqueStateIds.filter(
        stateId => greatPlainsStates.includes(stateId)
    ).length;

    if (greatPlainsCount >= 5) {
        unlockAchievement(trip, "plains-walker");
    }


    // ==========================================
    // APPALACHIAN
    // ==========================================

    const appalachianStates = [
        "AL",
        "GA",
        "KY",
        "MD",
        "MS",
        "NY",
        "NC",
        "OH",
        "PA",
        "SC",
        "TN",
        "VA",
        "WV"
    ];

    const appalachianCount = uniqueStateIds.filter(
        stateId => appalachianStates.includes(stateId)
    ).length;

    if (appalachianCount >= 5) {
        unlockAchievement(trip, "appalachian-adventure");
    }


    // ==========================================
    // MOUNTAIN TIME
    // ==========================================

    const mountainTimeStates = [
        "AZ",
        "CO",
        "ID",
        "KS",
        "MT",
        "NE",
        "NM",
        "ND",
        "OR",
        "SD",
        "TX",
        "UT",
        "WY"
    ];

    const mountainTimeCount = uniqueStateIds.filter(
        stateId => mountainTimeStates.includes(stateId)
    ).length;

    if (mountainTimeCount >= 5) {
        unlockAchievement(trip, "mountain-time");
    }
}

function checkCoastLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const uniqueStateIds = [
        ...new Set(
            foundStates
                .map(entry => entry.stateId)
                .filter(stateId => stateId !== "DC")
        )
    ];


    // ==========================================
    // COAST TO COAST
    // ==========================================

    const atlanticCoastStates = [
        "ME",
        "NH",
        "MA",
        "RI",
        "CT",
        "NY",
        "NJ",
        "DE",
        "MD",
        "VA",
        "NC",
        "SC",
        "GA",
        "FL"
    ];

    const pacificCoastStates = [
        "CA",
        "OR",
        "WA"
    ];

    const hasAtlanticState = uniqueStateIds.some(
        stateId => atlanticCoastStates.includes(stateId)
    );

    const hasPacificState = uniqueStateIds.some(
        stateId => pacificCoastStates.includes(stateId)
    );

    if (hasAtlanticState && hasPacificState) {
        unlockAchievement(trip, "coast-to-coast");
    }


    // ==========================================
    // TWIN COASTS
    // ==========================================

    if (hasAtlanticState && hasPacificState) {
        unlockAchievement(trip, "twin-coasts");
    }


    // ==========================================
    // COASTAL COLLECTOR
    // ==========================================

    const coastalStates = [
        // Atlantic
        "ME",
        "NH",
        "MA",
        "RI",
        "CT",
        "NY",
        "NJ",
        "DE",
        "MD",
        "VA",
        "NC",
        "SC",
        "GA",
        "FL",

        // Pacific
        "CA",
        "OR",
        "WA",

        // Gulf
        "AL",
        "MS",
        "LA",
        "TX"
    ];

    const coastalCount = uniqueStateIds.filter(
        stateId => coastalStates.includes(stateId)
    ).length;

    if (coastalCount >= 5) {
        unlockAchievement(trip, "coastal-collector");
    }
}
function checkBorderLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const uniqueStateIds = [
        ...new Set(
            foundStates
                .map(entry => entry.stateId)
                .filter(stateId => stateId !== "DC")
        )
    ];


    // ==========================================
    // ADJACENCY DATA
    // ==========================================

    const adjacentStates = {
        AL: ["FL", "GA", "MS", "TN"],
        AK: [],
        AZ: ["CA", "NV", "UT", "CO", "NM"],
        AR: ["LA", "MS", "MO", "OK", "TN", "TX"],
        CA: ["OR", "NV", "AZ"],
        CO: ["WY", "NE", "KS", "OK", "NM", "AZ", "UT"],
        CT: ["NY", "MA", "RI"],
        DE: ["MD", "NJ", "PA"],
        FL: ["AL", "GA"],
        GA: ["FL", "AL", "TN", "NC", "SC"],
        HI: [],
        ID: ["WA", "OR", "NV", "UT", "WY", "MT"],
        IL: ["WI", "IA", "MO", "KY", "IN", "MI"],
        IN: ["MI", "OH", "KY", "IL"],
        IA: ["MN", "WI", "IL", "MO", "NE", "SD"],
        KS: ["NE", "MO", "OK", "CO"],
        KY: ["IL", "IN", "OH", "WV", "VA", "TN", "MO"],
        LA: ["TX", "AR", "MS"],
        ME: ["NH"],
        MD: ["VA", "WV", "PA", "DE"],
        MA: ["RI", "CT", "NY", "VT", "NH"],
        MI: ["WI", "IN", "OH"],
        MN: ["WI", "IA", "SD", "ND"],
        MS: ["LA", "AR", "TN", "AL"],
        MO: ["IA", "IL", "KY", "TN", "AR", "OK", "KS", "NE"],
        MT: ["ID", "WY", "SD", "ND"],
        NE: ["SD", "IA", "MO", "KS", "CO", "WY"],
        NV: ["CA", "OR", "ID", "UT", "AZ"],
        NH: ["ME", "MA", "VT"],
        NJ: ["NY", "PA", "DE"],
        NM: ["AZ", "UT", "CO", "OK", "TX"],
        NY: ["PA", "NJ", "CT", "MA", "VT"],
        NC: ["VA", "TN", "GA", "SC"],
        ND: ["MT", "SD", "MN"],
        OH: ["MI", "PA", "WV", "KY", "IN"],
        OK: ["CO", "KS", "MO", "AR", "TX", "NM"],
        OR: ["WA", "ID", "NV", "CA"],
        PA: ["NY", "NJ", "DE", "MD", "WV", "OH"],
        RI: ["CT", "MA"],
        SC: ["NC", "GA"],
        SD: ["ND", "MN", "IA", "NE", "WY", "MT"],
        TN: ["KY", "VA", "NC", "GA", "AL", "MS", "AR", "MO"],
        TX: ["NM", "OK", "AR", "LA"],
        UT: ["ID", "WY", "CO", "AZ", "NV"],
        VT: ["NY", "MA", "NH"],
        VA: ["NC", "TN", "KY", "WV", "MD"],
        WA: ["ID", "OR"],
        WV: ["OH", "PA", "MD", "VA", "KY"],
        WI: ["MN", "IA", "IL", "MI"],
        WY: ["MT", "SD", "NE", "CO", "UT", "ID"]
    };


    // ==========================================
    // NEIGHBORLY
    // ==========================================

    const startingState = trip.startingState;

    if (startingState) {

        const startingStateNeighbors =
            adjacentStates[startingState] || [];

        const neighborCount =
            uniqueStateIds.filter(
                stateId =>
                    startingStateNeighbors.includes(stateId)
            ).length;

        if (neighborCount >= 3) {
            unlockAchievement(
                trip,
                "neighborly"
            );
        }
    }


    // ==========================================
    // BORDER PATROL
    // ==========================================

    const foundFiveBorderStates =
        uniqueStateIds.some(stateId => {

            const neighbors =
                adjacentStates[stateId] || [];

            const foundNeighbors =
                neighbors.filter(
                    neighbor =>
                        uniqueStateIds.includes(neighbor)
                );

            return foundNeighbors.length >= 5;
        });

    if (foundFiveBorderStates) {
        unlockAchievement(
            trip,
            "border-patrol"
        );
    }


    // ==========================================
    // CHAIN REACTION
    // ==========================================

    const hasChainReaction =
        uniqueStateIds.some(stateA => {

            const neighborsA =
                adjacentStates[stateA] || [];

            return neighborsA.some(stateB => {

                if (!uniqueStateIds.includes(stateB)) {
                    return false;
                }

                const neighborsB =
                    adjacentStates[stateB] || [];

                return neighborsB.some(
                    stateC =>
                        stateC !== stateA &&
                        uniqueStateIds.includes(stateC)
                );
            });
        });

    if (hasChainReaction) {
        unlockAchievement(
            trip,
            "chain-reaction"
        );
    }


    // ==========================================
    // CROSS-COUNTRY
    // ==========================================

    const regions = {
        midwest: [
            "IL", "IN", "IA", "KS", "MI", "MN",
            "MO", "NE", "ND", "OH", "SD", "WI"
        ],

        south: [
            "AL", "AR", "DE", "FL", "GA", "KY",
            "LA", "MD", "MS", "NC", "OK", "SC",
            "TN", "TX", "VA", "WV"
        ],

        west: [
            "AK", "AZ", "CA", "CO", "HI", "ID",
            "MT", "NV", "NM", "OR", "UT", "WA", "WY"
        ],

        northeast: [
            "CT", "ME", "MA", "NH", "NJ", "NY",
            "PA", "RI", "VT"
        ]
    };

    const regionCount = Object.values(regions).filter(
        regionStates =>
            uniqueStateIds.some(
                stateId =>
                    regionStates.includes(stateId)
            )
    ).length;

    if (regionCount >= 3) {
        unlockAchievement(
            trip,
            "cross-country"
        );
    }
}

function checkSpecialGeographyLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const uniqueStateIds = [
        ...new Set(
            foundStates
                .map(entry => entry.stateId)
                .filter(stateId => stateId !== "DC")
        )
    ];


    // ==========================================
    // FOUR CORNERS
    // ==========================================

    const fourCornersStates = [
        "AZ",
        "CO",
        "NM",
        "UT"
    ];

    const hasAllFourCorners =
        fourCornersStates.every(
            stateId =>
                uniqueStateIds.includes(stateId)
        );

    if (hasAllFourCorners) {
        unlockAchievement(
            trip,
            "four-corners"
        );
    }
}

function checkAlphabeticalLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const uniqueStateIds = [
        ...new Set(
            foundStates
                .map(entry => entry.stateId)
                .filter(stateId => stateId !== "DC")
        )
    ];

    const foundStateNames = uniqueStateIds
        .map(stateId =>
            usStates.find(
                state => state.id === stateId
            )
        )
        .filter(Boolean)
        .map(state => state.name);


    // ==========================================
    // A-TEAM
    // ==========================================

    const aTeamStates = [
        "AL",
        "AK",
        "AZ",
        "AR"
    ];

    const hasATeam =
        aTeamStates.every(
            stateId =>
                uniqueStateIds.includes(stateId)
        );

    if (hasATeam) {
        unlockAchievement(
            trip,
            "a-team"
        );
    }


    // ==========================================
    // M-M-M-M-M
    // ==========================================

    const mStates = [
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT"
    ];

    const mStateCount = uniqueStateIds.filter(
        stateId =>
            mStates.includes(stateId)
    ).length;

    if (mStateCount >= 5) {
        unlockAchievement(
            trip,
            "m-m-m-m-m"
        );
    }


    // ==========================================
    // DOUBLE TROUBLE
    // ==========================================

    const startingLetters = new Set();

    foundStateNames.forEach(name => {
        startingLetters.add(
            name.charAt(0).toUpperCase()
        );
    });

    if (
        startingLetters.size <
        uniqueStateIds.length
    ) {
        unlockAchievement(
            trip,
            "double-trouble"
        );
    }


    // ==========================================
    // TRIPLE LETTER
    // ==========================================

    const letterCounts = {};

    foundStateNames.forEach(name => {

        const letter =
            name.charAt(0).toUpperCase();

        if (!letterCounts[letter]) {
            letterCounts[letter] = 0;
        }

        letterCounts[letter]++;
    });

    const hasTripleLetter =
        Object.values(letterCounts).some(
            count => count >= 3
        );

    if (hasTripleLetter) {
        unlockAchievement(
            trip,
            "triple-letter"
        );
    }


    // ==========================================
    // ALPHABET SOUP
    // ==========================================

    if (startingLetters.size >= 10) {
        unlockAchievement(
            trip,
            "alphabet-soup"
        );
    }


    // ==========================================
    // ALPHABET EXPLORER
    // ==========================================

    if (startingLetters.size >= 15) {
        unlockAchievement(
            trip,
            "alphabet-explorer"
        );
    }


    // ==========================================
    // BOOKENDS
    // ==========================================

    const hasAState =
        startingLetters.has("A");

    const hasWState =
        startingLetters.has("W");

    if (hasAState && hasWState) {
        unlockAchievement(
            trip,
            "bookends"
        );
    }


    // ==========================================
    // MIDDLE OF THE ALPHABET
    // ==========================================

    const hasMState =
        startingLetters.has("M");

    const hasNState =
        startingLetters.has("N");

    const hasOState =
        startingLetters.has("O");

    if (
        hasMState &&
        hasNState &&
        hasOState
    ) {
        unlockAchievement(
            trip,
            "middle-of-the-alphabet"
        );
    }
}

function checkTimingLicensePlateAchievements(session) {
    const trip = appData.trips.find(
        trip => trip.id === session.tripId
    );

    if (!trip) {
        return;
    }

    const foundStates = session.data.foundStates || [];

    const uniqueStates = foundStates.filter(
        entry => entry.stateId !== "DC"
    );


    // ==========================================
    // TIMESTAMP HELPERS
    // ==========================================

    const timedStates = uniqueStates
        .filter(entry => entry.foundAt)
        .map(entry => ({
            stateId: entry.stateId,
            date: new Date(entry.foundAt)
        }))
        .filter(entry =>
            !isNaN(entry.date.getTime())
        );


    // ==========================================
    // EARLY BIRD
    // ==========================================

    const earlyBirdStates = timedStates.filter(
        entry => {
            const hour = entry.date.getHours();
            return hour < 12;
        }
    );

    const earlyBirdUniqueStates = new Set(
        earlyBirdStates.map(
            entry => entry.stateId
        )
    );

    if (earlyBirdUniqueStates.size >= 3) {
        unlockAchievement(
            trip,
            "early-bird"
        );
    }


    // ==========================================
    // FIRST FIND
    // ==========================================

    const hasFirstFind = timedStates.some(
        entry => entry.date.getHours() < 9
    );

    if (hasFirstFind) {
        unlockAchievement(
            trip,
            "first-find"
        );
    }


    // ==========================================
    // LUNCH BREAK
    // ==========================================

    const hasLunchBreak = timedStates.some(
        entry => {

            const hour = entry.date.getHours();

            return hour >= 12 && hour < 13;
        }
    );

    if (hasLunchBreak) {
        unlockAchievement(
            trip,
            "lunch-break"
        );
    }


    // ==========================================
    // NIGHT OWL
    // ==========================================

    const nightStates = timedStates.filter(
        entry => entry.date.getHours() >= 18
    );

    const nightUniqueStates = new Set(
        nightStates.map(
            entry => entry.stateId
        )
    );

    if (nightUniqueStates.size >= 3) {
        unlockAchievement(
            trip,
            "night-owl"
        );
    }


    // ==========================================
    // AFTER HOURS
    // ==========================================

    const hasAfterHours = timedStates.some(
        entry => entry.date.getHours() >= 21
    );

    if (hasAfterHours) {
        unlockAchievement(
            trip,
            "after-hours"
        );
    }


    // ==========================================
    // RAPID FIRE
    // ==========================================

    const sortedStates = [...timedStates].sort(
        (a, b) =>
            a.date.getTime() -
            b.date.getTime()
    );

    let rapidFireUnlocked = false;

    for (
        let i = 0;
        i < sortedStates.length;
        i++
    ) {

        const windowStart =
            sortedStates[i].date.getTime();

        const statesInWindow =
            sortedStates.filter(entry => {

                const difference =
                    entry.date.getTime() -
                    windowStart;

                return (
                    difference >= 0 &&
                    difference <= 60 * 60 * 1000
                );

            });

        const uniqueInWindow =
            new Set(
                statesInWindow.map(
                    entry => entry.stateId
                )
            );

        if (uniqueInWindow.size >= 3) {
            rapidFireUnlocked = true;
            break;
        }
    }

    if (rapidFireUnlocked) {
        unlockAchievement(
            trip,
            "rapid-fire"
        );
    }


    // ==========================================
    // SPEED COLLECTOR
    // ==========================================

    let speedCollectorUnlocked = false;

    for (
        let i = 0;
        i < sortedStates.length;
        i++
    ) {

        const windowStart =
            sortedStates[i].date.getTime();

        const statesInWindow =
            sortedStates.filter(entry => {

                const difference =
                    entry.date.getTime() -
                    windowStart;

                return (
                    difference >= 0 &&
                    difference <= 2 * 60 * 60 * 1000
                );

            });

        const uniqueInWindow =
            new Set(
                statesInWindow.map(
                    entry => entry.stateId
                )
            );

        if (uniqueInWindow.size >= 5) {
            speedCollectorUnlocked = true;
            break;
        }
    }

    if (speedCollectorUnlocked) {
        unlockAchievement(
            trip,
            "speed-collector"
        );
    }
}
// =====================================================
// SCAVENGER HUNT ACHIEVEMENTS
// =====================================================

function checkBasicScavengerAchievements(session) {

    const currentTrip =
        appData.trips.find(
            trip => trip.id === session.tripId
        );

    if (!currentTrip) {
        return;
    }

    const items =
        session.data.items || [];

    const foundCount =
        items.filter(
            item => item.found
        ).length;

    // Three's a Charm
    if (foundCount >= 3) {
        unlockAchievement(
            currentTrip,
            "three-is-a-charm"
        );
    }

    // Sharp Eyes
    if (foundCount >= 10) {
        unlockAchievement(
            currentTrip,
            "sharp-eyes"
        );
    }

    // Halfway There
    if (
        items.length > 0 &&
        foundCount >= Math.ceil(items.length / 2)
    ) {
        unlockAchievement(
            currentTrip,
            "halfway-there"
        );
    }

    // Hunt Complete
    if (
        items.length > 0 &&
        foundCount === items.length
    ) {
        unlockAchievement(
            currentTrip,
            "hunt-complete"
        );
    }

    // Big Game Hunter
    if (
        items.length === 30 &&
        foundCount === items.length
    ) {
        unlockAchievement(
            currentTrip,
            "big-game-hunter"
        );
    }
}

// =====================================================
// SCAVENGER HUNT SPECIAL ACHIEVEMENTS
// =====================================================

function checkSpecialScavengerAchievements(session) {

    const currentTrip =
        appData.trips.find(
            trip => trip.id === session.tripId
        );

    if (!currentTrip) {
        return;
    }

    const items =
        session.data.items || [];

    // Category Collector
    const foundCategories =
        new Set();

    items
        .filter(item => item.found)
        .forEach(item => {

            (item.categories || [])
                .forEach(category => {
                    foundCategories.add(category);
                });

        });

    const huntCategories =
        new Set();

    items.forEach(item => {

        (item.categories || [])
            .forEach(category => {
                huntCategories.add(category);
            });

    });

    const hasAllCategories =
        [...huntCategories].every(
            category => foundCategories.has(category)
        );

    if (
        items.length > 0 &&
        hasAllCategories
    ) {
        unlockAchievement(
            currentTrip,
            "category-collector"
        );
    }

    // Perfect Hunt
    if (
        session.data.neverUnchecked === true &&
        items.length > 0 &&
        items.every(item => item.found)
    ) {
        unlockAchievement(
            currentTrip,
            "perfect-hunt"
        );
    }
}
// =====================================================
// SCAVENGER HUNT SESSION ACHIEVEMENTS
// =====================================================

function checkScavengerSessionAchievements(session) {

    const currentTrip =
        appData.trips.find(
            trip => trip.id === session.tripId
        );

    if (!currentTrip) {
        return;
    }

    const sessions =
        currentTrip.gameSessions || [];

    const completedHunts =
        sessions.filter(
            session =>
                session.gameId === "scavenger-hunt" &&
                session.status === "completed"
        );

    // Second Hunt
    if (completedHunts.length >= 2) {
        unlockAchievement(
            currentTrip,
            "second-hunt"
        );
    }

    // Hat Trick
    if (completedHunts.length >= 3) {
        unlockAchievement(
            currentTrip,
            "hat-trick"
        );
    }
}
// ==================================================
// 13. MORE
// ==================================================
function renderPlayersPage() {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    mainContent.innerHTML = `
        <section class="players-page">

    <button
        type="button"
        id="back-to-more-button"
        class="back-button"
    >
        ← BACK TO MORE
    </button>

    <h1>Players</h1>

            ${currentTrip
            ? `
                        <section class="current-trip-players">

                            <h2>Current Trip</h2>

                     <div class="current-player-list">
    ${currentTrip.players.map(playerId => `
        <div class="player-row">

            <span>
                ${getPlayerNames([playerId])}
            </span>

            <button
                class="remove-current-player-button"
                data-player-id="${playerId}"
            >
                REMOVE FROM TRIP
            </button>

        </div>
    `).join("")}
</div>



                            <button id="add-current-player-button">
                                ADD PLAYER TO CURRENT TRIP
                            </button>

                        </section>
                    `
            : ""
        }

            <section class="available-players">

                <h2>Available Players</h2>

                <div id="available-player-list">
                    ${appData.players.map(player => `
                        <div class="player-row">

                            <span>${player.name}</span>

                            <button
                                class="edit-player-button"
                                data-player-id="${player.id}"
                            >
                                EDIT
                            </button>

                            <button
                                class="remove-player-button"
                                data-player-id="${player.id}"
                            >
                                REMOVE
                            </button>

                        </div>
                    `).join("")}
                </div>

                <button id="add-player-button">
                    ADD PLAYER
                </button>

            </section>

        </section>
    `;

    document
        .getElementById("add-player-button")
        .addEventListener("click", addPlayer);

    document
        .querySelectorAll(".edit-player-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                editPlayer(button.dataset.playerId);
            });
        });
    document
        .getElementById("back-to-more-button")
        .addEventListener("click", () => {
            renderMorePage();
        });
    document
        .querySelectorAll(".remove-current-player-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                removePlayerFromCurrentTrip(
                    button.dataset.playerId
                );
            });
        });
    document
        .querySelectorAll(".remove-player-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                removePlayer(button.dataset.playerId);
            });
        });

    const addCurrentPlayerButton =
        document.getElementById("add-current-player-button");

    if (addCurrentPlayerButton) {
        addCurrentPlayerButton.addEventListener(
            "click",
            addPlayerToCurrentTrip
        );
    }
}

function addPlayerToCurrentTrip() {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    if (!currentTrip) {
        return;
    }

    const availablePlayers = appData.players.filter(
        player => !currentTrip.players.includes(player.id)
    );

    if (availablePlayers.length === 0) {
        alert("All available players are already on the current trip.");
        return;
    }

    const playerOptions = availablePlayers.map(player => `
        <label class="player-select-option">
            <input
                type="radio"
                name="current-trip-player"
                value="${player.id}"
            >
            <span>${player.name}</span>
        </label>
    `).join("");

    const popup = document.createElement("div");

    popup.className = "player-popup";

    popup.innerHTML = `
        <div class="player-popup-content">

            <h2>Add Player to Current Trip</h2>

            <div class="player-select-list">
                ${playerOptions}
            </div>

            <div class="player-popup-buttons">

                <button id="cancel-player-popup">
                    CANCEL
                </button>

                <button id="confirm-player-popup">
                    ADD PLAYER
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(popup);

    document
        .getElementById("cancel-player-popup")
        .addEventListener("click", () => {
            popup.remove();
        });

    document
        .getElementById("confirm-player-popup")
        .addEventListener("click", () => {

            const selectedPlayer =
                popup.querySelector(
                    'input[name="current-trip-player"]:checked'
                );

            if (!selectedPlayer) {
                alert("Please select a player.");
                return;
            }

            const player =
                appData.players.find(
                    player =>
                        player.id === selectedPlayer.value
                );

            if (!player) {
                popup.remove();
                return;
            }

            const confirmed = confirm(
                `Add ${player.name} to the current trip?\n\n` +
                `${player.name} will be added to this trip's player list.`
            );

            if (!confirmed) {
                return;
            }

            currentTrip.players.push(player.id);

            saveAppData();

            popup.remove();

            renderPlayersPage();
        });
}

function removePlayerFromCurrentTrip(playerId) {
    const currentTrip = appData.trips.find(
        trip => trip.status === "current"
    );

    if (!currentTrip) {
        return;
    }

    const player = appData.players.find(
        player => player.id === playerId
    );

    if (!player) {
        return;
    }

    if (currentTrip.players.length === 1) {
        alert(
            "A trip must have at least one player."
        );
        return;
    }

    const confirmed = confirm(
        `Remove ${player.name} from the current trip?\n\n` +
        `${player.name} will remain available for future trips.`
    );

    if (!confirmed) {
        return;
    }

    currentTrip.players =
        currentTrip.players.filter(
            id => id !== playerId
        );

    saveAppData();
    renderPlayersPage();
}

function renderAboutPage() {
    mainContent.innerHTML = `
        <section class="about-page">

            <button
                type="button"
                id="back-to-more-button"
                class="back-button"
            >
                ← BACK TO MORE
            </button>

            <h1>About</h1>

            <div class="about-content">

                <div class="about-icon">
                    🛣️
                </div>

                <h2>Road Trip Adventures</h2>

                <p class="about-tagline">
                    Road trips are better with games.
                </p>

                <p>
                    A family road-trip game app for playing together,
                    collecting license plates, completing scavenger hunts,
                    and earning achievements along the way.
                </p>

                <p class="about-version">
                    Version 1.0
                </p>

                <p class="about-footer">
                    Made for our adventures
                </p>

            </div>

        </section>
    `;

    document
        .getElementById("back-to-more-button")
        .addEventListener("click", () => {
            renderMorePage();
        });
}

function renderSettingsPage() {
    mainContent.innerHTML = `
        <section class="settings-page">

    <button
        type="button"
        id="back-to-more-button"
        class="back-button"
    >
        ← BACK TO MORE
    </button>

    <h1>Settings</h1>

            <div class="settings-menu">

                <button
                    class="settings-menu-button"
                    id="data-button"
                >
                    <span class="settings-menu-icon">💾</span>
                    <span>Data</span>
                </button>

            </div>

        </section>
    `;

    document
        .getElementById("data-button")
        .addEventListener("click", () => {
            renderDataPage();
        });
    document
        .getElementById("back-to-more-button")
        .addEventListener("click", () => {
            renderMorePage();
        });
}

function renderDataPage() {
    mainContent.innerHTML = `
       <section class="data-page">

    <button
        type="button"
        id="back-to-more-button"
        class="back-button"
    >
        ← BACK TO MORE
    </button>

    <h1>Data</h1>

            <div class="data-section">

                <h2>Import / Export</h2>

                <p>
                    Save a backup of your Road Trip Adventures data
                    or restore a previous backup.
                </p>

                <div class="data-buttons">

                    <button id="export-data-button">
                        EXPORT DATA
                    </button>

                    <button id="import-data-button">
                        IMPORT DATA
                    </button>

                </div>

                <input
                    type="file"
                    id="import-data-file"
                    accept=".json,application/json"
                    hidden
                >

            </div>

            <div class="data-section data-danger-section">

                <h2>Reset App Data</h2>

                <p>
                    Permanently delete all trips, players,
                    game progress, and achievements from this device.
                </p>

                <button id="reset-data-button">
                    RESET APP DATA
                </button>

            </div>

        </section>
    `;

    document
        .getElementById("export-data-button")
        .addEventListener("click", exportAppData);

    document
        .getElementById("import-data-button")
        .addEventListener("click", () => {
            document
                .getElementById("import-data-file")
                .click();
        });
    document
        .getElementById("back-to-more-button")
        .addEventListener("click", () => {
            renderMorePage();
        });
    document
        .getElementById("import-data-file")
        .addEventListener("change", importAppData);

    document
        .getElementById("reset-data-button")
        .addEventListener("click", resetAppData);
}

function resetAppData() {
    const firstConfirmation = confirm(
        "Reset all Road Trip Adventures data?\n\n" +
        "This will delete all trips, player changes, " +
        "game progress, and achievements."
    );

    if (!firstConfirmation) {
        return;
    }

    const secondConfirmation = confirm(
        "Are you absolutely sure?\n\n" +
        "This cannot be undone."
    );

    if (!secondConfirmation) {
        return;
    }

    localStorage.removeItem(STORAGE_KEY);

    location.reload();
}

function exportAppData() {
    const data = JSON.stringify(
        appData,
        null,
        2
    );

    const blob = new Blob(
        [data],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "RoadTripAdventures-backup.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
}

function importAppData(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {

        try {
            const importedData =
                JSON.parse(reader.result);

            if (
                !importedData ||
                !Array.isArray(importedData.players) ||
                !Array.isArray(importedData.trips) ||
                typeof importedData.settings !== "object"
            ) {
                throw new Error("Invalid backup file.");
            }

            const confirmed = confirm(
                "Import this backup?\n\n" +
                `Players: ${importedData.players.length}\n` +
                `Trips: ${importedData.trips.length}\n\n` +
                "This will replace the current data on this device."
            );

            if (!confirmed) {
                event.target.value = "";
                return;
            }

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(importedData)
            );

            alert(
                "Backup imported successfully."
            );

            location.reload();

        } catch (error) {

            alert(
                "This file could not be imported.\n\n" +
                "Please choose a Road Trip Adventures backup file."
            );

        } finally {
            event.target.value = "";
        }
    };

    reader.readAsText(file);
}