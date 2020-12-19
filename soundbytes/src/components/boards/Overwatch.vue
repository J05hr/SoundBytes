<template>
  <div class="container welcome-text center">
    <p class="center">Overwatch, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Overwatch",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>