import { createApp, defineCustomElement } from 'vue'
import './assets/main.css'

import App from './App.ce.vue'
import HelloWorld from './components/HelloWorld.ce.vue'


customElements.define('plugin-vue-element', defineCustomElement(App))
// customElements.define('plugin-hello-world', defineCustomElement(HelloWorld))

// createApp(App).mount('#vueHelloWorld')