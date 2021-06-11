<template>
    <div style="max-width: 1000px">
        {{ dateData }}
        <VueContributions
            :click="getDate"
            :data="data"
            :rectWidth="11"
            :rectHeight="11"
            :theme="theme"
            :year="year"
            language="zh-cn"
        ></VueContributions>
        <!-- <button @click="theme = 'light'">light</button>
        <button @click="theme = 'dark'">dark</button>
        <button @click="year = 2021">2021</button>
        <button @click="year = 2020">2020</button>
        <button @click="year = 2019">2019</button> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    data() {
        return {
            data: {
                '2021-06-11': 10,
                '2021-04-11': 30,
                '2021-03-11': 20,
                '2021-02-11': 40,
                '2021-01-11': 50,
                '2020-04-11': 30,
                '2020-03-11': 20,
                '2020-02-11': 40,
                '2020-01-11': 50,
                '2020-06-11': 10,
                '2019-04-11': 30,
                '2019-03-11': 20,
                '2019-02-11': 40,
                '2019-01-11': 50,
            },
            theme: 'light',
            dateData: null,
            year: '',
        }
    },
    methods: {
        getDate(data: any) {
            this.dateData = data
        },
    },
    components: {},
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
