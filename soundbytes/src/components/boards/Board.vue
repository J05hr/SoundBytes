<template>

</template>

<script>
import {useSettings} from "@/settings_store";

export default {
  name: "Board",
  setup() {
    return { state: useSettings() };
  }
}
</script>

<style scoped>

</style>