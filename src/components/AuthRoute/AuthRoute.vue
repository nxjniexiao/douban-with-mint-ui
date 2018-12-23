<template></template>

<script>
export default {
  name: "AuthRoute",
  mounted() {
    console.log("authroute mounted");
    const currPath = this.$router.history.current.path;
    if (currPath === "/") {
      this.$router.push("/home");
    }
  }
};
</script>

