import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

import _18556586 from '../pages/analysis/index.vue'
import _433ae7c6 from '../pages/clients/index.vue'
import _7922f4ec from '../pages/inspire.vue'
import _28b93ed6 from '../pages/location/index.vue'
import _6df703de from '../pages/normative/index.vue'
import _dfd4eac6 from '../pages/users/index.vue'
import _3b8234de from '../pages/accounts/login.vue'
import _a2eeb5be from '../pages/analysis/create.vue'
import _1622e6a8 from '../pages/location/create.vue'
import _789dc2a0 from '../pages/normative/create.vue'
import _2d231ac8 from '../pages/security/rols/index.vue'
import _e997efcc from '../pages/security/users/index.vue'
import _07676af7 from '../pages/analysis/rawdata/copy.vue'
import _030145e4 from '../pages/security/users/create.vue'
import _d0e909a2 from '../pages/security/rols/edit/_id.vue'
import _2b5cb49d from '../pages/security/users/edit/_id.vue'
import _1289389a from '../pages/analysis/edit/_id.vue'
import _b75e5de6 from '../pages/analysis/files/_id.vue'
import _47365726 from '../pages/analysis/history/_id/index.vue'
import _e61052b0 from '../pages/analysis/rawdata/_id.vue'
import _342a7684 from '../pages/analysis/report/_id.vue'
import _06cd973e from '../pages/location/edit/_id.vue'
import _22173c76 from '../pages/normative/normativeStepFields/_id.vue'
import _39e7806d from '../pages/normative/normativeSteps/_id.vue'
import _502bf81e from '../pages/analysis/history/_id/create.vue'
import _09b363be from '../pages/analysis/history/_id/update/_id_history.vue'
import _5292c564 from '../pages/index.vue'

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/analysis",
    component: _18556586,
    name: "analysis"
  }, {
    path: "/clients",
    component: _433ae7c6,
    name: "clients"
  }, {
    path: "/inspire",
    component: _7922f4ec,
    name: "inspire"
  }, {
    path: "/location",
    component: _28b93ed6,
    name: "location"
  }, {
    path: "/normative",
    component: _6df703de,
    name: "normative"
  }, {
    path: "/users",
    component: _dfd4eac6,
    name: "users"
  }, {
    path: "/accounts/login",
    component: _3b8234de,
    name: "accounts-login"
  }, {
    path: "/analysis/create",
    component: _a2eeb5be,
    name: "analysis-create"
  }, {
    path: "/location/create",
    component: _1622e6a8,
    name: "location-create"
  }, {
    path: "/normative/create",
    component: _789dc2a0,
    name: "normative-create"
  }, {
    path: "/security/rols",
    component: _2d231ac8,
    name: "security-rols"
  }, {
    path: "/security/users",
    component: _e997efcc,
    name: "security-users"
  }, {
    path: "/analysis/rawdata/copy",
    component: _07676af7,
    name: "analysis-rawdata-copy"
  }, {
    path: "/security/users/create",
    component: _030145e4,
    name: "security-users-create"
  }, {
    path: "/security/rols/edit/:id?",
    component: _d0e909a2,
    name: "security-rols-edit-id"
  }, {
    path: "/security/users/edit/:id?",
    component: _2b5cb49d,
    name: "security-users-edit-id"
  }, {
    path: "/analysis/edit/:id?",
    component: _1289389a,
    name: "analysis-edit-id"
  }, {
    path: "/analysis/files/:id?",
    component: _b75e5de6,
    name: "analysis-files-id"
  }, {
    path: "/analysis/history/:id",
    component: _47365726,
    name: "analysis-history-id"
  }, {
    path: "/analysis/rawdata/:id?",
    component: _e61052b0,
    name: "analysis-rawdata-id"
  }, {
    path: "/analysis/report/:id?",
    component: _342a7684,
    name: "analysis-report-id"
  }, {
    path: "/location/edit/:id?",
    component: _06cd973e,
    name: "location-edit-id"
  }, {
    path: "/normative/normativeStepFields/:id?",
    component: _22173c76,
    name: "normative-normativeStepFields-id"
  }, {
    path: "/normative/normativeSteps/:id?",
    component: _39e7806d,
    name: "normative-normativeSteps-id"
  }, {
    path: "/analysis/history/:id?/create",
    component: _502bf81e,
    name: "analysis-history-id-create"
  }, {
    path: "/analysis/history/:id?/update/:id_history?",
    component: _09b363be,
    name: "analysis-history-id-update-id_history"
  }, {
    path: "/",
    component: _5292c564,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
