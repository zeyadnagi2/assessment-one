
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/assessment-one/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/assessment-one"
  },
  {
    "renderMode": 2,
    "route": "/assessment-one/home"
  },
  {
    "renderMode": 2,
    "route": "/assessment-one/about"
  },
  {
    "renderMode": 2,
    "route": "/assessment-one/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/assessment-one/contact"
  },
  {
    "renderMode": 2,
    "route": "/assessment-one/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5435, hash: 'fec57141830085678fe7ca6f3642547c138a8a3d04d50198b757d14a11449c6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: '0b59b73a654411cd118a82616351cd08861c28ab01f25ffe9ab8f396b5f93676', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21133, hash: '24c2e3c005c1f9d4c15cdae4c413a16c7a8d45fd2625e2b44a8b752c4c01af9f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20347, hash: '4e653d211b7eee4bd46b6e9c5599b0d3f24ade03f4950b999c9d07190163e263', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 23666, hash: 'ff5b8d2d718a2790b3fcb77acccd988ddf2987396f7e9e1eeb573a0ec991212b', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27030, hash: '0008efc6eddf8f6985213573da056d5615506f801f6738aaccc9afd65c5240a3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20356, hash: '301c2d53ce246dfa9a72e13f2ee273ca2d441f9f2d8c34a73e0693a5765e0256', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3GXGBRTA.css': {size: 304851, hash: 'GIyDoo5J45o', text: () => import('./assets-chunks/styles-3GXGBRTA_css.mjs').then(m => m.default)}
  },
};
