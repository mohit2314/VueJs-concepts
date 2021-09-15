<template>
  <div class="isv-container">
<usage />
<br>
<Summary />
  </div>
</template>

<script>
import Usage from '@/components/Usage.vue';
import Summary from '@/components/Summary.vue';
export default {
components:{
    Usage,
    Summary
}
}
</script>

<style lang='scss'>
.isv-container{
    padding: 24px;
    background: #F2F7FA;
}
</style>