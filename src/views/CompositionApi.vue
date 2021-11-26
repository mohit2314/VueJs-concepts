<template>
  <div class="card">
{{userName}}
  </div>
<br>
  <div class="card">
<div><h3> Working with Objects</h3></div>
<objects></objects>
  </div>
</template>

<script>
import {ref} from 'vue';
import Objects from "@/components/composition/Objects.vue"
export default {
    components:{
Objects
    },
setup(){
   const userName=ref('Mohit');

    setTimeout(function(){
        userName.value="Patel"
    },2000)

    return {userName}
}
}
</script>

<style>

.card{
    border: 1px solid #dedede;
    padding: 16px;
    box-shadow: 0px 0px 2px  #000;
}
</style>