<template>
  <div class="weekly-content-item" @click="markItemAsFavorite">
  <template v-if="isBirthday">
    <div class="birthday-container"></div>
    <h2>{{ title }}<span>{{ emoji }}</span>️</h2>
    <p class="smaller-text bold">{{ content }}</p>
  </template>
  <template v-else>
    <h1 class="large-text">{{ title }}<span>{{ emoji }}</span>️</h1>
    <p class="dark-grey-text">{{ content }}</p>
    <template v-if="isUpcomingToday">
      <font-awesome-icon icon="star" :class="[isFavorite ? 'favorite' : '']"/>
    </template>
  </template>
  </div>
</template>

<script>

export default {
  name: 'WeeklyContentItem',
  props: {
    title: String, 
    emoji: String, 
    content: String,
    isBirthday: Boolean,
    isUpcomingToday: Boolean,
  },
  data() {
    return {
      isFavorite: true
    }
  }, 
  methods: {
    markItemAsFavorite() {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

<style scoped>
  svg {
    top: 1rem;
    right: 1rem;
    height: 1.2rem;
    position: absolute;
    filter: brightness(0) saturate(100%) invert(97%) sepia(21%) saturate(6173%) hue-rotate(328deg) brightness(121%) contrast(92%);
    transition: filter 150ms;
  }

  svg.go-to {
    left: 1rem !important;
    top: 2rem;
    filter: brightness(0) saturate(100%) invert(97%) sepia(21%) saturate(6173%) hue-rotate(328deg) brightness(121%) contrast(92%);
  }

  svg.favorite {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7464%) hue-rotate(227deg) brightness(99%) contrast(103%);
  }
</style>
