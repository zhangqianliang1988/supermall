<template>
  <div id="profile">
    <nar-bar class="profile-nav">
      <div slot="center">我的</div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "@/components/common/navbar/NarBar";

export default {
  name: 'Profile',
  components: {
    NarBar
  }
}
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
