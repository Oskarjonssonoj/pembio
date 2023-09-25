<template>
  <div class="week-list-container">
    <p class="title grey-text bold">All year</p>
    <div class="week-list">
      <div v-for="(week, index) in weekList" :key="week.name" class="week-item grey-text bold" @click="$emit('changeWeek', index)">
        <p :class="['each-week-item', week.isActive ? 'active' : 'inactive']">{{ week.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WeekList',
  props: {
      weekList: Array
  }, 
  emits: ['changeWeek']
}
</script>

<style scoped>

</style>
