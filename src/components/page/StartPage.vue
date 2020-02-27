<template>
    <main>
        <h2>Where are you located?</h2>
        <form class="user-location" v-on:submit='submit'>
            <label for='city'>
              <span>City</span>
              <input type='text' v-model="message" placeholder="edit me">
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
export default {
  name: 'StartPage',
  data(){
    return{
      selected: '',
      message:'',
      options: countries
    };
  },
  methods: {
    submit: function(event) {
      let vm = this;
      event.preventDefault();
      if (event) {
        console.log(vm.message)
        console.log(vm.selected)
      }}
  }
}
</script>

<style scoped>

</style>