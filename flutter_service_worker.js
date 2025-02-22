'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "49c926e798f868d3415e4fd690423d9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dc5728f3f086689f08bcef27d16fa821",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6ff31d4d8283c07e890ac3af8861f6f",
".git/logs/refs/heads/main": "3556427e59de9797804fd0ae1cc36404",
".git/logs/refs/remotes/origin/main": "1308581f81bec8a2003dfc0cd3c373f5",
".git/objects/04/73dcb62cf16937652c36366d8c63842e59157a": "56d8f33aa138ce5992e02e0dfd52ba0e",
".git/objects/09/93b5d7e10fd426d8ed7a6147bdd8611990b767": "8bc3f69fed81fd6c6a656984841cefd0",
".git/objects/0f/27191723dd2e6bc3085419071efc6bccb88348": "55c00125212f1c5247f5cae7f835354d",
".git/objects/0f/7e328e36b748076804d9e554ab46f79fbd164e": "fcd24cf5ef564655ff52ec78bb2d281f",
".git/objects/14/5550eb5e99de2615f079a3ee00eaf0e40d7f29": "723091c88e24d6b7f6fc3b1c10182309",
".git/objects/18/dc3efee48f2c10312a78f11dc49d5edc0a3706": "1ba93a2ec4ec4c208b15165cb3065faa",
".git/objects/1c/61b5197a2aedf246d59c56c9444e85a32994f8": "8d5024bfb19822db634ecdc571ecc98e",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/20/aaee9e08c96a5cc0255976947fea4eccfe8c34": "e4c23d391379fc9fd9c8520c86da5ff6",
".git/objects/2a/64f136641cf8b1ea1f6fe47e74399c78482ed7": "4496cffea9552bfd7d42cd97ec084b93",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/b06e29d64bc19461f11a086b89a588452b4c4e": "8b7b4bfe7da49889715a2ff665f36906",
".git/objects/39/6c37f6c202597d5e5757e6284b9837fd4aaff4": "11c01cfbbf1302d9170ff942f3cccf5f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/32dc0b73912e185d2e7fd2e2f2c5d229d0c0bf": "08f54272505a1bb05ef19bd28d71d961",
".git/objects/4a/242b7777f8c0b3a3e9dfa80bde45c7ecda0b13": "bb1380d098d08691b8b9619d09f0ffe7",
".git/objects/4a/a4d98a65281896ba96f572e27874ad78b1cd17": "58d73e724d09406a1792850627c83672",
".git/objects/4b/c38060f4151141bb96522f565a838500fdbcd6": "dc0ee7c1bd22f108f31ab31e8d0e5f7e",
".git/objects/4e/12c2b9a634cbcf9971be63f6bf1abebe5a375c": "4a774863d2412b98ebe3dc55fd4786b9",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/34de2c27319242bf764217007a50dde9f95285": "fb9f262277d9c01339e0ac94cde332f8",
".git/objects/5a/dc326ea991d664ef28358b2592fdef6825a611": "5b6aca28846abe71d20a3cb52de96dda",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/2ab5f1d75ee3531d161d57fd639ccadca90fb4": "0d0b6b5206f2bcec803d5a4c9d5b2150",
".git/objects/61/5ae2d891a10c80bdb9bb8d5c60e06236cc884e": "0492f9a533abdb89fb13a148774604fb",
".git/objects/64/ba88402fa781847981ce7363652c5f02a90722": "1a770e0b471a0a417538f777c8cafa8b",
".git/objects/6c/7f534efd4f799bd90a9a37e5d6d06b680e96cb": "cb79b3682ca23c68489a93b18eb43ed8",
".git/objects/6d/af796e93701798a2a2b7da5bbcac93a8a2c2dc": "d7fa40814e34f42b1488af8a792bb5cd",
".git/objects/71/8fe2fcf3f3e2f59e4a2b796353b76b88723171": "efbaf78f775613cce348f05df786397e",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/77/be2284ffa9b88140cc6b938fbdf93cce9f0af7": "baba15ef629b5e6ee34173206ff9cc1c",
".git/objects/81/86504220ad5fb354ea560c6ab4c5c8429cf383": "852ef789f9102bc11aa54693aa593942",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/44d37fd94e9bba3cac267092f5222d06b1c4f7": "75db666e63e4309815d8b455b074ee5f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0a8c95e60e9e576d7aeca251332dc606df4990": "9a60acff34c50c83a864d322b0852f1b",
".git/objects/8d/cb1d72d1165101b9393b145878a98dceb8be24": "37b10dddfef3cb2179ead2fb1e33d2c3",
".git/objects/8d/fff031bf235aca628064955faa743c384aef47": "e07671c376f34246c08cc202b9dce6c9",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/90/f02a383f93e5da149d2fde90bc589f9136db33": "b293b108eecee1522bd0d06ebad35d18",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/07d0fefb40d101d90685eed4f48e7a13628a07": "59f5b6cfec20e04e4369045a21f25d93",
".git/objects/96/0066434dd7818443afec9ff6d3511c39e3f51e": "1729cd03fae4be7f79e43a911fed34c2",
".git/objects/99/926c1550f73cec7d94f0197884eebd555e9d8c": "32fdfa7dadf215a106002ac657b8f3d3",
".git/objects/9f/0c7f3e34792d20576177740ea0f0f446f421f6": "feaa339963dc93e1c01e3f0c94f7a1bf",
".git/objects/9f/4b60f79412a02ae8b1e04055f3b0b9edd676aa": "33106c0bf5b96ae690bc0d6f8f169e64",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/8491e545dd4282f107ab653d3fe48f66946f32": "3ba57abb192610b0b17252e918e1eb1b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/2131cbedbfef1a9e927dcd86ae03c8e13030eb": "16642f026e28e26e93d207256554ad8d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ce91963653a2cd511eb0a2ee66b0c72096dc72": "03df922629a43d32dc63fcb0f257f225",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/7d2bdb87fafaceb707447f96a83670df36a8cd": "d18c9365976e04274c898db71e85fa5a",
".git/objects/c1/ec68858a4eae2ca8b5287710d1b8c8bfa2ac08": "ef2521cfc5e0d2bbfb9ff1d9a728fba9",
".git/objects/c2/a3758a6bada6753e31af03fc75394e1fda7088": "26e0080447652568607286836f5f44c7",
".git/objects/c3/5e6eec5c6d690fd61adece75c4346bbb751f24": "832a350e9c081a87f559019ef39aec1c",
".git/objects/c4/d437351705622020c4d79dc30691b8beb4482b": "095b76af05a0f5b14cc56d8c43669b05",
".git/objects/c8/785cbd4f051b342d0865c8573d28339a4fd964": "8f797826be053e41fb13544292c5b69d",
".git/objects/d3/e758bdbc86f48fe79d90ad10439d31be135d9f": "df6599dd4ae9bb56ae22b46566295792",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e6e2755a2126cd0da4427c1d85a9497ab459f2": "4a8706f53cee1132b863a503a1fb3f6a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/349bc3d2b907ae94cac135553007b30f1d37c8": "21eaa9a4e9e27e9d20522cf0dfae2655",
".git/objects/e7/2ec7a1795d86515930069638a3f18e47180f01": "e71eba30c9d62e1d65d93cb8bdb66b8e",
".git/objects/e7/6e823a3ac98df3044ab3af668b03b6a062c324": "f1bccf352c5d481149bebba32bcf4cdc",
".git/objects/e8/4a032db7608139ae8ea620a76a685f052c4639": "3b2aadc225519962a4d0575469c147e5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/667dd8adcea8f700d89cc92261934d28b01db7": "2b6293d4d2a526a6187991cf16b2b96b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/1941b0253b1247b7c3a2d7899a91c083569a8e": "f4cf7a72a9fcbabe5e3ad12474c170d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c1d97f1e85436fc2e948ac8c2ac7134d294e0d": "0d7e1f5072f0ea6560b79942d24f398c",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/9eb0c75e7d7ab77a93b446cd63a4e93a3f75fb": "83eb1e894bd9a3567f68e9e85b395e67",
".git/refs/heads/main": "d578701555196c7ed268ec5502d4380c",
".git/refs/remotes/origin/main": "d578701555196c7ed268ec5502d4380c",
"assets/AssetManifest.bin": "2d4fd3d789a10cc4201a58ddc07b0e50",
"assets/AssetManifest.bin.json": "53b6ac4b1f742954fbe7a8aa1d919d17",
"assets/AssetManifest.json": "f765455f7d2f2ae3a1ae5332e8678225",
"assets/assets/accommodation/apartment.jpg": "b8795e996d01bd3fa9dc1374842d153b",
"assets/assets/accommodation/boys_pg.png": "96964d577d21c49d990f7aff7559c139",
"assets/assets/accommodation/flat.png": "9e881df0ec099f897ca944817758a57d",
"assets/assets/accommodation/girls_pg.png": "4e9155220b084b812679c9d78a5604ba",
"assets/assets/accommodation/room.png": "8b74b481de92247b482de051a21b8bad",
"assets/assets/all_users_notified.png": "f5bba56141191d9e2550bbe3ca53f74f",
"assets/assets/create_new_acc_post.png": "32c52266d0c668e77e0ec7923d52c821",
"assets/assets/fbp.png": "bee47cfeeaebc098f4afa0a8d9a18a45",
"assets/assets/google.svg": "fa5cce484955dba728bf20012b9dd775",
"assets/assets/instagram.svg": "3a196343bff9b40144e00e9e5b56cd05",
"assets/assets/logo.svg": "8c45e2821a9e66177767f6b7e44d26c4",
"assets/assets/no_internet.png": "5a07acc6e769c97861e722539ed5ba16",
"assets/assets/youtube.svg": "ab494bc64f4d7146001da3b0dec78a4e",
"assets/FontManifest.json": "63a7353e1cfe00ad096dfb9fc8f27d5e",
"assets/fonts/MaterialIcons-Regular.otf": "21e7ff3aa82429d5cde8c53360b1ef5b",
"assets/fonts/Quicksand-Medium.ttf": "890d9ed927bb7f0c6b9eed04f9c329e5",
"assets/NOTICES": "673a35d11b619c979be5d276e13df456",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "0db52aaf5877065eddfe0a06c633c660",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "41de3a81387fdfe30a4676478aad5328",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1eee4b48735ed9dcadf4f6b2c2e62ab9",
"/": "1eee4b48735ed9dcadf4f6b2c2e62ab9",
"main.dart.js": "827a411d7344c16556d6c6fb588ba9f3",
"manifest.json": "92f23f0208eb95d2eb70014d0a62414f",
"README.md": "73051db3447b88c58ba436f407631e1a",
"version.json": "a27dc660089695690ed6514ded8af296"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
