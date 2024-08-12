<template>
    <div>
        <h2>{{ foodName }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    /*props: {
      foodName: {
        type: String,
        required: true
      },
      foodDesc: String,
      isFavorite: Boolean
    } */
        props: [
      'foodName'
    ]
  };
  </script>
  
  <style></style>