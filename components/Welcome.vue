<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Welcome, {{ username }}!</h1>
    <p class="text-gray-700">You are now logged in.</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    username: String,
  },
};
</script>
