<template>
  <div class="task-list">
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggleTask="toggleTask"
      @removeTask="removeTask"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ToDoItem } from '@/models/ToDoItem';
import TaskItem from './TaskItem.vue';

export default defineComponent({
  components: { TaskItem },
  props: {
    tasks: Array as PropType<ToDoItem[]>,
    toggleTask: Function,
    removeTask: Function,
  },
});
</script>
