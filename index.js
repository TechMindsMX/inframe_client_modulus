
const app = new Vue({
  el: '#app',
  name: 'index',
  data: {

  },
  mounted() {
   
  },
	created: function() {
		console.log("Iniciado")
    this.$http.get('http://localhost:8080/businessEntity/getAllActiveEmployeesForCompany?corporateId=1')
      .then(response => {
        this.sources = response.data.sources;
        console.log(response.data)
      });
	},
  methods: {
    sendRequestCredit(){
      console.log("Seding request")
      this.$http.post('http://localhost:8080/creditRest/save', {}).then(response => {
        console.log(response)
         }, response => {
           console.log(response)
           console.log("Error in request")
       });
    }
  }
})
