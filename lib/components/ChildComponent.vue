<template>
    <div>
        <h3>This is a child component</h3>
        <p>This is a paragraph of this nested component</p>
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

