<template>
    <main>
        <p v-if='now'>{{store.current.temp}}</p>
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
            router.push({path: '/'})
        }
    }
}
</script>


<style scoped>
    main {
        padding: 2rem;
    }
    .lowhigh {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .restart {
        padding: 0.75rem 2rem;
    }
</style>