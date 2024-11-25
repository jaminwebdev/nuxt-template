<template>
  <nav class="flex md:hidden justify-between py-5">
    <NuxtLink to="/">
      <SiteLogo />
    </NuxtLink>
    <div class="flex items-center gap-8">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger>
          <Icon name="solar:hamburger-menu-broken" size="36px" />
        </SheetTrigger>
        <SheetContent class="bg-slate-100 dark:bg-slate-950 grid content-start pt-24 grid-cols-1">
          <SheetClose>
            <NuxtLink to="/playground" class="text-xl font-bold">
              Playground
            </NuxtLink>
          </SheetClose>
          <SheetClose>
            <NuxtLink to="/blog" class="text-xl font-bold">
              Blog
            </NuxtLink>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</template>