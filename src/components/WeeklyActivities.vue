<template>
  <div class="weekly-activities">
   <WeeklyTasks id="purple"/>
   <div class="right-column">
    <WeeklyContentItem id="birthday" 
                       title="Kate's birthday" 
                       emoji="✌️" 
                       content="In 2 days"
                       :is-birthday="true"
    />
    <WeeklyContentItem id="blue" 
                       class="task"
                       title="Design onboarding" 
                       content="15 PM"
                       :is-upcoming-today="true"
    />
   </div>
  </div>
</template>

<script>
import WeeklyContentItem from './WeeklyContentItem.vue'
import WeeklyTasks from './WeeklyTasks.vue'

export default {
  name: 'WeeklyActivities',
  components: {
    WeeklyContentItem,
    WeeklyTasks
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  .weekly-activities {
    display: flex;
  }

  .weekly-activities .right-column {
    display: flex;
    flex-direction: column;
  }
</style>
