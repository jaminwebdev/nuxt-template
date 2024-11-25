<script setup>
const { data } = await useAsyncData('blog', () => queryContent('blog').find())
</script>

<template>
  <Container>
    <h1 class="mb-10">Blog posts</h1>
    <ul class="list-disc list-inside">
      <li v-for="post in data" class="text-xl">
        <NuxtLink :to="post._path" class="text-teal-500 hover:underline">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </Container>
</template>