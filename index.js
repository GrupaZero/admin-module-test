export default {
  register: (app) => {
      console.log('Registering Service Provider: Admin Module Test')

      app.registerLauncher({
          path: '/languages',
          label: 'Languages'
      }, () => import(/* webpackChunkName: "admin-module-test" */ './lib/components/Languages.vue'))

      app.registerLauncher({
          path: '/settings',
          label: 'Settings'
      },
      () => import(/* webpackChunkName: "admin-module-test" */  './lib/components/Settings.vue'),
      [{
          path: 'child-component',
          name: 'child-component',
          component: () => import(/* webpackChunkName: "admin-module-test" */  './lib/components/ChildComponent.vue')
      }])
  }
}