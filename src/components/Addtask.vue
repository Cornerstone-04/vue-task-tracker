<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label for="add_task">Task</label>
      <input
        type="text"
        name="add_task"
        id="add_task"
        placeholder="add task"
        v-model="text"
      />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input
        type="text"
        name="day"
        id="day"
        placeholder="Add day & time"
        v-model="day"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="set_reminder">Set Reminder</label>
      <input
        type="checkbox"
        name="set_reminder"
        id="set_reminder"
        v-model="reminder"
      />
    </div>
    <button class="btn btn-block">Save Task</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        // id: uuidv4(),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<style scoped>
.add-form {
  @apply mb-10 flex flex-col gap-5 w-full transition-all ease-linear;
}
.form-control {
  @apply flex flex-col gap-1;
}
.form-control label {
  @apply font-semibold;
}
.form-control input {
  @apply p-2 border-none outline-none;
}
.form-control-check {
  @apply flex flex-row justify-between items-center;
}
.form-control-check input {
  @apply w-5 h-5;
}
</style>
