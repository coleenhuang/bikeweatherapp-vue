<template>
    <form id='datetime' v-on:submit.prevent='submittime'>
       <select id="day" v-model="selecteday">
           <option disabled value="">pick a time</option>
            <option value="now">Right now</option>
            <option value=0>Later today</option>
            <option value=1>Tomorrow</option>
            <option value=2>The day after tomorrow</option>
        </select>
        <select id="time" v-show='later' v-model="selecthour">
            <option disabled value="">pick a time</option>
            <option v-for="(option, index) in options"
                :key="index" :value="option.value">
                {{option.time}}
            </option>
        </select>
        <button type='submit'>Submit</button>
    </form>
    
</template>

<script>
export default {
    name: 'DaySelect',
    data(){
        return{
            selecteday: '',
            later: false,
            selecthour: '',
            options: []
        }
    },
    watch: {
        selecteday: function(){
            if (this.selecteday==='now'){
                this.later=false
            }
            else {
                this.later=true
                this.getTimeOptions()
            }
        }
    },
    methods: {
        getTimeOptions: function(){
            console.log(this.selecteday)
            if (this.selecteday > 0){
                for(let i=0; i<24; i++){
                    this.options.push({
                        time:`${i}:00`,
                        value: i})
                }
            }
            else {
                const today = new Date();
                const hour = today.getHours();
                for (let j=(hour+1); j< 24; j++){
                    this.options.push({
                        time:`${j}:00`,
                        value: j})
                }
            }
        },
        submittime: function(){
            console.log('time form')
            this.$emit('submittime', {day: this.selecteday, hour: this.selecthour})
        }
    },

}
</script>