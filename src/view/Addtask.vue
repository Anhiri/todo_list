<template>
  <div>
    
    <div class="content-addtask">
      <div v-if="isUpdated(idUpdate)" class="update-page">
        <Loading/>
        <h1 class="addTask__top-title">Update Page</h1>
        <form class="update-form" 
              v-for="item in listTodos"
              :key="item.id">
          <label class="update-text">Update Todo:</label>
          <input type="text" class="input-form" v-model="task" :placeholder="item.task"
                :class="errors.length ? 'input_error' : null">
          <!-- <p class="add_error" v-if="task.length==0">Todo name cannot be empty</p> -->
          <p class="add_error" v-for="error in errors" :key="error.id">{{error}}</p>
          <label class="update-text">Update Date Complete:</label>
          <input type="date" class="input-form" v-model="item.date" value="item.date">
          <label class="update-text">Update Time Complete:</label>
          <input type="time" class="input-form" v-model="item.time">
          
          <div class="update-button" >
            <button @click.prevent="updateTask(item.id, item.completed)" class="btn btn-danger">Update</button>
            <button @click.prevent="cancel" class="btn btn-primary">Cancel</button>
        </div>
        </form>
      </div>
      <div class="addtask-page" v-else>
        <h1 class="addTask__top-title">Add Task Page</h1>
        <form class="addtask-form">
        <label class="addtask-text">Todo:</label>
        <input type="text" class="input-form" 
              placeholder="Enter todo here" 
              v-model="task"
              :class="errors.length ? 'input_error' : null">
        <!-- <p class="add_error" v-if="task.length==0">Todo name cannot be empty</p> -->
        <p class="add_error" v-for="error in errors" :key="error.id">{{error}}</p>
        <label class="addtask-text">Date Complete:</label>
        <input type="date" class="input-form" v-model="curdate">
        <label class="addtask-text">Time Complete:</label>
        <input type="time" class="input-form" v-model="curtime">

        <div class="check-complete">
          <label class="addtask-text">Completed:</label>
          <input type="checkbox" class="input-check" v-model="completed">
        </div>
        <div class="addtask-button" >
          <button @click="addTask" class="btn btn-danger">Submit</button>
          <button @click="resetForm" class="btn btn-primary">Reset</button>
      </div>
    </form> 
    </div>
  </div>
    <!-- <button @click="currentDate">avv</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '../components/Loading.vue'
import {v4} from 'uuid'
export default {
    name:'Addtask',
    data(){
      return{
        errors:[],
        task:"",
        date:"",
        time:"",
        idUpdate: "",
      }
    },
    components:{
      Loading,
    },
    watch: {
    "$route.params.id": {
      handler: function (id) {
        this.idUpdate = id;
      },
      deep: true,
      immediate: true,
    },
  },

  computed: {
    ...mapGetters(['listTodos']),

    isUpdated() {
      return (idUpdate) => idUpdate > 0;
    },

  },
  created() {
    const current = new Date()
    const curMonth = current.getMonth() < 10 ? "0" + (current.getMonth()+1) : current.getMonth()+1
    const curDay = current.getDate() < 10 ? "0" + current.getDate() : current.getDate()
    const curHours = current.getHours()<10 ? "0" + current.getHours() : current.getHours();
    const curMinutes =  current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes();
    const curSeconds = current.getSeconds() < 10 ? "0" + current.getSeconds() : current.getSeconds();
    this.curdate = current.getFullYear() +'-'+ curMonth +'-' + curDay;
    this.curtime = curHours + ':' + curMinutes + ':' + curSeconds;
    console.log(this.time);

  },
    methods:{
      ...mapActions(['addTodo','updateTodo', 'getTodos']),

      addTask(){
        this.errors = []
        if(this.task.length == 0){
          this.errors.push('Todo name cannot be empty.');
        }
        else{
          this.addTodo({
            id:v4(),
            task: this.task,
            date: this.curdate,
            time: this.curtime,
            completed: this.completed,
          })
          this.getTodos();
          this.$router.push("/projects"); 
        }    
      },
      async updateTask(id, completed) {
        this.errors = []
        if(this.task.length == 0){
          this.errors.push('Todo name cannot be empty.');
        }
        else{
          this.updateTodo({
            task: this.task,
            date: this.date,
            time: this.time,
            completed: completed,
            id,
          });
          await this.getTodos();
          this.$router.push("/projects");
        } 
      },
      resetForm(e) {
        e.preventDefault();
        this.task = "";
      },
      cancel() {
        this.$router.push("/projects");
      },
      
    }
}
</script>

<style scoped>
  .addtask-form, .update-form {
    margin:0 15%;
    display: flex;
    flex-wrap: wrap;
  }
  .input-form {
    width: 100%;
    border-radius: 15px;
    font-size: 18px;
    /* margin-left: 10px; */
    padding: 10px;
    outline: none;
    border: 2px solid #b29bd8;
    display: flex;
    /* flex: 1; */
  }
  .addtask-text, .update-text {
    width: 100%;
    font-weight: 600;
    color: #9a9a9a;
    font-size: 18px;
    display: flex;
  }
  .addtask-button, .update-button {
    margin-top: 30px;
  }
  .btn{
    /* border-top: 30px; */
    margin-right: 30px;
    border-radius: 10px;
    font-size: 18px;
    width: 85px;
  }

  .add_error{
    color: red;
  }
  .input_error{
        border: 2px solid red;
  }
  .check-complete{
    display:flex;
    width: 100%;
  }
  .input-check {
  -ms-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  transform: scale(2);
  padding: 10px;
  /* justify-content: center; */
  margin: 10px 30px;
}
</style>