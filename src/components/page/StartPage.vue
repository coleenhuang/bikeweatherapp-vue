<template>
    <main>
        <h2>Where are you located?</h2>
        <form class="user-location">
            <label for='city'>
              <span>City</span>
              <input type='text' id='city' name='city'>
            </label>
            <label for='country'>
              <span>Country</span>
              <select>
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
//pass in with options prop

//fix this later
/*function loadCountriesMenu(countryObject) {
    //loads dropdown menu for countries
    const selectEl = document.querySelector('#country');
    const countries = countryObject.forEach(country => {
        let el = document.createElement("option");
        el.textContent = country.name;
        el.value = country.code;
        selectEl.appendChild(el)
    });
}*/
import countries from '../../store/countries'
export default {
    name: 'StartPage',
    data(){
    return{
      options: countries
    };
  }
}
</script>

<style scoped>

</style>