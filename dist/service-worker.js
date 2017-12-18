/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","53005b3794cd47d12a9628e432edeb17"],["/about/changelog/index.html","6c41f43068497df6c94bea14d67e5eb5"],["/about/contributors/index.html","efab181fa74028619806177ec185924a"],["/about/faq/index.html","f11b6061814e5cc34315d79acd705b21"],["/about/governance/index.html","a4a37f2df0d21097a81db890753d4ec4"],["/about/index.html","c75fd758d48bb57e80070cb166aed99f"],["/components/accordion/accordion.css","e4aa05f47dd1bb5486be41e4b9e24616"],["/components/accordion/accordion.js","1c2fa0b2e72586f06d5da35ed0c16588"],["/components/anchor-top/anchor-top.css","2c2a564bb440a309f12e77650cd27918"],["/components/anchor-top/anchor-top.js","e87aff498397715740fa37ca1c8e649e"],["/components/breadcrumb/breadcrumb.css","7be10f730851199443cf17f6d14eafd1"],["/components/menu-button/menu-button.css","37674eb6560bf5ca33e45a2525119563"],["/components/menu-button/menu-button.js","e6fe6e6e1e9aa460ae35accbe9532fe5"],["/components/nested-nav/nested-nav.css","a9c9fce365a687eb30809b50efe6064b"],["/components/note/note.css","414cb9e42701c93a0fc082c2f8e16475"],["/components/pagination/pagination.css","8dd6773c316dfec4dab98a9dfc6175d9"],["/components/tabs/tabs.css","0b441a436b4eefc95b7d5d57adeb20eb"],["/components/tabs/tabs.js","e4d4b78d7ffe992c19384ea24bbb18a5"],["/components/treeview/treeview.css","5c4e9c92ac7e173d4534c5caa36f332e"],["/components/treeview/treeview.js","9aa3f3e19c6938bd89ef5c25c8cc4a35"],["/core/css/about.css","a772a2c5505a0019d7cce4464f3c71c5"],["/core/css/base.css","bf877d96992287ab3e240467c17b9fdf"],["/core/css/code.css","f2f371660d86e41ea49686adfb8b76c0"],["/core/css/color.css","6d875c787f8028bb41725552a955ebbf"],["/core/css/controls.css","cc0aeb3f46042f7cfdfd92c3c52843b4"],["/core/css/documentation.css","9afe4c22b8433d2bf2b4893f6de0316c"],["/core/css/footer.css","0004d9e6e598fd90fa4c44dc16d0105f"],["/core/css/helpers.css","ed60296ee53cd74b3710554c753774f7"],["/core/css/highlight.css","8bf49d81f7bb358dfcdb5b87730b9544"],["/core/css/home.css","df76051852dbc515c4e38421fd741272"],["/core/css/layouts.css","1e4dd45a07a0fb28a5e785d84be0513f"],["/core/css/media.css","cffd022e26460a97de5b7e21379dcfbf"],["/core/css/navigation.css","2723d6a251a6f3d2d446d3c8dae850a2"],["/core/css/scan-results.css","25d027de371c683829c1aa886856e3ce"],["/core/css/scanner.css","8064f5150bf718753665c6ea5872fd37"],["/core/css/search-results.css","5c0a88d6f6acda8df80ae458af49ee8b"],["/core/css/structure.css","3e2295871f7c1403e8d03c78588e0de3"],["/core/css/table-of-contents.css","e997765bb271458ac0faab657c5fd5f3"],["/core/css/tables-lists.css","81c1ab75922ed79b801a21a0e35e5558"],["/core/css/type.css","cc0b0f4dca493c699eb819d0254e7b62"],["/core/images/select-arrow.svg","23b6203075faaf9e8188ff58c126c86e"],["/core/scripts/form-validation.js","958ecefdc5a1eb3f67a411cc71d149ce"],["/docs/contributor-guide/connectors/events/index.html","4a80a54f5ab64b65f561f2e86d3ce16a"],["/docs/contributor-guide/connectors/index.html","b2aef484cb458f83633c70fed4bef330"],["/docs/contributor-guide/contributing/pull-requests/index.html","4aadb1ca6248841274daf35c48aa5c94"],["/docs/contributor-guide/development-environment/index.html","2e196102a254bd924684c4b059ae576c"],["/docs/contributor-guide/formatters/index.html","ec567a1e7144f7e30d3415851997044a"],["/docs/contributor-guide/index.html","fc08f1f7f6549d02ad652eb7e2c90552"],["/docs/contributor-guide/rules/index.html","b54aea8b828dd8d194b3db996502d8ac"],["/docs/index.html","dbab7c962ccebca8e182fa9fa9cb2ea7"],["/docs/user-guide/concepts/connectors/index.html","61f1da404387a4f6b8a74bade662d5da"],["/docs/user-guide/concepts/formatters/index.html","d7cd849a60740e469e288564cdb8caca"],["/docs/user-guide/concepts/images/codeframe.png","315a10f36b74628021263fe40b9a1e1a"],["/docs/user-guide/concepts/images/json-output.png","6f15a72cc88f165ff2b4514256690306"],["/docs/user-guide/concepts/images/stylish-output.png","c0333ea99083c8392c56284f147f4e51"],["/docs/user-guide/concepts/images/summary-output.png","3e8d086067f9b19fa15626ab4398ea26"],["/docs/user-guide/concepts/rules/index.html","bf86730df1f478455e4ef6cf81ef4c90"],["/docs/user-guide/further-configuration/browser-context/index.html","0add88dbe04ac82642bb94f57e3661f7"],["/docs/user-guide/further-configuration/ignoring-domains/index.html","f3a15fa1a893246eba0deede97cd5f8e"],["/docs/user-guide/further-configuration/rules-timeout/index.html","35c86b448da0e0b18b7df9df437a99c5"],["/docs/user-guide/further-configuration/sonarwhalrc-formats/index.html","dde7e215967e8e52511eabff7d62b311"],["/docs/user-guide/further-configuration/website-authentication/index.html","deef1c1ade67b471ccd1d1818a72a4d2"],["/docs/user-guide/index.html","26d6f406f5d8c334c79c164b2022a9b1"],["/docs/user-guide/rules/amp-validator/index.html","605bdafea100d7e337d9be2e60a11852"],["/docs/user-guide/rules/apple-touch-icons/index.html","649c0760ee248fc6049086fdc430701d"],["/docs/user-guide/rules/axe/index.html","ce8bc374505e6ac254e963867579ab40"],["/docs/user-guide/rules/content-type/index.html","87f70f725ecb43a95abc9a0212b733af"],["/docs/user-guide/rules/disown-opener/index.html","7ec06a3671fa9d2e7aaeac001135cd33"],["/docs/user-guide/rules/highest-available-document-mode/index.html","ded5d17dc3996ef42cc0382c7febe0ae"],["/docs/user-guide/rules/html-checker/index.html","625e051f7f638905ed2c784624aca08d"],["/docs/user-guide/rules/http-cache/index.html","7eae6d9dc87c41c484e3fc0154c75408"],["/docs/user-guide/rules/image-optimization-cloudinary/index.html","83d94a7834ed1e4e708c0323c4680071"],["/docs/user-guide/rules/index.html","21e4114468e333835f49bae38f2cc098"],["/docs/user-guide/rules/manifest-app-name/index.html","106533e59b618d79d7caaf4b348bd5c2"],["/docs/user-guide/rules/manifest-exists/index.html","aff77a737862d5f899f90685612312c3"],["/docs/user-guide/rules/manifest-file-extension/index.html","2e60dcf093832e2237a30f14a0b0b38b"],["/docs/user-guide/rules/meta-charset-utf-8/index.html","555314d63ac96994b27de584604497e8"],["/docs/user-guide/rules/meta-viewport/index.html","56e140ad7e5e1f164b2b0468beb5ccae"],["/docs/user-guide/rules/no-disallowed-headers/index.html","8057789f03be1edd2f259ae114d33307"],["/docs/user-guide/rules/no-friendly-error-pages/index.html","50eb1c190ee66fb03cfd13b6c21e2438"],["/docs/user-guide/rules/no-html-only-headers/index.html","8eb18765314c5ad9a389a38918012be5"],["/docs/user-guide/rules/no-http-redirects/index.html","453809c34cb07edd80c12172c7007ae8"],["/docs/user-guide/rules/no-protocol-relative-urls/index.html","44322d2c4bf1e5b3d0bf0f5f07165a9d"],["/docs/user-guide/rules/no-vulnerable-javascript-libraries/index.html","a1db37c8e3c444f7195017dd32cb9d1b"],["/docs/user-guide/rules/ssllabs/index.html","cb6874113423c1d9d79e232400f85045"],["/docs/user-guide/rules/strict-transport-security/index.html","d7b0b95a5e414ff33312dfc305c662b8"],["/docs/user-guide/rules/validate-set-cookie-header/index.html","1ca9dbc0bf35ebf7c14902fa56b1fef9"],["/docs/user-guide/rules/x-content-type-options/index.html","9cf474bad3f06472ee3fb74d5841a198"],["/images/404-space-narwhal.svg","e3af791ff7bb0b0895fbab3b9f9ce3e1"],["/images/about-changelog.svg","357a47ef3242c7f647eb3c71e2cc59ae"],["/images/about-codeofconduct.svg","28a0a629e29e32c101b60257697e43e2"],["/images/about-contributors.svg","8b253f09d802ae5098d4de6e931ab3e5"],["/images/about-faq.svg","5a0f6727dfd7da0f6f60f428560cd26b"],["/images/about-governance.svg","8f913c462bee3c55c6bbf52fe698b466"],["/images/accessibility.svg","a17d591e6486da4497aff448c45527ed"],["/images/apple-touch-icon.png","c01d89d4f329d5e07ff4c98a6a771c2b"],["/images/breaking-changes-icon.svg","49342fae5b66f8dc954100723c259153"],["/images/bug-fixes-icon.svg","87ccd10d4ddaaf3e41a6b7e0fa03af23"],["/images/click-1.svg","d3f89d4dbaaf9f059dba2e06ccd98f78"],["/images/click-2.svg","bbf0b0ad5b91df70e4f0653b0e0322cc"],["/images/click-3.svg","fec01ad75327911b3a8ccd14bca3d6a5"],["/images/close-accordion.svg","26584845897c777f096f42d2c182abd7"],["/images/dev-guide-icon.svg","26315b29b0969574e53c63155687f331"],["/images/favicon-16x16.png","9df79ec1dab76976e99056ee71dd57ce"],["/images/favicon-32x32.png","57258f2c0e3f3787e9150c6223731980"],["/images/github.svg","19157abb973d14e3d6ab1c7837592cf1"],["/images/home-nellie.svg","69a6903f807f88e6787c90a737a77a55"],["/images/iceberg-left.svg","813b080aee13bb51a443059f43c23fce"],["/images/iceberg-middle.svg","4b00984d128ab941367dc11307b296fe"],["/images/iceberg-right.svg","73d1efd3b6f6811101e1d8d3e5643eaf"],["/images/interoperability.svg","24367af4aae86aa3d503cd77f79d682f"],["/images/logos/axe.png","5f168d53b0f9faf861b97134304f211d"],["/images/logos/cloudinary_logo_for_white_bg.svg","5644e6cedf1f9a7f50b9c39a11a27ddb"],["/images/logos/qualys-ssl-labs-logo.png","c838cf2381484e4e9fd65bc737b677c0"],["/images/logos/snyk.svg","0c11862a3f4d0a63a7564d67a92851d1"],["/images/manifest-icon.png","a3d1c16640a2aa4795bb97611971dbf1"],["/images/mobile-menu-button.svg","d6ab70cb959ff61f9adfa7dac4f51e24"],["/images/narwhal.svg","d36a9b963ffecbec4fa6b42894b70acf"],["/images/nav-arrow.svg","3f14ca4bed391c0bb585d149c0007f41"],["/images/new-features-icon.svg","c9a8e8eb1c7ab088f1c4a5cbec4466ec"],["/images/next-arrow.svg","c558ba3f13e636234941616ecfe035e5"],["/images/open-accordion.svg","85d0f6e43394dd01dbd703b18f8d44e9"],["/images/performance.svg","1af1c77f99e882603f0ec506d3d3f705"],["/images/permalink-icon.svg","881b48d84ae4174003c97d44ca2fb868"],["/images/previous-arrow.svg","3ca3d6376386027ccb15ee8f8b6a88e4"],["/images/pwa.svg","7a72bd24f33c7c21011ffb36d8052adf"],["/images/queue-nellie.svg","42504d139d1fea174bd1c43c9e4de8be"],["/images/results-a11y.svg","a17d591e6486da4497aff448c45527ed"],["/images/results-docs-icon.svg","05070ce00bc81ef40b6a8295aa7ca0e8"],["/images/results-error-icon.svg","b38593d10ee8110c0e6a16f7521b199e"],["/images/results-hide-details.svg","ec3d32856fb9bdae640c0ef5112c5d2a"],["/images/results-interop.svg","a3e7707e2bbfe0f7c6e3b14325cfd765"],["/images/results-passed-icon.svg","d12f41eeb3308c431062cd9abc4f98ba"],["/images/results-perf.svg","1af1c77f99e882603f0ec506d3d3f705"],["/images/results-pwa.svg","7a72bd24f33c7c21011ffb36d8052adf"],["/images/results-security.svg","b8c1526e1a877fe72a05d9dd3888f1ed"],["/images/results-view-details.svg","91448f0dc9b2cb3194bf18a3182ebc6f"],["/images/results-warning-icon.svg","817fb7bbd7b00d156aad3ae42bab3f30"],["/images/rules-icon.svg","bccbc8e2a43bbc996ff2c9b7211454fd"],["/images/search-icon.png","c27160bfd32d51a2fb6d072f5243c1f4"],["/images/search-icon.svg","50df8f2aa4dc59c8f7f697febf9b2a63"],["/images/security.svg","d46f117305c45ecebf685527aa2b678d"],["/images/sonar-logo.svg","4fa31d71a37280074c610fcc3c1522f8"],["/images/sub-section.svg","4f27ca69dad98a29e01acb0acc7d0883"],["/images/toc-arrow.svg","a3e16fa3884a40cd01a25625c8169270"],["/images/toc-current-section.svg","e895e62951198f2e4589280104aa71dc"],["/images/user-guide-icon.svg","8eaf98e9be6a6bfc69c04b13bce8e7f7"],["/index.html","072bffa40de89456e6b407263fa17409"],["/js/nav.js","589ccfc6d58a2608b6fc28a47dfbb18e"],["/js/scanner-common.js","7e698c0d77f7779aa32fec6c0fe79ef6"],["/js/scanner-submit.js","6ac51f2ec9962f538c50078037996880"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"avatars.githubusercontent.com"});




