<template>
  <div>
    <navbar></navbar>
    <div class="row mt-5">
      <div class="col-md-1"></div>
      <div class="col-md-7">
        <h1 class="mb-5">Daily Report</h1>
        <p>{{ this.username }}</p>
        <span>=>{{ this.showData.task }}</span>
        <span>({{ this.showData.progress }}%)</span>
        <span
          >({{ this.showData.hour }}hrs)<br />
          <span
            >======================================================</span
          ></span
        >
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
    this.username = JSON.parse(localStorage.getItem('name'))
  },
  methods: {},
}
</script>

