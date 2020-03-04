
const app = new Vue({
  el: '#app',
  name: 'index',
  data: {

  },
  mounted() {
   
  },
	created: function() {
		console.log("Iniciado")
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.sources = response.data.sources;
        console.log(response.data)
      });
	},
  methods: {
    sendRequestCredit(){
      this.$http.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {}).then(response => {
        console.log(response)
         }, response => {
           console.log(response)
           console.log("Error in request")
       });
    }
  }
})
