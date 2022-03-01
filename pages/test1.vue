<template>
  <div>
    <h1>Testing</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label class="inputa-label" for="exampleInputEmail1"
          >Email address</label
        >
        <input
          type="email"
          class="form-control inputa"
          id="exampleInputEmail1"
          placeholder="Enter email"
          required
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label class="inputa-label" for="exampleInputPassword1"
          >Phone number</label
        >
        <input
          type="number"
          class="form-control inputa"
          id="exampleInputPassword1"
          placeholder="Phone"
          v-model="phone"
        />
      </div>
      <div class="form-group">
        <label class="inputa-label" for="exampleInputPassword1"
          >Information</label
        >
        <textarea
          class="form-control inputa"
          aria-label="With textarea"
          v-model="information"
        ></textarea>
      </div>
      <button
        type="submit"
        style="font-weight: 600; padding: 0.8125rem 1.25rem"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      email: '',
      phone: '',
      information: '',
      sha: '',
    }
  },
  methods: {
    submit() {
      let date = new Date()
      let name = 'theint'
      var object = {
        date: {
          name: {
            Email: this.email,
            Phone: this.phone,
            Information: this.information,
          },
        },
      }
      console.log('object', object)

      const data = JSON.stringify(object)
      console.log('data', data)

      const encoded = window.btoa(data)
      //  console.log('encoded data',encoded)
      const decoded = window.atob(encoded)
      //   console.log('decoded data',decoded)

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/scm-report-json/contents/AAAAAAA.json',
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
      console.log('sha', this.sha)

      $.ajax({
        url: 'https://api.github.com/repos/Theint-Haymann-Hnin/scm-report-json/contents/AAAAAAA.json',
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
          $('#response').append(JSON.stringify(result))
        },
        error: function (error) {
          console.log('error.responseJSON')
        },
      })
    },
  },
}
</script>
 