<template>
    <div>
        <app-header></app-header>
        <p>Main Component rendered</p>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
    // Main component logic
    name: 'Main',
    components: {
        'app-header': AppHeader,
        'app-footer': AppFooter
    }
}
</script>

<style scoped>
/* Main component styles */
</style>
