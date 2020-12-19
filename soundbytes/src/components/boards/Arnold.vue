<template>
  <div class="welcome-text center">
    Arnold, Under Construction
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Arnold",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>