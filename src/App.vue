<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter().currentRoute;
const routePath = ref(route.value.path);

onMounted(updateBodyClass);
watch(route, (newValue) => {
    routePath.value = newValue.path;
    updateBodyClass();
});

function updateBodyClass() {
    const body = document.querySelector('body');
    body.classList.remove('color-index', 'color-dash');

    if (routePath.value === '/') {
        body.classList.add('color-index');
    } else if (routePath.value === '/dashboard') {
        body.classList.add('color-dash');
    }
}
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
.color-index {
    background-color: var(--background - blue);
}

.color-dash {
    background-color: #ffffff;
}
</style>
