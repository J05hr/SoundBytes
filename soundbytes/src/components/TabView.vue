<template>
  <div class="tabs">
    <div class="select">
        <select>
          <option value="">Select Category</option>
          <option value="Games">Games</option>
          <option value="Characters">Characters</option>
          <option value="Memes">Memes</option>
        </select>
    </div>
    <ul id="tabList">
    </ul>
  </div>
</template>


<script>
import {useSettings} from "@/settings_store";

export default {
  name: "tabview",
  setup() {
    return { state: useSettings() };
  }
}
</script>


<style scoped>
</style>