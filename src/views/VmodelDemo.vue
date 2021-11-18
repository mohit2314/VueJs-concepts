<template>
<br>
<br>
<h2>V-model for input shortand</h2>
<input type="number" v-model="number1">
<button @click="number1++">Increase number-1</button> <h4>{{number1}}</h4>
<br>
<br>
<h2>V-model for input: long Notation</h2>
  <input type="number" :value="number" @input="number= $event">
  <button @click="number=number+1">Press me</button>
  <h2>{{number}}</h2>
<br>
<br>

<div>
    <h3>Vue-3 V-Model in Components</h3>
<child-component v-model="mValue"/>
{{mValue}}

</div>


</template>

<script>
import ChildComponent from "@/components/vmodel/ChildComponent.vue";
export default {
    components:{
        ChildComponent
    },
data(){
    return {
        number:0,
        number1:0,
        mValue:0
    }
}
}
</script>

<style>

</style>