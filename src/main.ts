import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/global.scss'

import { registerGlobComp } from '@/components/registerGlobComp'

;(async () => {
  const app = createApp(App)

  // Register global components
  registerGlobComp(app)

  app.use(store)
  app.use(ElementPlus)
  app.use(router)
  await router.isReady()

  app.mount('#app')
})()
