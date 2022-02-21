<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="box col-md-6">
        <p class="ttl">SPIDER<span class="red-word">PLUS</span></p>
        <p class="text">Please Select Name to write report.......</p>
        <select v-model="selected" class="form-select form-control">
          <option>Select Name</option>
          <option value="Zaw Khant Maung">Zaw Khant Maung</option>
          <option value="Min Aung Paing">Min Aung Paing</option>
          <option value="Theint Haymann Hnin">Theint Haymann Hnin</option>
        </select>
        <button type="button" class="btn btn-success mt-5" @click="submit()">
          Submit
        </button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {},
  data() {
    return {
      selected: '',
      getname: '',
    }
  },
  methods: {
    submit() {
      localStorage.setItem('login-name', JSON.stringify(this.selected))
      this.getname = localStorage.getItem('login-name')
      this.$router.push({ name: 'scmreport', params: { value: this.selected } })
    },
    redirectPage() {
      const username = localStorage.getItem('login-name')
      if (!username) return
      this.$router.push({ name: 'scmreport', params: { value: username } })
    },
  },
  mounted() {
    this.redirectPage()
  },
}
</script>
<style>
.container .row {
  margin-top: 50px;
}
.container .row .box {
  border: 3px solid cadetblue;
  height: 500px;
  border-radius: 20px;
}
.container .ttl {
  font-size: 50px;
  font-family: 'Fjalla One', sans-serif;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}
.container .ttl .red-word {
  color: #e34234;
}
.container .box {
  width: 500px;
  margin: 50px auto;
}
.text {
  text-align: center;
  font-size: 20px;
  margin-bottom: 50px;
}
</style>
