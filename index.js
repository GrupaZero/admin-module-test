export default {
    register: (app) => {
        console.log('Registering Service Provider: Admin Module Test')

        app.registerLauncher({
            path: 'super-advanced-feature',
            label: 'Super-Duper Advanced Feature'
        }, resolve => require(['./lib/components/SuperAdvancedFeature.vue'], resolve))

        app.registerLauncher({
            path: 'another-super-advanced-feature',
            label: 'Another Super-Duper Advanced Feature'
        }, resolve => require(['./lib/components/AnotherSuperAdvancedFeature.vue'], resolve))
    }
}