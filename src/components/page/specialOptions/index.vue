<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            123456
        </div>     
    </div>
</template>

<script>
import breadCrumb from '../storeManagement/breadcrumb';
export default {
    data() {
        return {
            title: ['首页', 'vue特殊交易'],
        }
    },
    components: {
        breadCrumb,
    }
}
</script>