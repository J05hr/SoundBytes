<template>
  <div class="welcome hero is-fullh has-background-black-ter">
    <div class="container center">
      <p class="welcome-text">Hello Memelord</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Welcome",
  props: {},
  mounted() {
    setTimeout(() => this.$router.push("Sounds"), 5000);
  }
};
</script>


<style scoped>
</style>
