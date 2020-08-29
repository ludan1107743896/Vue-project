<template>
    <el-row>
        <el-col>
            <div id="myChart" style="width: 1000px;height:300px;"></div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'line',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        }
    }
};
</script>