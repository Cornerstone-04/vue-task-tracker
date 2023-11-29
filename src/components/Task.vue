<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder && 'reminder', 'task']">
        <h3>
            {{ task.text }}
            <button @click="onDelete(task.id)">
                <i class="fa-solid fa-times text-gray-500 hover:text-red-500 transition-all ease-linear"></i>
            </button>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: {
            type: Object,
        },
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-task', id)
        }
    }
};
</script>

<style scope>
div.task {
    @apply bg-[#f4f4f4] m-[5px] py-[10px] px-5 cursor-pointer border-l-[5px] border-gray-500 transition-all ease-linear;
}

.task.reminder {
    @apply border-l-[5px] border-green-500 transition-all ease-linear
}

.task h3 {
    @apply flex items-center justify-between font-helvetica
}
</style>
