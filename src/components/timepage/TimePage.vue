<template>
    <main>
        <h2>When are you planning on using your bike?</h2>
        <TimeForm />
    </main>
</template>

<script>
import TimeForm from './TimeForm'

export default {
    name: 'TimePage',
    components:{TimeForm},
    data(){
        return{
            later: false,
        }
    },
    methods: {
        //picktime: function(event){
          //  let vm = this;
            //this.day = vm.selected
           // console.log(this.day)
        //}
    }
}
</script>