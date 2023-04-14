const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks: [
        {
          text: "Lavare gli scogli",
          done: true
        },
        {
          text: "Asciugare gli scogli",
          done: false
        },
        {
          text: "Fare una focaccia",
          done: false
        },
      ],
      message: ""
    }
  },

  methods: {
    deleteTask(index, done){
      this.message = "";
      done ? this.tasks.splice(index, 1) : this.errorMessage()
    },

    errorMessage(){
      this.message = "Non hai completato la task!"
      setTimeout(() => {
        this.message = "";
      }, 5000);
    }
  }
}).mount("#app")