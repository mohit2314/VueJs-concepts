<template>
  <div class="card">
{{userName}}
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
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
    box-shadow: 0px 0px 9px  #000;
}
</style>