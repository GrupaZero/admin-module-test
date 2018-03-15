export default {
    register: (app) => {
        console.log('Registering Service Provider: Admin Module Test')

        app.registerLauncher({
            path: 'super-advanced-feature',
            label: 'Super-Duper Advanced Feature'
        }, () => import('./lib/components/SuperAdvancedFeature.vue'))

        app.registerLauncher({
            path: 'another-super-advanced-feature',
            label: 'Another Super-Duper Advanced Feature'
        },
        () => import('./lib/components/AnotherSuperAdvancedFeature.vue'),
        [{
            path: 'child-component',
            name: 'child-component',
            component: () => import('./lib/components/ChildComponent.vue')
        }])
    }
}