<template>
  <div class="weekly-content flex-horizontal">
    <WeeklyContentItem title="Upcoming week" 
                       emoji="✌️" 
                       content="Here's a quick summary of your week. Check out these performance statistics and personalized tips."
    />
    <div class="weekly-activities-container">
      <WeeklyActivities />
    </div>
  </div>
</template>

<script>

import WeeklyActivities from './WeeklyActivities.vue'
import WeeklyContentItem from './WeeklyContentItem.vue'

export default {
  name: 'WeeklyContent',
  components: {
    WeeklyActivities,
    WeeklyContentItem
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  .weekly-content {
    flex: 1;
    margin: 0 1rem;
    justify-content: space-between;
  }

  .weekly-activities-container {
    height: 95%;
    padding-left: 3rem;
    border-left: solid 3px #f1f1f1;
  }
</style>
