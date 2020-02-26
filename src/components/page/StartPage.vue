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
              <select id="country" name="country" class="form-control">
              </select>
            </label>
            <button type='submit' class='location-button'>Submit</button>
        </form>
    </main>
</template>

<script>
export default {
    name: 'StartPage',
}
</script>

<style scoped>

</style>