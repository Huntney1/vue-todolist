const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask:'',
            todolist:[
                'Fare la spesa',
                'Portare a spasso il cane',
                'Preparare la cena',
                'Riempire il frigorifero',
                'Fare l\'esercizio di Boolean',
                'Lavare la macchina',
                'Allenarsi',
            ],
        }
    },
    methods: {
        addTask()
        {
            this.todolist.push(this.newTask)
            this.newTask = '';
        },
        deleteTask(index)
        {
this.todolist.splice(index, 1);
        }
    },
}).mount('#app')