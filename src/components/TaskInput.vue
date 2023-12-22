<template>
  <div class="p-4">
    <label for="new-task" class="sr-only">
      New Task
      <input
        id="new-task"
        class="p-2 border border-gray-300 rounded w-full"
        type="text"
        placeholder="Enter a new task..."
        v-model="newTaskTitle"
        @keyup.enter="handleAddTask"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['addTask'],
  setup(_, { emit }) {
    const newTaskTitle = ref('');

    const handleAddTask = () => {
      if (newTaskTitle.value.trim()) {
        emit('addTask', newTaskTitle.value);
        newTaskTitle.value = '';
      }
    };

    return { newTaskTitle, handleAddTask };
  },
});
</script>
