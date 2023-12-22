<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-5">
    <task-input @addTask="addTask" />
    <task-list :tasks="tasks" @toggleTask="toggleTask" @removeTask="removeTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import TaskInput from './components/TaskInput.vue';
import TaskList from './components/TaskList.vue';
import { ToDoItem } from './models/ToDoItem';

export default defineComponent({
  name: 'App',
  components: {
    TaskInput,
    TaskList,
  },
  setup() {
    const tasks = ref<ToDoItem[]>([]);

    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
    };

    const addTask = (title: string) => {
      const newTask = {
        id: Date.now(),
        title,
        completed: false,
      };
      tasks.value.push(newTask);
      saveTasks();
    };

    const toggleTask = (id: number) => {
      const taskToToggle = tasks.value.find((t) => t.id === id);
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
        saveTasks();
      }
    };

    const removeTask = (id: number) => {
      tasks.value = tasks.value.filter((t) => t.id !== id);
      saveTasks();
    };

    onMounted(() => {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks.value = JSON.parse(storedTasks);
      }
    });

    return {
      tasks,
      addTask,
      toggleTask,
      removeTask,
    };
  },
});
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
