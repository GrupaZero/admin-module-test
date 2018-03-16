<template>
    <div>
        <h3>This is a child component</h3>
        <p>This is a paragraph of this nested component {{$t('settings.descr')}}</p>
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

