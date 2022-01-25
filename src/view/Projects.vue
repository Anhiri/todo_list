<template>
  <div>
    <Loading/>
    <div class="project">
      <h1>Projects Page</h1>
      <div class="project-navbar">
        <div style="font-size: 20px">
          Total todos: {{ totalTodos }}
        </div>
        <div>
          <select v-model="selected" @change="sortListTodo" id="sort" class="sort">
            <option>Default</option>
            <option>A - Z</option>
            <option>Z - A</option>
            <option>Completed</option>
            <option>Unfinished</option>
          </select>
        </div>
      </div>
      <div class="project-task" v-if="listTodos.length > 0">
        <ul class="list-task">
          <li
            class="task"
            v-for="todo in listTodos"
            :key="todo.id"
            :class="todo.completed ? 'completed' : null"
              >
            <div class="p-item">
              <p class="item-text">
                {{ todo.task }}
              </p>
              <span class="item-text__time">
                {{ todo.date }} {{ todo.time }}
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                class="input-check"
                :checked="todo.completed"
                @click="completedTodo(todo)"
              />
              <!--@click="todo.completed = !todo.completed"-->
              <!--@change="COMPLETED_TODO(todo.id)-->
              <button class="btn btn-danger" @click="deleteTodo(todo.id)">
                DELETE
              </button>
              <button class="btn btn-primary" @click="getTodoUpdate(todo.id)">
                UPDATE
              </button>
            </div>
          </li>
        </ul>
        <!-- <p style="text-align: center">Not authorised</p> -->
      </div>
      <div class="no-task" v-else>
        <h1>Nothing Here</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'

import * as dayjs from "dayjs";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Projects",
  data(){
    return {
      selected: "Default"
    }
  },
  components:{
    Loading
  },
  // được chạy ngay khi được render

  formatDate(date) {
    return dayjs(date).format("DD-MM-YYYY HH:mm:ss");
  },
  computed: {
    ...mapGetters(["listTodos", "totalTodos", "listUsers"]),
  },
  created() {
    this.getTodos();
  },
  methods: {
    ...mapMutations(["COMPLETED_TODO", "SORT_LIST_TODO"]),

    // deleteTodo(id){
    //   this.$store.dispatch('deleteTodo',id);
    // },
    ...mapActions(["deleteTodo", "getTodos", "getIdTodo", "completedTodo","sortListTodo", "updateTodo"]),
    sortListTodo(){
        this.$store.commit('SORT_LIST_TODO', this.selected);
    },

    completedTodo(todo){
      const updateTodo = {
        id: todo.id,
        task: todo.task,
        completed: !todo.completed,
        date: todo.date,
        time: todo.time
      }
      this.updateTodo(updateTodo)
    },

    getTodoUpdate(id) {
      this.$router.push(`/addtask/${id}`);
      this.getIdTodo(id);
      // console.log(this.isUpdate);
    },
    
  },
};
</script>

<style scoped>
.project {
  margin: 0 15%;
}
.project-navbar {
  display: flex;
  justify-content: space-between;
  /* padding: 0 8%; */
}
.list-task {
  padding: 0;
  overflow-y: scroll;
  height: 300px;
}
.task {
  list-style: none;
  display: flex;
  background-color: #dfd9e9;
  margin-top: 10px;
  width: 97%;
  border-radius: 15px;
  font-size: 18px;
  /* margin-left: 10px; */
  padding: 10px;
  outline: none;
  justify-content: space-between;
  align-items: center;
}
.item-text {
  display: flex;
  margin-bottom: 0;
  /* flex-direction: column; */
  justify-content: flex-start;
}
.item-text__time {
  font-size: 12px;
  color: #9a9a9a;
}
.input-check {
  -ms-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  transform: scale(2);
  padding: 10px;
  justify-content: flex-end;
}
.task.completed {
  background: rgb(119, 218, 243);
}
.btn {
  font-size: 10px;
  margin-left: 10px;
  width: 50px;
  padding: 0.375rem 0;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(left, #fff, #e4e4e4);
    border: 1px solid #aaa;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb:active {
    background: linear-gradient(left, #22add4, #1e98ba);
  }

</style>