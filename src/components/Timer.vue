<template>
  <div>
    <h3>TIMER</h3>
    <br />
    <br />
    <div>
      <label for="time">Insert Time for counter (secs)</label>
      <input id="time" type="number" v-model="time" />
    </div>

    <button @click="startTimer">start timer</button>
    <div>
      <span>{{ mins }} mins</span> : <span>{{ secs }} secs</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mins: null,
      secs: null,
      time: 0,
    };
  },

  computed: {
    createTimer() {
      this.tick();
      setInterval(this.tick, 1000);
    },
    tick() {
      var timerInterval = setInterval(() => {
        this.mins = Math.trunc(this.time / 60)
          .toString()
          .padStart(2, "0");
        this.secs = this.time % 60;

        if (this.time === 0) {
          clearInterval(timerInterval);
        }
        this.time--;

      }, 1000);
    },
  },
  methods: {
    startTimer() {
      this.createTimer;
    },
  },
};
</script>

<style></style>
