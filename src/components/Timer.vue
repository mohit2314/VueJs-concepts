<template>
  <div class="pg-container">
    <h3>TIMER</h3>
    <br />
    <br />
    <!-- <div>
      <label for="time">Insert Time for 1st counter (secs)</label>
      <input id="time" type="number" v-model="time" />
    </div><br> -->
    <div>Section-1 Timer : {{ time1 }} secs</div>
    <br />
    <div>Section-2 Timer : {{ time2 }} secs</div>
    <br />
    <div>Section-3 Timer : {{ time3 }} secs</div>
    <br />

    <button @click="startTimer(time1)">start 1st timer</button>
    <br />
    <br>
    <button @click="startTimer(time2)">start 2nd timer</button>

    <div style="text-align:center;">
      <span>{{ mins }} mins</span> : <span>{{ secs }} secs</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mins: 0,
      secs: 0,
      time1: 10,
      time2: 20,
      time3: 15,
      timer: null,
    };
  },

  computed: {},
  methods: {
    startTimer(time) {
      clearInterval(this.timer);
      //to avoid 1 sec delay in the start of timer
      this.tick(time);
      //make timer global variable
      this.timer = setInterval(this.tick(time), 1000);
    },
    tick(time) {
      var localTime = time;

      this.timer = setInterval(() => {
        this.mins = Math.trunc(localTime / 60)
          .toString()
          .padStart(2, 0);
        this.secs = localTime % 60;
        if (localTime === 0) {
          clearInterval(timerInterval);
        }

        // counter should be decremented after checking the condition of clearInterval to avoid the condition of stopping counter at 1sec instead of 0 sec
        localTime--;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.pg-container {
  padding: 24px;
}
</style>
