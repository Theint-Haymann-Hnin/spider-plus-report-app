<template>
  <div>
    <navbar></navbar>
    <!-- scm report (12 to 5) -->
    <!-- <div v-if="this.currenttime > 8 && this.currenttime < 10"> -->
      <div>
      <div class="row mt-5">
        <div class="col-md-12">
         
            <router-link to="/scmreportlist" class="text-white">
             <button class="show-btn btn btn-success float-right">Show Report List </button></router-link
            >
        </div>
      </div>
      <div class="title"><span class="ml-5">Daily Report</span></div>
      <div class="row mt-3">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <form action="">
            <div class="form-group" v-for="(input, k) in inputs" :key="k">
              <div class="row mt-3">
                <div class="col-md-5">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Task"
                    v-model="inputs.task"
                  />
                  <br />
                </div>
                <div class="col-md-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Finished (%)"
                    v-model="inputs.progress"
                  />
                </div>
                <div class="col-md-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Hours"
                    v-model="inputs.hour"
                  />
                </div>
                <div class="col-md-2">
                  <button
                  type="button"
                  class="btn btn-danger"
                  @click="remove(k)"
                  v-show="k || (!k && inputs.length > 1)"
                >
                  -
                </button>
                <button
                  type="button"
                  class="btn btn-success ml-2"
                  @click="add(k)"
                  v-show="k == inputs.length - 1"
                >
                  +
                </button>
                </div>
              </div>
              <span> </span>
            </div>
            <button
              class="btn btn-success"
              @click.prevent="addReport()"
              :disabled="inputs.task && inputs.progress && inputs.hour === ''"
            >
              Create
            </button>
          </form>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <p>{{ this.name }}</p>
          <div v-for="(report, index) in reports" :key="index" class="mb-2">
            <span>=>{{ inputs.task }}</span>
            <span>({{ inputs.progress }}%)</span>
            <span>({{ inputs.hour }}hrs)</span
            ><button
              class="btn btn-danger btn-sm ml-3"
              @click.prevent="removeReport(index)"
            >
              -
            </button>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <!-- scm report -->
    <!-- morning report (8 to 11)-->
    <div class="row mt-5" v-if="this.currenttime > 13 && this.currenttime < 24">
      <!-- <div class="row mt-5" > -->
      <div class="col-md-3"></div>
      <div class="form col-md-6">
        <div class="card">
          <div class="card-header">Morning Report</div>
          <div class="card-body">
            <div class="form-group mb-4">
              <label for="">今日やること(today job)</label>
              <input type="text" class="form-control" v-model="input01" />
            </div>
            <div class="form-group mb-4">
              <label for="">困っていること(any trouble)</label>
              <input type="text" class="form-control" v-model="input02" />
            </div>
            <div class="form-group mb-4">
              <label for="">その他共有など(any sharing)</label>
              <input type="text" class="form-control" v-model="input03" />
            </div>
            <button
              class="btn btn-success"
              @click="createMorningreport()"
              :disabled="input01 && input02 && input03 === ''"
            >
              Create
            </button>
          </div>
        </div>
        <div class="mt-5">
          <p>{{ this.name }}</p>
          <div
            class="mb-2"
            v-for="(morningreport, index) in fff"
            :key="index"
          >
            <p>Morning report</p>
            <span
              >・今日やること<br />=>{{ morningreport.input01 }}<br /><br />
              ・困っていること<br />=>{{ morningreport.input02 }}<br /><br />
              ・その他共有など<br />=>{{ morningreport.input03 }}</span
            >
          </div>
        </div>
      </div>
      <div class="col-md-3">
          <router-link to="/morningreportlist" class="text-white"><button class="show-btn btn btn-success float-right"> Show Report List </button>
           </router-link
          >
      </div>
    </div>
    <!-- morning report -->
    <!-- evening report (1 to 3) -->
    <div class="row mt-5" v-if="this.currenttime > 13 && this.currenttime < 24">
      <!-- <div class="row mt-5"> -->
      <div class="col-md-3"></div>
      <div class="form col-md-6">
        <div class="card">
          <div class="card-header">Evening Report</div>
          <div class="card-body">
            <div class="form-group mb-4">
              <label for="">完了チケット一覧 (done job list)</label>
              <input type="text" class="form-control" v-model="input1" />
            </div>
            <div class="form-group mb-4">
              <label for=""
                >対応中チケット一覧 ％ (doing job show percentage%)</label
              >
              <input type="text" class="form-control" v-model="input2" />
            </div>
            <div class="form-group mb-4">
              <label for=""
                >困っていること/レビューしてほしいもの (any trouble/ any
                review)</label
              >
              <input type="text" class="form-control" v-model="input3" />
            </div>
            <button
              class="btn btn-success"
              @click="createEveningreport()"
              :disabled="input1 && input2 && input3 === ''"
            >
              Create
            </button>
          </div>
        </div>
        <div class="mt-5">
          <p>{{ this.name }}</p>
          <div
            class="mb-2"
            v-for="(eveningreport, index) in ggg"
            :key="index"
          >
            <p>Evening report</p>
            <span
              >・完了チケット一覧<br />=>{{eveningreport.input1}}<br /><br />
              ・対応中チケット一覧 ％<br />=>{{eveningreport.input2}}<br /><br />
              ・困っていること/レビューしてほしいもの<br />=>{{
              eveningreport.input3
              }}</span
            >
          </div>
        </div>
      </div>
      <div class="col-md-3">
          <router-link to="/eveningreportlist" class="text-white"> <button class="show-btn btn btn-success float-right"> Show Report List </button>
           </router-link
          >
         <!-- {{this.ggg}} <br> -->
      <!-- <br> {{this.ggg[0]}} -->
      </div>
    </div>
    <!-- evening report -->
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'scmreportpage',
  components: {
    Navbar,
  },
  asyncData({ params }) {
    return {
      name: params.value,
    }
  },
  beforeMount() {
    this.getTime()
  },

  beforeCreate() {
    window.history.pushState(null, null, window.location.href)
    window.onpopstate = function () {
      window.history.go(1)
    }
  },
  created() {
     this.name = JSON.parse(localStorage.getItem('login-name'))
  },

  data() {
    return {
      inputs: [
        {
          task: '',
          progress: '',
          hour: '',
        },
      ],
      input: '',
      sha: '',
      reports: [],
      report: '',
      name: '',
      input01: '',
      input02: '',
      input03: '',
      sha: '',
      morningreports: [],
      input1: '',
      input2: '',
      input3: '',
      sha1: '',
      eveningreports: [],
      eveningreport: '',
      currenttime: '',
      ggg: '',
      fff: ''
    }
  },
  mounted(){
     this.ggg = JSON.parse(localStorage.getItem('Eveningreport') || '[]')
      this.fff = JSON.parse(localStorage.getItem('Morningreport') || '[]')
  },
  methods: {
    getTime: function () {
      let currentdate = new Date()
      this.currenttime = currentdate.getHours()
      console.log(this.currenttime)
    },
    getData() {
      console.log(this.name)
    },
    add() {
      this.inputs.push({
        task: '',
        progress: '',
        hour: '',
      })
    },
    remove(index) {
      this.inputs.splice(index, 1)
    },
    addReport() {
      this.reports.push(this.inputs)
      console.log('scmreport', this.reports)
      // console.log('JSON', JSON.stringify(this.reports))
       this.name = JSON.parse(localStorage.getItem('login-name'))
       console.log('name',this.name)

      // const data =JSON.stringify(object);
      // console.log('data',data)
     const result =   JSON.stringify(this.reports.map(res=>({task:res.task, progress:res.progress,hour:res.hour}))
    .reduce((map, obj, i) => (map[i] = obj, map), {}))
    console.log('result',result);


    localStorage.setItem('data', result)



    // localStorage.setItem('data1', JSON.stringify(this.reports))



     const data =localStorage.getItem('data')
     console.log('ddddddddddddd', data)
      // const data ={date: 
      // {name: localStorage.getItem('data')}}
     

      const encoded = window.btoa(unescape(encodeURIComponent(data)));
        console.log('encoded data',encoded) 

      const decoded = window.atob(unescape(encodeURIComponent(encoded)));
      console.log('decoded data',decoded)

      this.$store.commit('storeReport', this.inputs)
      // fetch('report.json')
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data)
      //   })
      //   .catch((error) => console.error(error))
      // localStorage.setItem('name', JSON.stringify(this.name))
      let currentdate = new Date()
      let formatted_date =
        currentdate.getDate() +
        '-' +
        (currentdate.getMonth() + 1) +
        '-' +
        currentdate.getFullYear()

         $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/report.json',
        type: 'GET',
        headers: {
          Authorization: 'Bearer  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',
        },
        datatype: 'xml',
        success: function (result) {
          localStorage.setItem('sha', result.sha)
          $('#response').append(JSON.stringify(result))
        },
        error: function (error) {
          console.log(error.responseJSON)
        },
      })
      this.sha = localStorage.getItem('sha')

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/report.json',
        type: 'PUT',
        headers: {
          Authorization: 'Bearer  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',
        },
        data: JSON.stringify({
          message: 'update json',
          content: encoded,
          sha: this.sha,
        }),
        success: function (result) {
          console.log(result.content)
          $('#response').append(JSON.stringify(result))
        },
        error: function (error) {
          console.log('error.responseJSON')
        },
      })
    },

    removeReport(index) {
      this.reports.splice(index, 1)
    },
    createMorningreport() {
      this.morningreports.push({
        input01: this.input01,
        input02: this.input02,
        input03: this.input03,
      })
        localStorage.setItem('Morningreport', JSON.stringify(this.morningreports))

       this.fff = JSON.parse(localStorage.getItem('Morningreport') || '[]')
      this.$store.commit('storeMorningReport', [
        this.input01,
        this.input02,
        this.input03,
      ])
      console.log(this.morningreports)
      this.input01 = ''
      this.input02 = ''
      this.input03 = ''
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
          this.name +
          ':' +
          '{' +
          '"today job"' +
          ':' +
          this.input01 +
          ',' +
          '"any trouble"' +
          ':' +
          this.input02 +
          ',' +
          '"any sharing"' +
          ':' +
          this.input03 +
          '}' +
          '}' +
          '}'
      )
      console.log(encoded)

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/morningreport.json',
        type: 'GET',
        headers: {
          Authorization: 'Bearer  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',
        },
        datatype: 'xml',
        success: function (result) {
          localStorage.setItem('sha', result.sha)
          $('#response').append(JSON.stringify(result))
        },
        error: function (error) {
          console.log(error.responseJSON)
        },
      })
      this.sha = localStorage.getItem('sha')

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/morningreport.json',
        type: 'PUT',
        headers: {
          Authorization: 'Bearer  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',
        },
        data: JSON.stringify({
          message: 'update json',
          content: encoded,
          sha: this.sha,
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
    createEveningreport() {
      this.eveningreports.push({
        input1: this.input1,
        input2: this.input2,
        input3: this.input3,
      })
      localStorage.setItem('Eveningreport', JSON.stringify(this.eveningreports))

       this.ggg = JSON.parse(localStorage.getItem('Eveningreport') || '[]')
         

      this.$store.commit('storeEveningReport', [
        this.input1,
        this.input2,
        this.input3,
      ])
      this.input1 = ''
      this.input2 = ''
      this.input3 = ''
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
          this.name +
          ':' +
          '{' +
          '"done job list"' +
          ':' +
          this.input1 +
          ',' +
          '"doing job show percentage(%)"' +
          ':' +
          this.input2 +
          ',' +
          '"any trouble/ any review"' +
          ':' +
          this.input3 +
          '}' +
          '}' +
          '}'
      )
      console.log(encoded)

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/eveningreport.json',
        type: 'GET',
        headers: {
          Authorization: 'Bearer  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',
        },
        datatype: 'xml',
        success: function (result) {
          localStorage.setItem('sha', result.sha)
          $('#response').append(JSON.stringify(result))
        },
        error: function (error) {
          console.log(error.responseJSON)
        },
      })
      this.sha1 = localStorage.getItem('sha')

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/spider-plus-report-app/contents/static/eveningreport.json',
        type: 'PUT',
        headers: {
          Authorization: 'Bearer  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',
        },
        data: JSON.stringify({
          message: 'update json',
          content: encoded,
          sha: this.sha1,
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
.title {
  font-size: 20px;
  background-color: cadetblue;
  padding: 15px 0;
  color: white;
  width: 1165px;
  margin: 30px auto;
}
.show-btn {
  margin-right: 180px;
}
.card-header {
  background-color: cadetblue;
  color: white;
  font-size: 20px;
}
label {
  font-size: 17px;
}
</style>
