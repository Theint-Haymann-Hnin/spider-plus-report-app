<template>
  <div style="overflow: hidden">
    <navbar></navbar>
    <div class="row mt-5">
      <div class="col-md-1">
        <router-link to="/" class="text-white ml-1"
          ><button class="show-btn btn btn-success btn-sm">Back</button>
        </router-link>
      </div>
      <div class="col-md-7">
        <h1 class="mb-5">Daily Report</h1>
        <p>{{ this.username }}</p>
        <div v-for="(report, index) in scmreport" :key="index" class="mb-2">
          <span>=>{{ report.task }}</span>
          <span>({{ report.progress }})</span>
          <span>({{ report.hour }})<br /> </span>
        </div>
        <span>======================================================</span>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Navbar from './Navbar.vue'

export default {
  name: 'scmreportlistPage',
  components: {
    Navbar,
  },
  data() {
    return {
      username: '',
    }
  },

  computed: {
    ...mapState({
      showData: (state) => state.currentreport,
    }),
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem('login-name'))
    this.scmreport = JSON.parse(localStorage.getItem('data'))
  },
}
</script>