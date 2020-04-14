<template>
    <main>
        <p class="current-temp" v-if='now'>{{store.current.temp}}°C</p>
        <p>{{store.forecasted.description}}</p>
        <div class="lowhigh">
            <p>{{store.forecasted.low}}°C</p>
            <p>{{store.forecasted.high}}°C</p>
        </div>
        <p v-if='bikelight'>{{message}}</p>
        <button type="button" class='restart' v-on:click="restart">Restart</button>
    </main>
</template>

<script>
import info from '../../store/api-info'
import router from '../../router/index'
export default {
    name: 'ResultPage',
    data(){
        return {
            now: info.time.now,
            store: info,
            bikelight: info.night.bikelight,
            message: `It's dark outside, remember to bring a bike light!`
        }
        
    },
    methods: {
        restart: function(){
            this.reset()
            router.push({path: '/'})
        },
        reset: function(){
            this.store.time.now = false
            this.store.night.bikelight = false
        }
    }
}
</script>


<style scoped>
    main {
        padding: 2rem;
        font-size: 18px;
    }
    .current-temp {
        font-size: 20px;
    }
    .lowhigh {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .restart {
        padding: 0.75rem 2rem;
    }
    button {
        font-size: 17px;
        width: 150px;
        background-color: #a1a9c7;
    }
</style>