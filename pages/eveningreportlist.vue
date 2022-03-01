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
        <h1 class="mb-5">Evening Report</h1>
        <p>{{ this.username }}</p>
        <div class="mb-2" v-for="(eveningreport, index) in ggg" :key="index">
          <span
            >・完了チケット一覧<br />=>{{ eveningreport.input1 }}<br /><br />
            ・対応中チケット一覧 ％<br />=>{{ eveningreport.input2
            }}<br /><br />
            ・困っていること/レビューしてほしいもの<br />=>{{
              eveningreport.input3
            }}</span
          >
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Navbar from './Navbar.vue'

export default {
  name: 'eveningreportlistPage',
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
      showEveningData: (state) => state.eveningreport,
    }),
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem('login-name'))
    this.ggg = JSON.parse(localStorage.getItem('Eveningreport') || '[]')
  },
  methods: {},
}
</script>
<style>
</style>