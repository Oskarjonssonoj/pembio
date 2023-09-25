<template>
  <div class="menu-list">
    <div class="list-container">
      <img alt="customer-logo" class="logo" src="../assets/images/logo.png">
      <div class="current-costumer-container">
        <p class="list-item costumer-name black-text bold" @click="toggleCustomerMenu">Sequoia <font-awesome-icon icon="caret-down" :class="[toggleDropdown ? 'opened' : 'closed']"/></p>
        <div :class="[toggleDropdown ? 'opened' : 'closed', 'current-costumer-content']">
          <p class="list-item navigation black-text bold">Copywriting</p>
          <p class="list-item navigation purple-text bold">Add a new room</p>
        </div>
      </div>
      <div class="invite-members-container">
        <p class="list-item navigation purple-text bold">Invite members</p>
        <span class="grey-text smaller-text bold">Add more members to collaborate with in your workspace</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuList',
  data() {
    return {
      toggleDropdown: true,
    }
  },
  methods: {
    toggleCustomerMenu() {
        this.toggleDropdown = !this.toggleDropdown;
    }
  }
}
</script>

<style scoped>
  
</style>