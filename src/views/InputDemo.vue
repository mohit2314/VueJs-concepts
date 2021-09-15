<template>
<div style="width:300px;">
<lv-input label="mohit" v-model="localValue"  :clearable="true"  :iconRight="'light-icon-chevron-down'"
  />
</div>
  
</template>

<script>
import LvInput from '@/components/input';
export default {
components:{
    LvInput
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