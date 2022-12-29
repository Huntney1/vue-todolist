const { createApp } = Vue;

createApp({
    data() {
        return {
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
}).mount('#app')