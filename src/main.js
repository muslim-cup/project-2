import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './plugins/translatePlugin'

const app = createApp(App)

const ru = {
  app:{
    title: "Плагины Вью"
  }
}
const en = {
  app:{
    title: "Plugins in vue"
  }
}

app.use(translatePlugin, {ru, en})

app.mount('#app')