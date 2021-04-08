import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

import {
  Input,
  Form,
  Button,
  Modal,
  Icon,
  Drawer,
  message,
} from 'ant-design-vue'
Vue.use(Input)
Vue.use(Form)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(message)
Vue.prototype.$message = message


new Vue({
  render: h => h(App),
}).$mount('#app')
