<template>
  <div class="sounds hero is-fullh has-background-black-ter">
    <div class="container center-column">
      <Tabview id="tv1"/>
      <Tabview id="tv2"/>
      <Tabview id="tv3"/>
    </div>
  </div>
</template>


<script>
import Tabview from "@/components/TabView";
import {useSettings} from "@/settings_store";

export default {
  name: "Sounds",
  components: {Tabview},
  setup() {
    return { state: useSettings() };
  }
};
</script>


<style scoped></style>
