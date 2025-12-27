
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Checkk-Frontend-Coding-Test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Checkk-Frontend-Coding-Test/delivery",
    "route": "/Checkk-Frontend-Coding-Test"
  },
  {
    "renderMode": 2,
    "route": "/Checkk-Frontend-Coding-Test/delivery"
  },
  {
    "renderMode": 2,
    "route": "/Checkk-Frontend-Coding-Test/toysfactory"
  },
  {
    "renderMode": 2,
    "route": "/Checkk-Frontend-Coding-Test/legal"
  },
  {
    "renderMode": 2,
    "route": "/Checkk-Frontend-Coding-Test/disconnect"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27885, hash: '47c5772afbba4e0a849afa17cd4bda100c49c42fa4aa2980ca72459dbbe32ab1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18732, hash: '720e85feed93095883d2d6dd2da1b593282193d9621e54b5407e6f797833fdf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 36294, hash: '3cf5dcf4d775cc17d760a5891adbbdb5afa4e3bbb6bc4a75c709cd80720d1765', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'disconnect/index.html': {size: 44501, hash: 'eab51c719bc69cf9740a0f35e6a8f85c4ab28deba982d5991cb3f43dcde976ae', text: () => import('./assets-chunks/disconnect_index_html.mjs').then(m => m.default)},
    'delivery/index.html': {size: 46249, hash: '1ed5e26fd154a243f25e4533826a1f2a53c642411cd97ef29e2145f35a305cbb', text: () => import('./assets-chunks/delivery_index_html.mjs').then(m => m.default)},
    'toysfactory/index.html': {size: 56251, hash: '81351cc981b6e7dd4c403784b711db90aae1e50e45b4cc7aaefdc6c23bc529cb', text: () => import('./assets-chunks/toysfactory_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 23833, hash: '22cAQHscArI', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
