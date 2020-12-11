<template>
  <div class="welcome hero is-fullh has-background-black-ter">
    <div class="container center">
      <p class="welcome-text">Welcome to Pierre's Sounding Board</p>
    </div>
  </div>
</template>


<script>
import { useSettings} from "@/settings_store";

export default {
  name: "Welcome",
  setup() {
    return { state: useSettings() };
  },
  mounted() {
    setTimeout(() => this.$router.push("Sounds"), 5000);
  }
};
</script>


<style scoped>
</style>
