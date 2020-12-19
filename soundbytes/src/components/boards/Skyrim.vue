<template>
  <div class="container welcome-text center">
    <p class="center">Skyrim, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Skyrim",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>