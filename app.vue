<template>
  <div class="bg-neutral-100 font-body">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup >
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' }
  ],
})
</script>