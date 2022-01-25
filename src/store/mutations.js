// import { createLogger } from "vuex";

export default {
    LOADING(state, status){
        state.isLoaded = status;
    },

    SORT_LIST_TODO(state,selected){
        if(selected === "Default"){
            return state.todos.sort(
                (a,b) =>new Date(a.date) - new Date(b.date)
            )
        }
        else if (selected === "A - Z"){
            return state.todos.sort((a, b) => {
                if (a.task.toUpperCase() < b.task.toUpperCase()) {
                    return -1;
                } else if (a.task.toUpperCase() > b.task.toUpperCase()) {
                    return 1;
                } else return 0;
            });
        }
        else if (selected === "Z - A") {
            return state.todos.sort((a, b) => {
                if (a.task.toUpperCase() < b.task.toUpperCase()) {
                    return 1;
                } else if (a.task.toUpperCase() > b.task.toUpperCase()) {
                    return -1;
                } else return 0;
            });
        } 
        else if (selected === "Completed") {
            const todo = state.todos.filter(todo => {
                if(todo.completed === true){
                    return todo
                }    
            });
            return todo
        } 
        else if (selected === "Unfinished") {
            const todo = state.todos.filter(todo => {
                return todo.completed === false;
            });
            return todo
        }
    },

    COMPLETED_TODO(state,id){
        state.todos.filter(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
        })
    },
    // COMPLETED_TODO(state,tasks){
    //     state.todos[tasks.id] = tasks;
    // },
    DELETE_TODO(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id);
        // return state.todos.splice(id, 1);
    },
    ADD_TODO(state, newTodo){
        state.todos.unshift(newTodo);
    },
    UPDATE_TODO(state, tasks){
        console.log({tasks});
        state.todos[tasks.id] = tasks;
    },

    GET_ID_TODO(state, id) {
        state.todos = [id];
    },
    SET_TODO(state, todos){
        state.todos = todos.sort(
            (a, b) => new Date(a.date) - new Date(b.date))
    },
    FILTERED_TODO(state, search){
        state.todos = state.todos.filter(todo => {
            return todo.task.toLowerCase().includes(search.trim().toLowerCase())
        })
    },

    SET_USER(state, users){
        state.users = users;
    },
    ADD_USER(state, newUser){
        state.users.unshift(newUser);
    },    
    LOGOUT_USER(state){
        state.users = {}
        
    },
}