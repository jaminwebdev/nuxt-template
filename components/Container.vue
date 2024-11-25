<script setup lang="ts">
  interface Props {
    classes?: string;
  }

  const { classes } = defineProps<Props>()
</script>

<template>
  <div class="max-w-[1240px] px-5 mx-auto" :class="classes">
    <slot />
  </div>
</template>