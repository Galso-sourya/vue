<template>
    <div>
        <h2>{{ foodName }}</h2>
    </div>
    <button @click="toggleFavorite">alert!!</button>
  </template>
  
  <script>
  export default {
    props: ['foodName'],
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite');
        }
    }
  };
  </script>
  
  <style></style>