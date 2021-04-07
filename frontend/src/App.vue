<template>
    <Toast position="bottom-right"/>
    <div class="progressbar">
        <ProgressBar v-show="progressBarVisible" mode="indeterminate"/>
    </div>
    <Breadcrumb :home="home" :model="items"/>
    <router-view/>
</template>
<script>
import Toast from 'primevue/toast';
import ProgressBar from 'primevue/progressbar';
import Breadcrumb from 'primevue/breadcrumb';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                to: '/',
            },
        };
    },
    computed: {
        ...mapGetters({
            items: 'breadcrumbs/items',
            progressBarVisible: 'progressbar/visible',
        }),
    },
    methods: {
        ...mapActions({
            breadcrumbsUpdate: 'breadcrumbs/update',
        }),
    },
    watch: {
        $route(route) {
            this.breadcrumbsUpdate(route.meta.breadcrumbs);
        },
    },
    components: {
        Breadcrumb,
        ProgressBar,
        Toast,
    },
};
</script>
<style lang="scss">
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
        background-color: #f2f3f4;

        max-width: 1024px;
        margin: 0 auto;

        a {
            text-decoration: none;
        }

        .progressbar {
            position: fixed;
            left: 0;
            width: 100vw;
            height: 0.05rem;
            margin: 0 0.1rem;

            .p-progressbar {
                height: inherit;
            }
        }

        .pi-circle-green {
            color: #689F38;
        }

        .pi-circle-yellow {
            color: #FBC02D;
        }

        .pi-circle-red {
            color: #D32F2F;
        }
    }
</style>
