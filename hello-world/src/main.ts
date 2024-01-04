import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#vueHelloWorld')
import { defineCustomElement } from 'vue'
customElements.define('plugin-vue-element', defineCustomElement(App))