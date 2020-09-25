<template>
  <div class="root">
    <mobile v-if="$q.screen.xs" />
    <desktop v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"/>
    <tablet v-if="$q.screen.sm" />
  </div>
</template>

<script>
import desktop from './desktop'
import mobile from './mobile'
import tablet from './tablet'

export default {
  name: 'MainLayout',
  components: {
    desktop,
    mobile,
    tablet
  }
}
</script>
