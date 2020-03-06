
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
      let headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': "http://127.0.0.1:5500"
      };
      this.$http.post('https://reqbin.com/sample/post/json', {}, headers).then(response => {
        console.log(response)
         }, response => {
           console.log(response)
           console.log("Error in request")
       });
    }
  }
})
