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
        <p class='error' v-if="error">Sorry, data for that location is not available</p>
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
      key: process.env.VUE_APP_OPEN_KEY,
      error: false,
      errormessage: 'Sorry, data for that location is not available'
    };
  },
  methods: {
    submit: function(event) {
      let vm = this;
      event.preventDefault();
      const city = (vm.message);
      const country = (vm.selected);
      this.getLocation(city, country);
    },
    getLocation: function(city, country) {
      //calls open weather current weather data api
      //gets to get current weather conditions and also coordinates
      //also checks to see if location is valid 
      const key = 'appid='+ this.key
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&${key}`)
      .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error();
      })
      .then(response => {console.log(response)
        router.push({path: 'time'}) //navigates to next page
      })
      .catch(this.error = true)
    }
  }
}
</script>

<style scoped>

</style>
