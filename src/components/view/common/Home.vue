<template>
    <div>
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from "./Header.vue";
import vSidebar from './Sidebar.vue';
import bus from '../../common/bus'
export default {
    data() {
        return {
            collapse: false,
        }
    },
    components: {
        vHeader,
        vSidebar
    }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .10s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>