<template>
    <main>
        <h2>Where are you located?</h2>
        <form class="user-location" v-on:submit='submit'>
            <label for='city'>
              <span>City</span>
              <input type='text' v-model="message" placeholder="Enter a city">
            </label>
            <label for='country'>
              <span>Country</span>
              <select v-model="selected">
                <option disabled value="">Country</option>
                <option v-for="(option, index) in options"
                    :key="index" :value="option.code">
                    {{option.name}}
                </option>
              </select>
            </label>
            <button type='submit' class='location-button'>Submit</button>
        </form>
    </main>
</template>

<script>
import countries from '../../store/countries'
import router from '../../router/index'

export default {
  name: 'StartPage',
  data(){
    return{
      selected: '',
      message:'',
      options: countries,
      key: process.env.VUE_APP_OPEN_KEY
    };
  },
  methods: {
    submit: function(event) {
      let vm = this;
      event.preventDefault();
      const city = (vm.message);
      const country = (vm.selected);
      const key = 'appid='+ this.key
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&${key}`)
      .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(response => console.log(response))
      router.push({path: 'time'})
    },
    /*getlocation: function(city, country){
      let key = process.env.VUE_APP_OPEN_KEY;
      fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}`,{
        method:'GET',
        headers: {'Authorization': `Bearer ${key}`}
        })
      .then(res => res.json())
      .then(response => console.log(response))
    }*/
  }
}
</script>

<style scoped>

</style>