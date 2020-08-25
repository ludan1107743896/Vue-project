<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <search-comp />
            
        </div>    
    </div>
</template>

<script>
import breadCrumb from '../storeManagement/breadcrumb.vue';
import searchComp from './searchComp.vue';

export default {
    data() {
        return {
            title: ['首页', '仪器管理'],
        }
    },
    components: {
        breadCrumb,
        searchComp
    }
}
</script>