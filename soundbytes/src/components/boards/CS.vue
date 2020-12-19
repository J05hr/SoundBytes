<template>
  <div class="container welcome-text center">
    <p class="center">CS, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "CS",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>