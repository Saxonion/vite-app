import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from './store'
import { setupGlobDirectives } from '/@/directives';

import "ant-design-vue/dist/antd.less";
import "/@/assets/styles/base/index.less"

const app = createApp(App);
// Register global directive
setupGlobDirectives(app);

app.use(router).use(store).mount('#app')
