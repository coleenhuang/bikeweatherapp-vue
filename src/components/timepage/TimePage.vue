<template>
    <main>
        <h2>When are you planning on using your bike?</h2>
        <TimeForm @submittime="settime($event)"/>
        <p class='error' v-if="error">Sorry, data for that time is not available</p>
    </main>
</template>

<script>
import TimeForm from './TimeForm'
import dayjs from 'dayjs'
import info from '../../store/api-info'

export default {
    name: 'TimePage',
    components:{TimeForm},
    data(){
        return{
            later: false,
            chosentime: dayjs(),
            key: process.env.VUE_APP_FORECAST_KEY,
            store: info,
            error: false
        }
    },
    methods: {
        settime: function(time){
            //gets and formats the submitted data from TimeForm
            console.log('time sent')
            if (time.day !=='now'){
                let date = dayjs().add(time.day, 'day');
                let t = time.hour
                this.chosentime = dayjs(date).hour(t).minute(0)
            }
            console.log(this.chosentime.format('YYYY-MM-DD'))
            this.getForecast()
        },
        getForecast(){
            const url = 'https://api.weatherbit.io/v2.0/forecast/daily?'
            const {city, country} = this.store.location
            const key = 'key='+ this.key
            fetch(`${url}city=${city}&country=${country}&${key}`)
                .then(res => {
                    if (res.ok){
                        return res.json()
                    }
                    throw new Error();
                })
                .then(responseJson => {
                    console.log(responseJson)
                    this.getInfo(this.filterData(responseJson))
                })
                .catch(this.error = true)
        },
        filterData(responseJson){
            return responseJson.data.find(day => day.valid_date === this.chosentime.format('YYYY-MM-DD'))
        },
        getInfo(data){
            this.store.forecasted.high = data.high_temp;
            this.store.forecasted.low = data.low_temp;
            this.store.forecasted.description = data.weather.description;
            this.store.forecasted.sunrise = dayjs.unix(data.sunrise_ts);
            this.store.forecasted.sunset = dayjs.unix(data.sunset_ts);
            this.store.forecasted.moonrise = dayjs.unix(data.moonrise_ts);
            this.store.forecasted.moonset = dayjs.unix(data.moonset_ts);
            this.store.forecasted.moonphase = data.moon_phase;
            console.log(this.store.forecasted.moonphase)
        } 
    }
}
</script>