<template>
  <div>
    <br />
    <h4>MOdel value in child component</h4>
    {{ modelValue }}
    <br />
    <button @click="$emit('update:modelValue', modelValue + 1)">
      Increase MOdel value
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
    },
  },
};
</script>

<style></style>
