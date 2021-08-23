<template>
<div style="width:300px;">
<m-input :label="'mohit'" v-model="localValue" :clearable="true"  :iconRight="'light-icon-chevron-down'"
  >patel </m-input>
</div>
  
</template>

<script>
import MInput from '@/components/input';
export default {
components:{
    MInput
},
data(){
    return{
        labelProp:"Input Label",
        localValue:"patel"
}
}
}
</script>

<style>

</style>