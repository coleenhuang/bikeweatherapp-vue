<template>
    <main>
        <h2>When are you planning on using your bike?</h2>
        <form id='datetime'>
        <select id="day">
            <option value="now">Right now</option>
            <option value=0>Later today</option>
            <option value=1>Tomorrow</option>
            <option value=2>The day after tomorrow</option>
        </select>
        <select id="time"></select>
        <button type='submit'>Submit</button>
    </form>
    </main>
</template>

<script>
export default {
    name: 'TimePage'
}
</script>