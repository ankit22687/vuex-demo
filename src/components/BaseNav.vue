<template>
  <nav class="navbar">
    <div class="container-fluid">
      <slot name="brand">
        <router-link
          :to="$route.path"
          class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
        >
          {{ $route.name }}
        </router-link>
      </slot>
    </div>
  </nav>
</template>
<script>
export default {
  name: "base-nav",
};
</script>
<style>
</style>
