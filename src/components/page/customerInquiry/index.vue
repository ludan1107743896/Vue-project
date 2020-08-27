<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            12
        </div>
    </div>
</template>
<script>
import breadCrumb from '../storeManagement/breadcrumb.vue';

export default {
    data() {
        return {
            title: ['首页', '客户自定义查询']
        }
    },
    components: {
        breadCrumb,
    }
}
</script>
