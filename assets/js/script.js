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
      ]
    }
  },

  methods: {
    deleteTask(index){
      console.log("Press", index)
      this.tasks.splice(index, 1)
    }
  }
}).mount("#app")