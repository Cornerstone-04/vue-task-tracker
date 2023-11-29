<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      className="btn"
      :label="showAddTask ? 'Close' : 'Add'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Hello World",
    },
    showAddTask: {
      type: Boolean,
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  @apply flex justify-between items-center mb-[20px] font-helvetica;
}

h1 {
  @apply text-3xl font-bold;
}
</style>
