<template>
    <div class="container-box">
        <div v-for="(item,index) in list" :key="index">
            <component :is="item.type"></component>
        </div>
    </div>
</template>

<script>
import Text from './text.vue';
import Image from './image.vue';
import Div from './div.vue';

export default {
    data() {
        return {
            list: [
                {
                    type: Text,
                },
                {
                    type: Div,
                },
                {
                    type: Image,
                }
            ]
        }
    }
}
</script>