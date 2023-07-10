<template>
  <div>
    <link rel="manifest" href="/manifest.json" />
    <nav-bar />
    <slot />
  </div>
</template>

<script>
import NavBar from "../components/atoms/navBar";
export default {
  components: { NavBar },
};
</script>
