import { createSSRApp, createApp as _createApp } from 'vue'
import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  // const app = (import.meta.env.SSR ? createSSRApp : _createApp)(App)
  const app = createSSRApp(App)

  return { app }
}
