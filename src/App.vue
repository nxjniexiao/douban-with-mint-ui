<template>
  <div id="app">
    <AuthRoute></AuthRoute>
    <router-view />
  </div>
</template>

<script>
import AuthRoute from './components/AuthRoute/AuthRoute';
export default {
  name: 'App',
  components: { AuthRoute }
};
</script>

<style></style>
