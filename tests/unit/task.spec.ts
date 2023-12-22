import { ref } from 'vue';
import { ToDoItem } from '@/models/ToDoItem';

describe('ToDo App Core Functionalities', () => {
  const tasks = ref<ToDoItem[]>([]);
  const addTask = (title: string) => {
    const newTask = { id: Date.now(), title, completed: false };
    tasks.value.push(newTask);
  };
  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  it('adds a new task', () => {
    addTask('New Task');
    expect(tasks.value).toHaveLength(1);
    expect(tasks.value[0].title).toBe('New Task');
  });

  it('removes a task', () => {
    const taskId = tasks.value[0].id;
    removeTask(taskId);
    expect(tasks.value).toHaveLength(0);
  });
});
