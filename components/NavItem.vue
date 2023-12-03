<template>

  <NuxtLink :to="href">
    <p class="transition-all duration-600 hover:text-orange-400" :class='active? activeNavItem:notActiveNavItem'>
      <slot/>
    </p>
  </NuxtLink>

</template>

<script setup>
defineProps({
  active : Boolean,
  href: String,

})
let activeNavItem = "text-orange-400 sm:text-[10px] md:text-[12px] font-bold ";
let notActiveNavItem = "text-neutral-400 sm:text-[10px] md:text-[12px] font-medium "
</script>
