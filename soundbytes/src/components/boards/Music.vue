<template>
  <div class="container welcome-text center">
    <p class="center">Music, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Music",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>