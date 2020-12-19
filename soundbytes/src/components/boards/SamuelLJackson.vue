<template>
  <div class="container welcome-text center">
    <p class="center">Samuel L Jackson, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "SamuelLJackson",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>