<template>
    <form id='datetime'>
       <select id="day" v-model="selected">
           <option disabled value="">pick a time</option>
            <option value="now">Right now</option>
            <option value=0>Later today</option>
            <option value=1>Tomorrow</option>
            <option value=2>The day after tomorrow</option>
        </select>
        <select id="time" v-show='later'></select>
        <button type='submit'>Submit</button>
    </form>
    
</template>

<script>
export default {
    name: 'DaySelect',
    data(){
        return{
            selected: '',
            later: false
        }
    },
    methods: {},
    watch: {
        selected: function(){
            this.selected==='now'?this.later=false:this.later=true
        }
    }

}
</script>