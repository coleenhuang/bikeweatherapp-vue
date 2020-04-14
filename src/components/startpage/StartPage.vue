<template>
    <main>
        <h2>Where are you located?</h2>
        <form class="user-location" v-on:submit='submit'>
            <label for='city'>
              <span class='place'>City</span>
              <input type='text' v-model="message" placeholder="Enter a city">
            </label>
            <label for='country'>
              <span class='place'>Country</span>
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
        <img id='biker' src='../../assets/biker.png' alt='Bicyclist' />
    </main>
</template>

<script>
import countries from '../../store/countries'
import router from '../../router/index'
import info from '../../store/api-info'

export default {
  name: 'StartPage',
  data(){
    return{
      selected: '',
      message:'',
      options: countries,
      key: process.env.VUE_APP_OPEN_KEY,
      error: false,
      store: info
    };
  },
  methods: {
    submit: function(event) {
      let vm = this;
      event.preventDefault();
      const city = (vm.message);
      const country = (vm.selected);
      this.setLocation(city, country)
      this.getLocation(city, country);
    },
    getLocation: function(city, country) {
      //calls open weather current weather data api
      //gets to get current weather conditions and also coordinates
      //also checks to see if location is valid 
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='
      const key = 'appid='+ this.key
      const units = 'units=metric'
      fetch(`${url}${city},${country}&${units}&${key}`)
      .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error();
      })
      .then(responseJson => {
        console.log(responseJson)
        this.getCurrentTemp(responseJson)
        router.push({path: 'time'}) //navigates to next page
      })
      .catch(this.error = true)
    },
    setLocation: function(city, country){
      //adds location to store
      this.store.location.city = city;
      this.store.location.country = country;
      console.log(this.store.location.city)
    },
    getCurrentTemp: function(data){
      //adds current temp to store
      this.store.current.temp = data.main.temp
      console.log(this.store.current.temp)
    }
  }
}
</script>

<style scoped>
  .error {
    color:#a7442a;
    font-size: 17px;
  }
  .user-location {
    display: flex;
    flex-direction: column;
  }
  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 20px;
  }
  .user-location input[type=text], .user-location select {
        width: 300px;
        font-size: 16px;
    }
  .place {
    padding: 1rem;
  }
  button {
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    width: 150px;
    background-color: #a1a9c7;
  }

  #biker {
    width: 70%;
    margin: 0.25rem;
    
  }
 
 @media (min-width:768px) {
   #biker {
     width: 500px;
   }
 }
  @media (min-width: 992px) {
  label {
    display: inline-block;
  }
}
</style>
