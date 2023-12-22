<template>
  <div class="task-item">
    <label :for="checkboxId">
      <input
        type="checkbox"
        :id="checkboxId"
        :checked="localTask.completed"
        @change="handleToggle"
      />
      {{ task.title }}
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
