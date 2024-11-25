<script setup>
  const props = defineProps({
    classes: { type: String, required: false },
  })
</script>

<template>
  <nav :class="classes">
    <Sheet>
      <SheetTrigger>
        <Icon name="solar:hamburger-menu-broken" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </nav>
</template>