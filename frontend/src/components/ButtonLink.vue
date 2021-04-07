<template>
    <router-link class="p-button p-component" :to="to">
        <span class="pi p-button-icon p-button-icon-left" :class="icon"></span>
        <span class="p-button-label">{{ label }}</span>
    </router-link>
</template>

<script>
export default {
    name: 'ButtonLink',
    props: [
        'label',
        'to',
        'icon',
    ],
};
</script>

<style scoped lang="scss">
    .p-button-primary {
        &:hover {
            background-color: #0d89ec;
            border-color: #0d89ec;
        }
    }

    .p-button-success {
        &:hover {
            background-color: #5e8f32;
            border-color: #5e8f32;
        }
    }

    .p-button-secondary {
        &:hover {
            background-color: #56717d;
            border-color: #56717d;
        }
    }
</style>
