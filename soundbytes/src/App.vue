<template>
  <router-view/>
</template>


<script>
import {useSettings} from "@/settings_store";

export default {
  name: "SoundBytes",
  setup() {
    return { state: useSettings() };
  }
};
</script>


<style>
@import "~bulma/css/bulma.css";
@import "./styles/app.css";
@import "./styles/text.css";
</style>