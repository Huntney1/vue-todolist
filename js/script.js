const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            todolist: [
                {
                    text:'Fare la spesa',
                },
                {
                    text:'Portare a spasso il cane',
                },
                {
                    text:'Preparare la cena',
                },
                {
                    text:'Riempire il frigorifero',
                },
                {
                    text:'Fare l\'esercizio di Boolean',
                },
                {
                    text:'Lavare la macchina',
                },
                {
                    text:'Allenarsi',
                },
            ],
        }         
      ,  }
    },
    methods: {
        addTask() {
            this.todolist.push(this.newTask)
            this.newTask = '';
        },
        deleteTask(index) {
            this.todolist.splice(index, 1);
        }
    },
}).mount('#app')