<template>
  <div class="container welcome-text center">
    <p class="center">Sound Effects, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "SoundEffects",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>