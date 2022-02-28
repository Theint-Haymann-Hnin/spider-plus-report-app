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
        <h1 class="mb-5">Morning Report</h1>
        <p>{{ this.username }}</p>
        <div class="mb-2" v-for="(morningreport, index) in fff" :key="index">
          <span
            >・完了チケット一覧<br />=>{{ morningreport.input01 }}<br /><br />
            ・対応中チケット一覧 ％<br />=>{{ morningreport.input02
            }}<br /><br />
            ・困っていること/レビューしてほしいもの<br />=>{{
              morningreport.input03
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
  name: 'morningreportlistPage',
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
      showMorningData: (state) => state.morningreport,
    }),
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem('login-name'))
    this.fff = JSON.parse(localStorage.getItem('Morningreport') || '[]')
  },
  methods: {},
}
</script>
<style>
</style>