<script setup lang="ts">

const colorMode = useColorMode()

const toggleTheme = () => {
  if (colorMode.preference === 'dark') return colorMode.preference = 'light'

  return colorMode.preference = 'dark'
}

</script>

<template>
  <Button variant="outline" @click="toggleTheme">
    <Icon v-if="$colorMode.preference === 'light'" name="material-symbols:dark-mode" />
    <Icon v-if="$colorMode.preference === 'dark'" name="material-symbols:sunny-outline-rounded" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
