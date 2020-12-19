<template>
  <div class="container welcome-text center">
    <p class="center">Pierre, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Pierre",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>