<template>
  <div>
    <h1 class="text-body-text">Color mode: {{ $colorMode.value }}</h1>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline">
          <Icon v-if="$colorMode.preference === 'dark'" name="material-symbols:dark-mode" />
          <Icon v-if="$colorMode.preference === 'light'" name="material-symbols:sunny-outline-rounded" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="$colorMode.preference = 'light'">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem @click="$colorMode.preference = 'dark'">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem @click="$colorMode.preference = 'system'">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Button variant="link">
      <NuxtLink to="/playground">
        To the playground!
      </NuxtLink>
    </Button>
  </div>
</template>