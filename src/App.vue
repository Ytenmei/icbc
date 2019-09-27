<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class='router-view'/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class='router-view'/>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style>

</style>
