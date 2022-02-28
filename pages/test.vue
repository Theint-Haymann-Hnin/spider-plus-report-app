<template>
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore possimus
    velit accusamus at maxime? Omnis, rerum ipsa distinctio, vel eum labore
    soluta alias quasi et quo nam laudantium cumque est? <br />
    <button class="btn btn-success" @click="testing()">Testing</button
    ><br /><br />
    <button class="btn btn-success" @click="reporttesting()">
      Report Testing
    </button>
    <div>{{ this.result }}</div>
    <br /><br />
    <div>{{ this.result[0] }}</div>
    <div>{{ this.result[1] }}</div>
    <div>{{ this.result[2] }}</div>

    <p>==================</p>
    <div>{{ this.report[0] }}</div>
    <!-- <div>{{ this.report }}</div> -->
    <p>==================</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Test',
  data() {
    return {
      result: '',
      report: '',
    }
  },
  methods: {
    testing() {
      axios.get('/data.json').then((response) => {
        this.result = response.data
        // console.log('rrrrrr',this.result);
      })
    },
    reporttesting() {
      axios.get('/report.json').then((response) => {
        this.report = response.data
        console.log(this.report[0])
      })
    },
  },
}
</script>
 