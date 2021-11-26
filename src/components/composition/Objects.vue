<template>
  <div class="card">
<div>Empoyee Id:{{employee.id}}</div>
<div>Name:{{employee.name}}</div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {

    setup(){
        const employee=ref({
            id:'123',
            name:'Mohit'
        })

        setTimeout(function(){
            employee.value.id="abc";
            employee.value.name="Patel"
        },2000)

return {employee}
    }

}
</script>

<style>

</style>