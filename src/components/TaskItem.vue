<template>
  <div class="flex items-center justify-between p-3 border-b border-gray-300-item">
    <label :for="checkboxId" class="flex items-center">
      <input
        type="checkbox"
        :id="checkboxId"
        class="mr-2 h-5 w-5"
        :checked="localTask.completed"
        @change="handleToggle"
      />
      <button class="bg-red-500 text-white p-2 rounded hover:bg-red-600" @click="handleRemove">
        Remove
      </button>
    </label>
    <button @click="handleRemove">Remove</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { ToDoItem } from '@/models/ToDoItem';

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<ToDoItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const localTask = computed(() => ({ ...props.task }));
    const checkboxId = computed(() => `task-${props.task.id}`);

    const handleToggle = () => {
      emit('toggleTask', props.task.id);
    };

    const handleRemove = () => {
      emit('removeTask', props.task.id);
    };

    return {
      localTask, handleToggle, handleRemove, checkboxId,
    };
  },
});
</script>
