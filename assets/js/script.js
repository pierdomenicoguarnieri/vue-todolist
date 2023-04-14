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

  }
}).mount("#app")