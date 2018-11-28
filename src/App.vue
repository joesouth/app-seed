<template>
<div id="app">
  <!-- <transition name="fade" mode="out-in"> -->
    <router-view class="view"></router-view>
  <!-- </transition> -->
</div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";

export default {
  name: "app",
  components: {
    TopNav
  }
};
</script>

<style lang="scss">
// preloaded dependencies

//@import "~bulma/sass/utilities/_all";

//--------------------------------\\
//---------- PSP-LOGOS -----------\\

$icomoon-font-path: "./assets/logo/font";

$psp-logo-globe: "\1f311";
$psp-globe: "\1f311";
$psp-icon: "\1f311";
$psp-logo: "\1f30e";
$psp-perspectives-logo: "\1f30e";
$psp-logo-text: "\e902";
$psp-perspectives: "\e902";

//--------------------------------\\
//------------ BULMA -------------\\

@import "./assets/styles/app";

html,
body {
  background-color: $light;
}
</style>
