<template>
  <div>
    <h1>Sample Page</h1>
    <router-link :to="{ name: 'sample-message' }">
      👉🏻 Go to Test API!
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'sample-intro',
};
</script>
