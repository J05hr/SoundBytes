<template>
  <div class="container welcome-text center">
    <p class="center">Halo, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Halo",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>