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
  data: {
    selected: '',
  },

  methods: {
    submit() {
      fetch('report.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => console.error(error))
      let currentdate = new Date()
      let formatted_date =
        currentdate.getDate() +
        '-' +
        (currentdate.getMonth() + 1) +
        '-' +
        currentdate.getFullYear()
      const encoded = window.btoa(
        '{' +
          '"' +
          formatted_date +
          '"' +
          ':' +
          '{' +
          '"' +
          this.selected +
          '"' +
          '}'
      )
      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/report.json',
        type: 'PUT',
        headers: {
          Authorization: 'Bearer  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',
        },
        data: JSON.stringify({
          message: 'testing',
          content: encoded,
          sha: '15ebd3d2163911085dbd1a8237619cbb037284d7',
        }),
        success: function (result) {
          console.log(result.content)
          $('#response').append(JSON.stringify(result))
        },
        error: function (error) {
          console.log('error.responseJSON')
        },
      })
      const decoded = window.atob(encoded)
    },
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
