<template>
  <div class="workplace layout">
    <MenuList/>
    <div class="right-section">
      <WeeklyContent/>
      <WeekList :weekList=weekList @changeWeek="toggleNewWeek"/>
    </div>
  </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import WeeklyContent from '../components/WeeklyContent.vue'
import WeekList from '../components/WeekList.vue'

export default {
  name: 'WorkSpace',
  components: {
    MenuList,
    WeeklyContent,
    WeekList
  },
  data() {
    return {
      weekList: [
        {name: 'W.18', isActive: true},
        {name: 'W.19', isActive: false},
        {name: 'W.20', isActive: false},
        {name: 'W.21', isActive: false},
        {name: 'W.22', isActive: false},
        {name: 'W.23', isActive: false},
        {name: 'W.24', isActive: false},
        {name: 'W.25', isActive: false},
        {name: 'W.26', isActive: false},
        {name: 'W.27', isActive: false},
        {name: 'W.28', isActive: false},
        {name: 'W.29', isActive: false},
        {name: 'W.30', isActive: false},  
      ]
    }
  },
  methods: {
    toggleNewWeek(index) {
      let newWeekList = this.weekList;

      for (let i = 0; i < newWeekList.length; i++) {
        newWeekList[i].isActive = false;
      }

      newWeekList[index].isActive = true;

      this.updateWeekList = newWeekList;
    }
  },
  computed: {
    updateWeekList: {
      get() {
        return this.weekList
      },
      set(weeks) {
        this.weekList = weeks;
      }
    }
  }
}
</script>

<style scoped>
  .workplace {
    width: 95%;
    height: 85%;
    display: flex;
    max-width: 1400px;
    padding: 0.5rem 0 0.5rem 0.5rem;
    justify-content: space-between;
  }

  .right-section {
    display: flex;
    margin-top: 5.5rem;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
