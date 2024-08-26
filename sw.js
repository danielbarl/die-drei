const CACHE_NAME = 'die-drei-cache-v1';
const urlsToCache = [
    '/die-drei/',
    '/die-drei/index.html',
    '/die-drei/site.webmanifest',
    '/die-drei/favicon.ico',
    '/die-drei/assets/css/main.css',
    '/die-drei/assets/css/normalize.css',
    '/die-drei/assets/js/episodeGenerator.js',
    '/die-drei/assets/js/episodes.json',
    // Bilder
    '/die-drei/assets/images/image_001.webp',
    '/die-drei/assets/images/image_002.webp',
    '/die-drei/assets/images/image_003.webp',
    '/die-drei/assets/images/image_004.webp',
    '/die-drei/assets/images/image_005.webp',
    '/die-drei/assets/images/image_006.webp',
    '/die-drei/assets/images/image_007.webp',
    '/die-drei/assets/images/image_008.webp',
    '/die-drei/assets/images/image_009.webp',
    '/die-drei/assets/images/image_010.webp',
    '/die-drei/assets/images/image_011.webp',
    '/die-drei/assets/images/image_012.webp',
    '/die-drei/assets/images/image_013.webp',
    '/die-drei/assets/images/image_014.webp',
    '/die-drei/assets/images/image_015.webp',
    '/die-drei/assets/images/image_016.webp',
    '/die-drei/assets/images/image_017.webp',
    '/die-drei/assets/images/image_018.webp',
    '/die-drei/assets/images/image_019.webp',
    '/die-drei/assets/images/image_020.webp',
    '/die-drei/assets/images/image_021.webp',
    '/die-drei/assets/images/image_022.webp',
    '/die-drei/assets/images/image_023.webp',
    '/die-drei/assets/images/image_024.webp',
    '/die-drei/assets/images/image_025.webp',
    '/die-drei/assets/images/image_026.webp',
    '/die-drei/assets/images/image_027.webp',
    '/die-drei/assets/images/image_028.webp',
    '/die-drei/assets/images/image_029.webp',
    '/die-drei/assets/images/image_030.webp',
    '/die-drei/assets/images/image_031.webp',
    '/die-drei/assets/images/image_032.webp',
    '/die-drei/assets/images/image_033.webp',
    '/die-drei/assets/images/image_034.webp',
    '/die-drei/assets/images/image_035.webp',
    '/die-drei/assets/images/image_036.webp',
    '/die-drei/assets/images/image_037.webp',
    '/die-drei/assets/images/image_038.webp',
    '/die-drei/assets/images/image_039.webp',
    '/die-drei/assets/images/image_040.webp',
    '/die-drei/assets/images/image_041.webp',
    '/die-drei/assets/images/image_042.webp',
    '/die-drei/assets/images/image_043.webp',
    '/die-drei/assets/images/image_044.webp',
    '/die-drei/assets/images/image_045.webp',
    '/die-drei/assets/images/image_046.webp',
    '/die-drei/assets/images/image_047.webp',
    '/die-drei/assets/images/image_048.webp',
    '/die-drei/assets/images/image_049.webp',
    '/die-drei/assets/images/image_050.webp',
    '/die-drei/assets/images/image_051.webp',
    '/die-drei/assets/images/image_052.webp',
    '/die-drei/assets/images/image_053.webp',
    '/die-drei/assets/images/image_054.webp',
    '/die-drei/assets/images/image_055.webp',
    '/die-drei/assets/images/image_056.webp',
    '/die-drei/assets/images/image_057.webp',
    '/die-drei/assets/images/image_058.webp',
    '/die-drei/assets/images/image_059.webp',
    '/die-drei/assets/images/image_060.webp',
    '/die-drei/assets/images/image_061.webp',
    '/die-drei/assets/images/image_062.webp',
    '/die-drei/assets/images/image_063.webp',
    '/die-drei/assets/images/image_064.webp',
    '/die-drei/assets/images/image_065.webp',
    '/die-drei/assets/images/image_066.webp',
    '/die-drei/assets/images/image_067.webp',
    '/die-drei/assets/images/image_068.webp',
    '/die-drei/assets/images/image_069.webp',
    '/die-drei/assets/images/image_070.webp',
    '/die-drei/assets/images/image_071.webp',
    '/die-drei/assets/images/image_072.webp',
    '/die-drei/assets/images/image_073.webp',
    '/die-drei/assets/images/image_074.webp',
    '/die-drei/assets/images/image_075.webp',
    '/die-drei/assets/images/image_076.webp',
    '/die-drei/assets/images/image_077.webp',
    '/die-drei/assets/images/image_078.webp',
    '/die-drei/assets/images/image_079.webp',
    '/die-drei/assets/images/image_080.webp',
    '/die-drei/assets/images/image_081.webp',
    '/die-drei/assets/images/image_082.webp',
    '/die-drei/assets/images/image_083.webp',
    '/die-drei/assets/images/image_084.webp',
    '/die-drei/assets/images/image_085.webp',
    '/die-drei/assets/images/image_086.webp',
    '/die-drei/assets/images/image_087.webp',
    '/die-drei/assets/images/image_088.webp',
    '/die-drei/assets/images/image_089.webp',
    '/die-drei/assets/images/image_090.webp',
    '/die-drei/assets/images/image_091.webp',
    '/die-drei/assets/images/image_092.webp',
    '/die-drei/assets/images/image_093.webp',
    '/die-drei/assets/images/image_094.webp',
    '/die-drei/assets/images/image_095.webp',
    '/die-drei/assets/images/image_096.webp',
    '/die-drei/assets/images/image_097.webp',
    '/die-drei/assets/images/image_098.webp',
    '/die-drei/assets/images/image_099.webp',
    '/die-drei/assets/images/image_100.webp',
    '/die-drei/assets/images/image_101.webp',
    '/die-drei/assets/images/image_102.webp',
    '/die-drei/assets/images/image_103.webp',
    '/die-drei/assets/images/image_104.webp',
    '/die-drei/assets/images/image_105.webp',
    '/die-drei/assets/images/image_106.webp',
    '/die-drei/assets/images/image_107.webp',
    '/die-drei/assets/images/image_108.webp',
    '/die-drei/assets/images/image_109.webp',
    '/die-drei/assets/images/image_110.webp',
    '/die-drei/assets/images/image_111.webp',
    '/die-drei/assets/images/image_112.webp',
    '/die-drei/assets/images/image_113.webp',
    '/die-drei/assets/images/image_114.webp',
    '/die-drei/assets/images/image_115.webp',
    '/die-drei/assets/images/image_116.webp',
    '/die-drei/assets/images/image_117.webp',
    '/die-drei/assets/images/image_118.webp',
    '/die-drei/assets/images/image_119.webp',
    '/die-drei/assets/images/image_120.webp',
    '/die-drei/assets/images/image_121.webp',
    '/die-drei/assets/images/image_122.webp',
    '/die-drei/assets/images/image_123.webp',
    '/die-drei/assets/images/image_124.webp',
    '/die-drei/assets/images/image_125.webp',
    '/die-drei/assets/images/image_126.webp',
    '/die-drei/assets/images/image_127.webp',
    '/die-drei/assets/images/image_128.webp',
    '/die-drei/assets/images/image_129.webp',
    '/die-drei/assets/images/image_130.webp',
    '/die-drei/assets/images/image_131.webp',
    '/die-drei/assets/images/image_132.webp',
    '/die-drei/assets/images/image_133.webp',
    '/die-drei/assets/images/image_134.webp',
    '/die-drei/assets/images/image_135.webp',
    '/die-drei/assets/images/image_136.webp',
    '/die-drei/assets/images/image_137.webp',
    '/die-drei/assets/images/image_138.webp',
    '/die-drei/assets/images/image_139.webp',
    '/die-drei/assets/images/image_140.webp',
    '/die-drei/assets/images/image_141.webp',
    '/die-drei/assets/images/image_142.webp',
    '/die-drei/assets/images/image_143.webp',
    '/die-drei/assets/images/image_144.webp',
    '/die-drei/assets/images/image_145.webp',
    '/die-drei/assets/images/image_146.webp',
    '/die-drei/assets/images/image_147.webp',
    '/die-drei/assets/images/image_148.webp',
    '/die-drei/assets/images/image_149.webp',
    '/die-drei/assets/images/image_150.webp',
    '/die-drei/assets/images/image_151.webp',
    '/die-drei/assets/images/image_152.webp',
    '/die-drei/assets/images/image_153.webp',
    '/die-drei/assets/images/image_154.webp',
    '/die-drei/assets/images/image_155.webp',
    '/die-drei/assets/images/image_156.webp',
    '/die-drei/assets/images/image_157.webp',
    '/die-drei/assets/images/image_158.webp',
    '/die-drei/assets/images/image_159.webp',
    '/die-drei/assets/images/image_160.webp',
    '/die-drei/assets/images/image_161.webp',
    '/die-drei/assets/images/image_162.webp',
    '/die-drei/assets/images/image_163.webp',
    '/die-drei/assets/images/image_164.webp',
    '/die-drei/assets/images/image_165.webp',
    '/die-drei/assets/images/image_166.webp',
    '/die-drei/assets/images/image_167.webp',
    '/die-drei/assets/images/image_168.webp',
    '/die-drei/assets/images/image_169.webp',
    '/die-drei/assets/images/image_170.webp',
    '/die-drei/assets/images/image_171.webp',
    '/die-drei/assets/images/image_172.webp',
    '/die-drei/assets/images/image_173.webp',
    '/die-drei/assets/images/image_174.webp',
    '/die-drei/assets/images/image_175.webp',
    '/die-drei/assets/images/image_176.webp',
    '/die-drei/assets/images/image_177.webp',
    '/die-drei/assets/images/image_178.webp',
    '/die-drei/assets/images/image_179.webp',
    '/die-drei/assets/images/image_180.webp',
    '/die-drei/assets/images/image_181.webp',
    '/die-drei/assets/images/image_182.webp',
    '/die-drei/assets/images/image_183.webp',
    '/die-drei/assets/images/image_184.webp',
    '/die-drei/assets/images/image_185.webp',
    '/die-drei/assets/images/image_186.webp',
    '/die-drei/assets/images/image_187.webp',
    '/die-drei/assets/images/image_188.webp',
    '/die-drei/assets/images/image_189.webp',
    '/die-drei/assets/images/image_190.webp',
    '/die-drei/assets/images/image_191.webp',
    '/die-drei/assets/images/image_192.webp',
    '/die-drei/assets/images/image_193.webp',
    '/die-drei/assets/images/image_194.webp',
    '/die-drei/assets/images/image_195.webp',
    '/die-drei/assets/images/image_196.webp',
    '/die-drei/assets/images/image_197.webp',
    '/die-drei/assets/images/image_198.webp',
    '/die-drei/assets/images/image_199.webp',
    '/die-drei/assets/images/image_200.webp',
    '/die-drei/assets/images/image_201.webp',
    '/die-drei/assets/images/image_202.webp',
    '/die-drei/assets/images/image_203.webp',
    '/die-drei/assets/images/image_204.webp',
    '/die-drei/assets/images/image_205.webp',
    '/die-drei/assets/images/image_206.webp',
    '/die-drei/assets/images/image_207.webp',
    '/die-drei/assets/images/image_208.webp',
    '/die-drei/assets/images/image_209.webp',
    '/die-drei/assets/images/image_210.webp',
    '/die-drei/assets/images/image_211.webp',
    '/die-drei/assets/images/image_212.webp',
    '/die-drei/assets/images/image_213.webp',
    '/die-drei/assets/images/image_214.webp',
    '/die-drei/assets/images/image_215.webp',
    '/die-drei/assets/images/image_217.webp',
    '/die-drei/assets/images/image_218.webp',
    '/die-drei/assets/images/image_219.webp',
    '/die-drei/assets/images/image_220.webp',
    '/die-drei/assets/images/image_221.webp',
    '/die-drei/assets/images/image_222.webp',
    '/die-drei/assets/images/image_223.webp',
    '/die-drei/assets/images/image_224.webp',
    '/die-drei/assets/images/image_225.webp',
    '/die-drei/assets/images/image_226.webp',
    '/die-drei/assets/images/image_227.webp',
    '/die-drei/assets/images/image_228.webp',
    '/die-drei/assets/images/image_229.webp',
    // Update this list with every new image
];

// Install event - caching resources
self.addEventListener('install', event => {
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching all: app shell and content');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serving cached resources when offline
self.addEventListener('fetch', event => {
    console.log(`[Service Worker] Fetched resource: ${event.request.url}`);
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        // Optionally cache the new resource
                        return caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, response.clone());
                                return response;
                            });
                    })
                    .catch(() => {
                        // Provide a fallback response if network and cache both fail
                        if (event.request.mode === 'navigate') {
                            return caches.match('/die-drei/index.html');
                        }
                    });
            })
    );
});

// Activate event - cleaning up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activate');
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
