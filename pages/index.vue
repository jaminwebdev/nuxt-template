<template>
  <Container>
    <h1>What's Included?</h1>
    <ul class="mt-6 grid gap-2">
      <li class="flex items-center gap-2">
        <Icon class='text-teal-400' name="material-symbols:check-circle" size="24px"/> 
        Nuxt Color mode: <strong>{{ $colorMode.value }}</strong>
      </li>
      <li class="flex items-center gap-2">
        <Icon class='text-teal-400' name="material-symbols:check-circle" size="24px"/> 
        Nuxt Icons 
      </li>
      <li class="flex items-center gap-2">
        <Icon class='text-teal-400' name="material-symbols:check-circle" size="24px"/> 
        Nuxt Image 
      </li>
      <li class="flex items-center gap-2">
        <Icon class='text-teal-400' name="material-symbols:check-circle" size="24px"/> 
        Nuxt Tailwind 
      </li>
      <li class="flex items-center gap-2">
        <Icon class='text-teal-400' name="material-symbols:check-circle" size="24px"/> 
        Nuxt Shadcn 
      </li>
      <li class="flex items-center gap-2">
        <Icon class='text-teal-400' name="material-symbols:check-circle" size="24px"/> 
        Nuxt SEO
      </li>
    </ul>
  </Container>
</template>