const { createApp, ref } = Vue

const app = createApp({
  data() {
    return {
        todos: [],
        todoInput: ''
    }
  },
  methods : {
    addTodo() {
        if (this.todoInput !== ''){
            this.todos.push({
                id: this.todos.length + 1,
                content: this.todoInput,
                state: false
            });
            this.todoInput = ''
        }
        else {
            alert ("please fill input first!")
        }
    },
    changeState(index) {
        this.todos[index].state = !this.todos[index].state
    }
  }
})

app.mount('#app')