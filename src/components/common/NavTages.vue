<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-menu-item>
                <i class="el-icon-pie-chart"></i> {tagTitle}
            </el-menu-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    props: {
        tagTitle: {
            type: String,
            require: true,
        }
    }
}
</script>