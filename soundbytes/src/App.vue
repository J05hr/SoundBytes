<template>
  <router-view/>
</template>


<script>
import { reactive } from 'vue';
import Settings from "@/objs/Settings";

export default {
  name: "SoundBytes",
  setup() {
    const state = reactive({
      settings: Settings
    })
  }
};
</script>


<style>
@import "~bulma/css/bulma.css";
@import "./styles/app.css";
@import "./styles/text.css";
</style>
