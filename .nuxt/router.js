import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

import _663acff6 from '../pages/analysis/index.vue'
import _66c66f56 from '../pages/clients/index.vue'
import _3decbb24 from '../pages/inspire.vue'
import _01c6899e from '../pages/location/index.vue'
import _92d9dbd4 from '../pages/normative/index.vue'
import _9cbd1656 from '../pages/users/index.vue'
import _148f7fa6 from '../pages/accounts/login.vue'
import _11b6994e from '../pages/analysis/create.vue'
import _5ebef4e0 from '../pages/location/create.vue'
import _43837b68 from '../pages/normative/create.vue'
import _dfc56600 from '../pages/security/rols/index.vue'
import _f0ffc63c from '../pages/security/users/index.vue'
import _d6c421a2 from '../pages/analysis/rawdata/copy.vue'
import _df906bc8 from '../pages/security/users/create.vue'
import _9db50412 from '../pages/security/rols/edit/_id.vue'
import _45030ad5 from '../pages/security/users/edit/_id.vue'
import _b74ace5c from '../pages/analysis/edit/_id.vue'
import _4cab77d5 from '../pages/analysis/files/_id.vue'
import _7f9f9996 from '../pages/analysis/history/_id/index.vue'
import _ed782920 from '../pages/analysis/rawdata/_id.vue'
import _d1b6ae88 from '../pages/analysis/report/_id.vue'
import _e32ad6ce from '../pages/location/edit/_id.vue'
import _172e51fd from '../pages/normative/normativeStepFields/_id.vue'
import _58564d35 from '../pages/normative/normativeSteps/_id.vue'
import _6d8a7e29 from '../pages/analysis/history/_id/create.vue'
import _65d36c14 from '../pages/analysis/history/_id/update/_id_history.vue'
import _45ee8cc8 from '../pages/index.vue'

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
    component: _663acff6,
    name: "analysis"
  }, {
    path: "/clients",
    component: _66c66f56,
    name: "clients"
  }, {
    path: "/inspire",
    component: _3decbb24,
    name: "inspire"
  }, {
    path: "/location",
    component: _01c6899e,
    name: "location"
  }, {
    path: "/normative",
    component: _92d9dbd4,
    name: "normative"
  }, {
    path: "/users",
    component: _9cbd1656,
    name: "users"
  }, {
    path: "/accounts/login",
    component: _148f7fa6,
    name: "accounts-login"
  }, {
    path: "/analysis/create",
    component: _11b6994e,
    name: "analysis-create"
  }, {
    path: "/location/create",
    component: _5ebef4e0,
    name: "location-create"
  }, {
    path: "/normative/create",
    component: _43837b68,
    name: "normative-create"
  }, {
    path: "/security/rols",
    component: _dfc56600,
    name: "security-rols"
  }, {
    path: "/security/users",
    component: _f0ffc63c,
    name: "security-users"
  }, {
    path: "/analysis/rawdata/copy",
    component: _d6c421a2,
    name: "analysis-rawdata-copy"
  }, {
    path: "/security/users/create",
    component: _df906bc8,
    name: "security-users-create"
  }, {
    path: "/security/rols/edit/:id?",
    component: _9db50412,
    name: "security-rols-edit-id"
  }, {
    path: "/security/users/edit/:id?",
    component: _45030ad5,
    name: "security-users-edit-id"
  }, {
    path: "/analysis/edit/:id?",
    component: _b74ace5c,
    name: "analysis-edit-id"
  }, {
    path: "/analysis/files/:id?",
    component: _4cab77d5,
    name: "analysis-files-id"
  }, {
    path: "/analysis/history/:id",
    component: _7f9f9996,
    name: "analysis-history-id"
  }, {
    path: "/analysis/rawdata/:id?",
    component: _ed782920,
    name: "analysis-rawdata-id"
  }, {
    path: "/analysis/report/:id?",
    component: _d1b6ae88,
    name: "analysis-report-id"
  }, {
    path: "/location/edit/:id?",
    component: _e32ad6ce,
    name: "location-edit-id"
  }, {
    path: "/normative/normativeStepFields/:id?",
    component: _172e51fd,
    name: "normative-normativeStepFields-id"
  }, {
    path: "/normative/normativeSteps/:id?",
    component: _58564d35,
    name: "normative-normativeSteps-id"
  }, {
    path: "/analysis/history/:id?/create",
    component: _6d8a7e29,
    name: "analysis-history-id-create"
  }, {
    path: "/analysis/history/:id?/update/:id_history?",
    component: _65d36c14,
    name: "analysis-history-id-update-id_history"
  }, {
    path: "/",
    component: _45ee8cc8,
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
