<template>
  <div class="container welcome-text center">
    <p class="center">Dr. Phil, Under Construction</p>
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "DrPhil",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>