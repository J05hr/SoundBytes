<template>
  <div class="tabs">
    <div class="select">
        <select id="catList" v-model="state.curTypes">
          <option value="">Select Category</option>
          <option v-for="obj of state.settings.settings.catergories" v-bind:key="obj.Name" :value="obj.Types" @click="updatecat(obj.Name)">
            {{ obj.Name }}
          </option>
        </select>
    </div>
    <ul id="tabList">
      <li v-for="(type, idx) in state.curTypes"
          :class="{ 'is-active': type === state.curType }" :key="idx"
          @click="updatetype(type)">
          <a>{{ type }}</a>
      </li>
    </ul>
  </div>
  <div class="boards-container">
    <Arnold v-if="state.curType === 'Arnold'"/>
    <COD v-if="state.curType === 'Arnold'"/>
    <CS v-if="state.curType === 'Arnold'"/>
    <DrPhil v-if="state.curType === 'Arnold'"/>
    <Halo v-if="state.curType === 'Arnold'"/>
    <Lines v-if="state.curType === 'Arnold'"/>
    <Music v-if="state.curType === 'Arnold'"/>
    <NSFW v-if="state.curType === 'Arnold'"/>
    <Other v-if="state.curType === 'Arnold'"/>
    <Overwatch v-if="state.curType === 'Arnold'"/>
    <Pierre v-if="state.curType === 'Arnold'"/>
    <SamuelLJackson v-if="state.curType === 'Arnold'"/>
    <Skyrim v-if="state.curType === 'Arnold'"/>
    <SoundEffects v-if="state.curType === 'Arnold'"/>
    <Spongebob v-if="state.curType === 'Arnold'"/>
    <Wrestling v-if="state.curType === 'Arnold'"/>
  </div>
</template>


<script>
import {useSettings} from "@/settings_store";
import {reactive} from "vue";
import Arnold from "@/components/boards/Arnold";
import DrPhil from "@/components/boards/DrPhil";
import Halo from "@/components/boards/Halo";
import CS from "@/components/boards/CS";
import COD from "@/components/boards/COD";
import Lines from "@/components/boards/Lines";
import Music from "@/components/boards/Music";
import NSFW from "@/components/boards/NSFW";
import Other from "@/components/boards/Other";
import Overwatch from "@/components/boards/Overwatch";
import Pierre from "@/components/boards/Pierre";
import SamuelLJackson from "@/components/boards/SamuelLJackson";
import Skyrim from "@/components/boards/Skyrim";
import SoundEffects from "@/components/boards/SoundEffects";
import Spongebob from "@/components/boards/Spongebob";
import Wrestling from "@/components/boards/Wrestling";

export default {
  name: "tabview",
  components: {
    Wrestling,
    Spongebob,
    SoundEffects,
    Skyrim, SamuelLJackson, Pierre, Overwatch, Other, NSFW, Music, Lines, COD, CS, Halo, DrPhil, Arnold},
  setup() {

    const state = reactive({
      settings: useSettings(),
      curCat: "",
      curTypes: "",
      curType: ""
    })

    const updatecat = (cat) => {
      state.curType = cat;
    }

    const updatetype = (type) => {
      state.curType = type;
    }

    return { state, updatecat, updatetype };
  }
}
</script>


<style scoped>
</style>