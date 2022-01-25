import axios from "axios"

// const baseURL = "https://61a0b7a86c3b400017e69a00.mockapi.io/defaultListTasks"
// const userURL = "https://61dbbaf04593510017aff9a0.mockapi.io/users"

export default{
    // async completedTodo({commit},id){
    //     try{
    //         await axios.put(`https://61dbbaf04593510017aff9a0.mockapi.io/listTask/${id}`);
    //         commit("COMPLETED_TODO", id);
    //     }
    //     catch(err){
    //         console.log('error')
    //     }
    // },
    async completedTodo({commit},item){
        try{
            await axios.put(`https://61dbbaf04593510017aff9a0.mockapi.io/listTask/${item.id}`, item.completed);
            commit("COMPLETED_TODO", item);
        }
        catch(err){
            console.log('error')
        }
    },
    
    async deleteTodo({commit},id){
        try {
            await axios.delete(`https://61dbbaf04593510017aff9a0.mockapi.io/listTask/${id}`);
            commit("DELETE_TODO", id)
        }
        catch (err) {
            console.log('error')
        }
    },
    async addTodo({commit}, newTodo){
        try {
            await axios.post(`https://61dbbaf04593510017aff9a0.mockapi.io/listTask/`, newTodo);
            commit("ADD_TODO", newTodo)
        }
        catch (err) {
            console.log('error')
        }
    },
    async updateTodo({commit}, item){
        try{
            await axios.put(`https://61dbbaf04593510017aff9a0.mockapi.io/listTask/${item.id}`, item);
            console.log({item})
            commit("UPDATE_TODO", item);
        }
        catch (err) {
            console.log(err)
        }
    },

    async getIdTodo({commit}, id){
        try {
            const response = await axios.get(`https://61dbbaf04593510017aff9a0.mockapi.io/listTask/${id}`)
            commit('GET_ID_TODO', response.data)
        }
        catch(error){
            console.log('error')
        }
    },
    async getTodos({commit}){
        try {
            const response = await axios.get("https://61dbbaf04593510017aff9a0.mockapi.io/listTask")
            commit('SET_TODO', response.data)
        }
        catch(error){
            console.log('error')
        }
    },

    async getUsers({commit}){
        try {
            const response = await axios.get("https://61dbbaf04593510017aff9a0.mockapi.io/users")
            commit('SET_USER', response.data)
        }
        catch(error){
            console.log('error')
        }
    },
    async addUser({commit}, newUser){
        try {
            await axios.post(`https://61dbbaf04593510017aff9a0.mockapi.io/users`, newUser);
            commit("ADD_USER", newUser)
            console.log(newUser)
        }
        catch(error){
            console.log('error')
        } 
    },
    async logIn ({commit},user){
        try {
            const result = await axios.get(`https://61dbbaf04593510017aff9a0.mockapi.io/users?email=${user.email}&password=${user.password}`);
            commit("SET_USER", result.data);
            console.log(result)
            }
        catch(error){
            console.log('error')
        } 
    },

    logoutUser({commit}){
        commit("LOGOUT_USER")
    }

}
















    // LOGIN:({commit}, payload)=> {
    //     return new Promise((resolve, reject)=>{
    //         axios.post(`login check`, payload)
    //             .then(({data, status}) => {
    //                 if(status === '200'){
    //                     resolve(true);
    //                     return data;
    //                 }
    //             })
    //             .catch(error =>{
    //                 reject(error);
    //             })
    //             commit("SET_USER")
    //     })
    // },