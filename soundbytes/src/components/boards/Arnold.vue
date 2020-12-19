<template>
  <div class="welcome-text center">
    Arnold, Under Construction
  </div>
</template>

<script>
import {useSettings} from "@/settings_store";
import {reactive} from "vue";

export default {
  name: "Arnold",

  setup() {
    const state = reactive({
      settings: useSettings(),
    })

    return { state };
  }

}
</script>

<style scoped>

</style>