import 'uno.css';
import '@vben/design';

// import '@/design/index.less';
// import 'ant-design-vue/dist/antd.less';
// Register icon sprite
// import 'virtual:svg-icons-register';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

async function bootstrap() {
  const app = createApp(App);

  // // Configure store
  // // 配置 store
  // setupStore(app);

  // // Initialize internal system configuration
  // // 初始化内部系统配置
  // initAppConfigStore();

  // Multilingual configuration
  // 多语言配置
  // Asynchronous case: language files may be obtained from the server side
  // 异步案例：语言文件可能从服务器端获取
  // await setupI18n(app);

  // Configure routing
  // 配置路由
  app.use(router);

  // // router-guard
  // // 路由守卫
  // setupRouterGuard(router);

  // Register global directive
  // 注册全局指令
  // setupGlobDirectives(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
