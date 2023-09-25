<template>
  <div class="weekly-content-item weekly-tasks flex-vertical">
    <div>
      <h1 class="large-text">Monday sync</h1>
      <p class="tasks-description dark-grey-text">Below are all the tasks you've been assigned to for this week. Mark task finished by clicking on it.</p>
      <div class="tasks-list">
        <div v-for="task in workTasks" :key="task.title" :id="task.title" :class="['task-item', 'grey-text', task.completed ? 'completed' : 'incompleted']" @click="markTaskAsCompleted(task)">
            <p class="dark-grey-text">• {{ task.title }}</p>
        </div>
      </div>
    </div>
    <div class="form-container flex-vertical">
      <input type="text" placeholder="Write a task..." name="task-input" maxlength="25" v-model="taskValue">
      <button class="bold" @click="addTask" :disabled="taskValue.length < 3">Add task</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WeeklyTasks',
  data() {
    return {
      workTasks: [
        {title: 'Sales meeting', completed: false},
        {title: 'Interview w/ Erin', completed: false},
        {title: 'Scrum meeting', completed: false},
      ],
      taskValue: ''
    }
  },
  methods: {
    addTask() {
      let taskObject = {title: this.taskValue, completed: false}
      this.workTasks.push(taskObject);
      
      this.taskValue = ''

      // in order tp scroll list to bottom
      let updatedList = document.querySelector('.tasks-list')
      setTimeout(() => {
        updatedList.scrollTop = updatedList.scrollHeight;
      }, 50);
    },
    markTaskAsCompleted(task) {
      task.completed = !task.completed
    }
  }
}
</script>

<style scoped>
  
</style>
