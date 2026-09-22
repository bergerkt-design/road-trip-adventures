const CACHE_NAME = "road-trip-adventures-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./assets/icon-192.png",
    "./assets/icon-512.png",

    // Main artwork
    "./home-road-landscape.png",
    "./Great-Lakes.svg",
    "./us_map.svg",

    // Games page artwork
    "./assets/game-page-landscape1.png",
    "./assets/game-page-landscape2.png",

    // License plates
    "./assets/plates/Alabama.avif",
    "./assets/plates/AK.png",
    "./assets/plates/AZ.jpg",
    "./assets/plates/AR.jpg",
    "./assets/plates/CA.gif",
    "./assets/plates/CO.jpg",
    "./assets/plates/CT.jpg",
    "./assets/plates/DE.jpg",
    "./assets/plates/FL.jpg",
    "./assets/plates/GA.jpg",
    "./assets/plates/HI.png",
    "./assets/plates/ID.jpg",
    "./assets/plates/IL.gif",
    "./assets/plates/IN.jpg",
    "./assets/plates/IA.jpeg",
    "./assets/plates/KS.png",
    "./assets/plates/KY.jpg",
    "./assets/plates/LA.jpg",
    "./assets/plates/ME.png",
    "./assets/plates/MD.jpg",
    "./assets/plates/MA.jpg",
    "./assets/plates/MI.png",
    "./assets/plates/MN.jpg",
    "./assets/plates/MS.png",
    "./assets/plates/MO.jpg",
    "./assets/plates/MT.jpg",
    "./assets/plates/NE.jpg",
    "./assets/plates/NV.jpg",
    "./assets/plates/NH.jpg",
    "./assets/plates/NJ.jpg",
    "./assets/plates/NM.jpg",
    "./assets/plates/NY.jpg",
    "./assets/plates/NC.png",
    "./assets/plates/ND.jpg",
    "./assets/plates/OH.jpg",
    "./assets/plates/OK.jpg",
    "./assets/plates/OR.jpg",
    "./assets/plates/PA.png",
    "./assets/plates/RI.jpg",
    "./assets/plates/SC.jpg",
    "./assets/plates/SD.jpg",
    "./assets/plates/TN.jpg",
    "./assets/plates/TX.jpg",
    "./assets/plates/UT.jpg",
    "./assets/plates/VT.jpg",
    "./assets/plates/VA.png",
    "./assets/plates/WA.png",
    "./assets/plates/WV.jpg",
    "./assets/plates/WI.jpg",
    "./assets/plates/WY.jpg",

    // Washington, D.C.
    "./assets/plates/DC.jpg",

    // Canada
    "./assets/plates/Alberta.jpg",
    "./assets/plates/BritishColumbia.jpg",
    "./assets/plates/Manitoba.jpg",
    "./assets/plates/Newbrunswick.jpg",
    "./assets/plates/NewfoundlandandLabrador.jpg",
    "./assets/plates/NovaScotia.jpg",
    "./assets/plates/NWTerritories.jpg",
    "./assets/plates/Nunavut.jpg",
    "./assets/plates/Ontario.jpg",
    "./assets/plates/PrinceEdwardIsland.jpg",
    "./assets/plates/Quebec.jpg",
    "./assets/plates/Saskatchewan.jpg",
    "./assets/plates/Yukon.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_FILES))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        )
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                return cachedResponse || fetch(event.request);
            })
    );
});