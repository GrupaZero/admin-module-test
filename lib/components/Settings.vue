<template>
    <div>
        <h1>{{$t('settings.title')}}</h1>
        <p>{{$t('settings.descr')}}</p>
        <router-link class="btn btn-primary" to="/settings/child-component">{{$t('settings.childComponent')}}</router-link>
        <router-view class="mt-4"></router-view>
    </div>
</template>
<script>
    import Translations from '../../locales.js'
    export default {
        i18n: {
            fallbackLocale: 'en',
            messages: Translations
        }
    }
</script>
