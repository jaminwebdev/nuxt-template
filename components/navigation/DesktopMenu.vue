<template>
  <nav class="hidden md:flex justify-between items-center py-5">
    <div>
      <NuxtLink to="/">
        <SiteLogo />
      </NuxtLink>
    </div>
    <div class="flex gap-5">
      <NavigationMenu>
        <NavigationMenuList class="text-lg flex gap-4">
          <NavigationMenuItem>
            <NuxtLink to="/playground">
              <NavigationMenuLink>
                Playground
              </NavigationMenuLink>
            </NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle />
    </div>
  </nav>  
</template>