<template>
    <div>
        <h1>{{ $t("title") }}</h1>
        <p>This a le paragraph of another super advanced feature</p>
    </div>
</template>
<script>
    import Translations from '../../locales.js'
    export default {
        i18n: {
            messages: Translations
        }
    }
</script>
