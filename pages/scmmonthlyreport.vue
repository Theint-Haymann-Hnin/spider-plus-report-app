<template>
  <div>
    <navbar></navbar>
    <div class="row mt-5">
      <div class="col-md-1">
        <router-link to="/" class="text-white ml-1"
          ><button class="show-btn btn btn-success btn-sm">Back</button>
        </router-link>
      </div>
      <div class="col-md-7">
        <h1 class="mb-5">Monthly Report</h1>
        <p>{{ this.data }}</p>
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
      data: '',
    }
  },
  computed: {
    ...mapState({
      report: (state) => state.fetchdata,
    }),
  },
  mounted() {
    this.data = localStorage.getItem('FETCH DATA', this.DATA)
    console.log('GET FETCH DATA', this.data)
  },
}
</script>

