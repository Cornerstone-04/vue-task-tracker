<template>
  <div class="container">
    <Header
      title="Task Tracker"
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask" class="transition-all ease-linear">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/Addtask";
import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

export default {
  name: "App",
  components: {
    AddTask,
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async addTask(task) {
      try {
        const response = await axios.post(`${baseURL}/tasks`, task, {
          headers: {
            "Content-type": "application/json",
          },
        });
        this.tasks = [...this.tasks, response.data];
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id) {
      try {
        if (confirm("Are you sure?")) {
          await axios.delete(`${baseURL}/tasks/${id}`);
          this.tasks = this.tasks.filter((task) => task.id !== id);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async toggleReminder(id) {
      try {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
          const updatedTask = { ...task, reminder: !task.reminder };
          await axios.patch(`${baseURL}/tasks/${id}`, updatedTask, {
            headers: {
              "Content-type": "application/json",
            },
          });
          this.tasks = this.tasks.map((t) => (t.id === id ? updatedTask : t));
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTasks() {
      try {
        const response = await axios.get(`${baseURL}/tasks`);
        return response.data; // Return the data
      } catch (error) {
        console.error("There was an error!", error);
      }
    },
    async fetchTask(id) {
      try {
        const response = await axios.get(`${baseURL}/tasks/${id}`);
        return response.data; // Return the data
      } catch (error) {
        console.error("There was an error!", error);
      }
    },
  },
  created() {
    // Immediately-invoked async function
    (async () => {
      this.tasks = await this.fetchTasks();
    })();
  },
};
</script>
