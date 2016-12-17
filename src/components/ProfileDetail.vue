<template>
  <div>
    <img class="ui circular image" :src="profile.photo" v-if="profile.photo">
    <h4>Name:</h4> {{ profile.name | upper }}
    <h4>Description:</h4> {{ profile.description }}
  </div>
</template>

<style scoped>
  img.circular.image {
    width: 180px;
    height: 180px;
  }
</style>

<script>
export default {
  props: ['profile']
}
</script>
