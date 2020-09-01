<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            这是动画页面
        </div>
    </div>
</template>

<script>
import breadCrumb from '../storeManagement/breadcrumb.vue';

export default {
    data() {
        return {
            title: ['首页', 'Vue 动画页面'],
        }
    },
    components: {
        breadCrumb,
    },
}
</script>