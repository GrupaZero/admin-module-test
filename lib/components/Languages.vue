<template>
    <div>
        <h1>{{$t('languages.title')}}</h1>
        <p>{{$t('languages.descr')}}</p>
        <p class="text-muted" v-if="isBusy">{{$t('common.loading')}}</p>
        <table class="table table-striped" v-if="!isBusy">
            <thead>
            <tr>
                <th scope="col">{{$t('languages.codeLabel')}}</th>
                <th scope="col">i18n</th>
                <th scope="col">{{$t('languages.enabledLabel')}}</th>
                <th scope="col">{{$t('languages.defaultLabel')}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="language in languages">
                <td>{{ language.code}}</td>
                <td>{{ language.i18n}}</td>
                <td>{{ booleanText(language.is_enabled)}}</td>
                <td>{{ booleanText(language.is_default)}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Translations from '../../locales.js'

    export default {
        data() {
            return {
                isBusy: true,
                languages: []
            }
        },
        mounted: function() {
            this.loadData()
        },
        methods: {
            loadData() {
                axios.get('https://api.dev.gzero.pl/v1/languages')
                        .then(response => {
                            this.isBusy = false
                            this.languages = response.data.data
                        })
                        .catch(error => {
                            this.isBusy = false
                            console.error(error.response.data.message)
                        })
            },
            booleanText(value) {
                return (value) ? this.$t('common.yes') : this.$t('common.no')
            }
        },
        i18n: {
            messages: Translations
        }
    }
</script>

